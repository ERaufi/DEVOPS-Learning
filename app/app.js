(function () {
  const STORAGE_KEY = "devops_learning_hub_v2";
  const curriculum = window.DEVOPS_CURRICULUM;

  let appState = loadState();
  let view = { type: "dashboard", lessonId: null, tab: "lesson" };
  let openPhases = { "phase-1": true };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
      completedLessons: {},   // lessonId -> true
      checklist: {},          // lessonId -> { index: bool }
      practice: {}            // lessonId -> { questionId: { correct, userAnswer } }
    };
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {}
  }

  function getPracticeStats(lessonId) {
    const lesson = curriculum.lessons[lessonId];
    if (!lesson || !lesson.practice) return { correct: 0, answered: 0, total: 0 };
    const p = lesson.practice;
    const total = (p.mcqs?.length || 0) + (p.commands?.length || 0) + (p.troubleshooting?.length || 0);
    const saved = appState.practice[lessonId] || {};
    const vals = Object.values(saved);
    return {
      correct: vals.filter(v => v.correct).length,
      answered: vals.length,
      total
    };
  }

  function getLessonStatus(lessonId) {
    if (appState.completedLessons[lessonId]) return "completed";
    const pStats = getPracticeStats(lessonId);
    const checks = Object.values(appState.checklist[lessonId] || {}).filter(Boolean).length;
    if (pStats.answered > 0 || checks > 0) return "in-progress";
    return "not-started";
  }

  function statusBadgeHtml(status) {
    if (status === "completed") return `<span class="badge green">Completed</span>`;
    if (status === "in-progress") return `<span class="badge yellow">In progress</span>`;
    return `<span class="badge neutral">Not started</span>`;
  }

  function normalizeCmd(str) {
    return str.trim().replace(/\s+/g, " ");
  }

  /* SIDEBAR */
  function renderSidebar() {
    const navDash = document.getElementById("navDashboard");
    navDash.classList.toggle("active", view.type === "dashboard");

    const phasesNav = document.getElementById("phasesNav");
    phasesNav.innerHTML = "";

    curriculum.phases.forEach(phase => {
      const isOpen = !!openPhases[phase.id];
      const group = document.createElement("div");
      group.className = "phase-group" + (isOpen ? " open" : "");

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "phase-toggle";
      toggle.innerHTML = `
        <span class="phase-toggle-left">
          <span class="phase-chevron">&#9654;</span>
          <span>${phase.title}</span>
        </span>
        <span class="phase-count">${phase.lessons.length}</span>
      `;
      toggle.addEventListener("click", () => {
        openPhases[phase.id] = !openPhases[phase.id];
        renderSidebar();
      });

      const list = document.createElement("div");
      list.className = "lesson-list";

      phase.lessons.forEach(lessonId => {
        const lesson = curriculum.lessons[lessonId];
        if (!lesson) return;
        const status = getLessonStatus(lessonId);
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lesson-link" + (view.type === "lesson" && view.lessonId === lessonId ? " active" : "");
        btn.innerHTML = `
          <span>${lesson.id} ${lesson.title}</span>
          <span class="status-dot ${status}" title="${status}"></span>
        `;
        btn.addEventListener("click", () => {
          openLesson(lessonId, "lesson");
          closeMobileSidebar();
        });
        list.appendChild(btn);
      });

      group.appendChild(toggle);
      group.appendChild(list);
      phasesNav.appendChild(group);
    });
  }

  /* DASHBOARD */
  function renderDashboard() {
    document.getElementById("breadcrumb").innerHTML = `<strong>Dashboard</strong>`;
    document.getElementById("topbarActions").innerHTML = "";

    const allLessonIds = Object.keys(curriculum.lessons);
    const completedCount = allLessonIds.filter(id => appState.completedLessons[id]).length;

    let totalCorrect = 0;
    let totalQuestions = 0;
    allLessonIds.forEach(id => {
      const s = getPracticeStats(id);
      totalCorrect += s.correct;
      totalQuestions += s.total;
    });

    const firstLessonId = allLessonIds[0];

    const main = document.getElementById("mainContent");
    main.innerHTML = `
      <div class="hero">
        <div class="badge-row">
          <span class="badge">Hands-On DevOps Curriculum</span>
          <span class="badge neutral">Offline HTML/CSS/JS App</span>
        </div>
        <h1>${curriculum.title}</h1>
        <p>${curriculum.subtitle}</p>
        ${firstLessonId ? `<button class="btn primary" id="heroStartBtn" type="button">Open Lesson ${firstLessonId}</button>` : ""}
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Phases Built</div>
          <div class="stat-value">${curriculum.phases.length}</div>
          <div class="stat-sub">Growing one lesson at a time</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Lessons Completed</div>
          <div class="stat-value">${completedCount} / ${allLessonIds.length}</div>
          <div class="stat-sub">Verified hands-on milestones</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Practice Score</div>
          <div class="stat-value">${totalCorrect} / ${totalQuestions}</div>
          <div class="stat-sub">${totalQuestions ? Math.round((totalCorrect / totalQuestions) * 100) : 0}% accuracy across drills</div>
        </div>
      </div>

      <div id="dashboardPhases"></div>
    `;

    const heroBtn = document.getElementById("heroStartBtn");
    if (heroBtn) {
      heroBtn.addEventListener("click", () => openLesson(firstLessonId, "lesson"));
    }

    const phasesContainer = document.getElementById("dashboardPhases");
    curriculum.phases.forEach(phase => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="phase-card-header">
          <div>
            <h3>${phase.title}</h3>
            <div class="lesson-row-meta">${phase.description}</div>
          </div>
          <span class="badge neutral">${phase.lessons.length} lesson${phase.lessons.length === 1 ? "" : "s"}</span>
        </div>
      `;

      phase.lessons.forEach(lessonId => {
        const lesson = curriculum.lessons[lessonId];
        if (!lesson) return;
        const status = getLessonStatus(lessonId);
        const pStats = getPracticeStats(lessonId);

        const row = document.createElement("div");
        row.className = "lesson-row";
        row.innerHTML = `
          <div>
            <div class="lesson-row-title">Lesson ${lesson.id} — ${lesson.title} ${statusBadgeHtml(status)}</div>
            <div class="lesson-row-meta">${lesson.summary}</div>
            <div class="lesson-row-meta" style="margin-top:4px;">Practice: ${pStats.correct} / ${pStats.total} correct</div>
          </div>
          <div class="lesson-row-actions">
            <button class="btn" type="button" data-action="lesson">Read Lesson</button>
            <button class="btn primary" type="button" data-action="practice">Practice</button>
          </div>
        `;
        row.querySelector('[data-action="lesson"]').addEventListener("click", () => openLesson(lessonId, "lesson"));
        row.querySelector('[data-action="practice"]').addEventListener("click", () => openLesson(lessonId, "practice"));
        card.appendChild(row);
      });

      phasesContainer.appendChild(card);
    });
  }

  /* LESSON VIEW */
  function openLesson(lessonId, tab) {
    view = { type: "lesson", lessonId, tab: tab || "lesson" };
    const lesson = curriculum.lessons[lessonId];
    if (lesson) openPhases[lesson.phaseId] = true;
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderLessonView() {
    const lesson = curriculum.lessons[view.lessonId];
    if (!lesson) {
      renderDashboard();
      return;
    }

    const status = getLessonStatus(lesson.id);
    const pStats = getPracticeStats(lesson.id);

    document.getElementById("breadcrumb").innerHTML = `${lesson.phaseLabel} &rsaquo; <strong>Lesson ${lesson.id}</strong>`;

    const topActions = document.getElementById("topbarActions");
    topActions.innerHTML = "";
    const completeBtn = document.createElement("button");
    completeBtn.type = "button";
    completeBtn.className = appState.completedLessons[lesson.id] ? "btn success" : "btn";
    completeBtn.textContent = appState.completedLessons[lesson.id] ? "✓ Marked Completed" : "Mark Completed";
    completeBtn.addEventListener("click", () => {
      appState.completedLessons[lesson.id] = !appState.completedLessons[lesson.id];
      saveState();
      renderAll();
    });
    topActions.appendChild(completeBtn);

    const main = document.getElementById("mainContent");
    main.innerHTML = `
      <div class="lesson-header">
        <div class="badge-row">
          <span class="badge">${lesson.phaseLabel}</span>
          ${statusBadgeHtml(status)}
          <span class="badge neutral">Local: ${lesson.environment.local}</span>
          <span class="badge neutral">Remote: ${lesson.environment.remote}</span>
        </div>
        <h1>Lesson ${lesson.id} — ${lesson.title}</h1>
        <p>${lesson.summary}</p>
      </div>

      <div class="tabs">
        <button class="tab-btn ${view.tab === "lesson" ? "active" : ""}" id="tabLesson" type="button">Lesson Guide</button>
        <button class="tab-btn ${view.tab === "practice" ? "active" : ""}" id="tabPractice" type="button">
          Interactive Practice (${pStats.correct}/${pStats.total})
        </button>
      </div>

      <div id="tabBody"></div>
    `;

    document.getElementById("tabLesson").addEventListener("click", () => {
      view.tab = "lesson";
      renderLessonView();
    });
    document.getElementById("tabPractice").addEventListener("click", () => {
      view.tab = "practice";
      renderLessonView();
    });

    if (view.tab === "lesson") {
      renderLessonContent(lesson);
    } else {
      renderPracticeContent(lesson);
    }
  }

  function makeCodeBlock(codeText) {
    const wrap = document.createElement("div");
    wrap.className = "code-block";
    const pre = document.createTextNode(codeText);
    wrap.appendChild(pre);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText).then(() => {
          btn.textContent = "Copied!";
          setTimeout(() => (btn.textContent = "Copy"), 1200);
        });
      }
    });
    wrap.appendChild(btn);
    return wrap;
  }

  function renderLessonContent(lesson) {
    const body = document.getElementById("tabBody");
    body.innerHTML = "";

    // 1. Learning Objectives
    const objCard = document.createElement("div");
    objCard.className = "card prose";
    objCard.innerHTML = `
      <h2 class="section-h">1. Learning Objectives</h2>
      <ul>${lesson.objectives.map(o => `<li>${o}</li>`).join("")}</ul>
    `;
    body.appendChild(objCard);

    // 2. Concepts
    const conceptCard = document.createElement("div");
    conceptCard.className = "card prose";
    conceptCard.innerHTML = `<h2 class="section-h">2. Concepts &amp; Explanations</h2>` +
      lesson.concepts.map(c => `
        <h3 style="margin:14px 0 6px; font-size:15.5px; color:var(--accent);">${c.heading}</h3>
        ${c.body.map(p => `<p>${p}</p>`).join("")}
      `).join("");
    body.appendChild(conceptCard);

    // 3. Commands
    const cmdCard = document.createElement("div");
    cmdCard.className = "card";
    cmdCard.innerHTML = `
      <h2 class="section-h">3. Commands &amp; Execution Location</h2>
      <div class="callout warn">
        <strong>Safety reminder:</strong> Replace placeholders like <code>&lt;VPS_IP&gt;</code> with your actual VPS IP. Never share passwords, private keys, or <code>.env</code> secrets.
      </div>
    `;
    lesson.commandGroups.forEach(group => {
      const h = document.createElement("h3");
      h.style.cssText = "margin:16px 0 8px; font-size:14.5px; color:var(--accent);";
      h.textContent = `Run on: ${group.location}`;
      cmdCard.appendChild(h);

      const table = document.createElement("table");
      table.className = "data-table";
      table.innerHTML = `
        <thead><tr><th style="width:36%;">Command</th><th>Purpose</th></tr></thead>
        <tbody>
          ${group.commands.map(c => `<tr><td><code>${escapeHtml(c.cmd)}</code></td><td>${c.desc}</td></tr>`).join("")}
        </tbody>
      `;
      cmdCard.appendChild(table);
    });
    body.appendChild(cmdCard);

    // 4. Practical Exercises
    const exCard = document.createElement("div");
    exCard.className = "card";
    exCard.innerHTML = `<h2 class="section-h">4. Practical Exercises</h2>`;
    lesson.exercises.forEach(ex => {
      const item = document.createElement("div");
      item.className = "exercise-item";
      item.innerHTML = `
        <div class="exercise-head">
          <span class="exercise-title">${ex.title}</span>
          <span class="q-env">${ex.location}</span>
        </div>
        <p style="margin:0 0 8px; font-size:14px; color:#d0d7de;">${ex.instructions}</p>
      `;
      item.appendChild(makeCodeBlock(ex.code));
      exCard.appendChild(item);
    });
    body.appendChild(exCard);

    // 5. Expected Results
    const resCard = document.createElement("div");
    resCard.className = "card prose";
    resCard.innerHTML = `
      <h2 class="section-h">5. Expected Results</h2>
      <ul>${lesson.expectedResults.map(r => `<li>${r}</li>`).join("")}</ul>
    `;
    body.appendChild(resCard);

    // 6. Troubleshooting
    const trCard = document.createElement("div");
    trCard.className = "card";
    trCard.innerHTML = `
      <h2 class="section-h">6. Common Errors &amp; Troubleshooting</h2>
      <table class="data-table">
        <thead><tr><th>Error</th><th>Likely Cause</th><th>Fix / Diagnose</th></tr></thead>
        <tbody>
          ${lesson.troubleshooting.map(t => `
            <tr>
              <td><code>${escapeHtml(t.error)}</code></td>
              <td>${t.cause}</td>
              <td>${t.fix}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
    body.appendChild(trCard);

    // 7. Practical Milestone Checklist
    const msCard = document.createElement("div");
    msCard.className = "card";
    msCard.innerHTML = `<h2 class="section-h">7. Milestone Checklist</h2>`;
    const ul = document.createElement("ul");
    ul.className = "checklist";

    const savedChecks = appState.checklist[lesson.id] || {};
    lesson.milestoneChecklist.forEach((text, i) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!savedChecks[i];
      cb.addEventListener("change", () => {
        if (!appState.checklist[lesson.id]) appState.checklist[lesson.id] = {};
        appState.checklist[lesson.id][i] = cb.checked;
        saveState();
        renderSidebar();
      });
      const span = document.createElement("span");
      span.textContent = text;
      label.appendChild(cb);
      label.appendChild(span);
      li.appendChild(label);
      ul.appendChild(li);
    });
    msCard.appendChild(ul);

    const goPractice = document.createElement("div");
    goPractice.style.marginTop = "16px";
    const goBtn = document.createElement("button");
    goBtn.type = "button";
    goBtn.className = "btn primary";
    goBtn.textContent = "Go to Interactive Practice →";
    goBtn.addEventListener("click", () => {
      view.tab = "practice";
      renderLessonView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    goPractice.appendChild(goBtn);
    msCard.appendChild(goPractice);

    body.appendChild(msCard);
  }

  /* PRACTICE TAB */
  function renderPracticeContent(lesson) {
    const body = document.getElementById("tabBody");
    body.innerHTML = "";

    const p = lesson.practice;
    const stats = getPracticeStats(lesson.id);
    const savedMap = appState.practice[lesson.id] || {};

    // Sticky scorebar
    const bar = document.createElement("div");
    bar.className = "scorebar";
    bar.innerHTML = `
      <div class="score-stats">
        <span>Score: <span class="score-num">${stats.correct} / ${stats.total}</span></span>
        <span>Answered: <span>${stats.answered} / ${stats.total}</span></span>
        <div class="progress-wrap"><div class="progress-fill" style="width:${stats.total ? Math.round((stats.answered / stats.total) * 100) : 0}%"></div></div>
      </div>
      <button class="btn" id="resetPracticeBtn" type="button">Reset Practice</button>
    `;
    bar.querySelector("#resetPracticeBtn").addEventListener("click", () => {
      appState.practice[lesson.id] = {};
      saveState();
      renderLessonView();
    });
    body.appendChild(bar);

    function saveAnswer(qId, correct, userAnswer) {
      if (!appState.practice[lesson.id]) appState.practice[lesson.id] = {};
      appState.practice[lesson.id][qId] = { correct, userAnswer };
      saveState();
      renderSidebar();
      renderLessonView();
    }

    // Part 1: MCQs
    const h1 = document.createElement("h2");
    h1.className = "section-h";
    h1.innerHTML = `Part 1: Concepts &amp; Prompt Awareness <span class="section-sub">(${p.mcqs.length} questions)</span>`;
    body.appendChild(h1);
    renderChoiceList(p.mcqs, "Question", savedMap, saveAnswer, body);

    // Part 2: Command Builder
    const h2 = document.createElement("h2");
    h2.className = "section-h";
    h2.style.marginTop = "26px";
    h2.innerHTML = `Part 2: Command Builder <span class="section-sub">(${p.commands.length} terminal drills)</span>`;
    body.appendChild(h2);

    p.commands.forEach((item, idx) => {
      const saved = savedMap[item.id];
      const card = document.createElement("div");
      card.className = "card" + (saved ? (saved.correct ? " correct" : " wrong") : "");
      card.innerHTML = `
        <div class="q-header">
          <span class="q-label">Command ${idx + 1}</span>
          <span class="q-env">${item.env}</span>
        </div>
        <p class="q-text">${item.question}</p>
        <div class="cmd-input-row">
          <span class="cmd-prompt">${item.prompt}</span>
          <input class="cmd-input" type="text" placeholder="${item.placeholder}" autocomplete="off" spellcheck="false" />
        </div>
        <div class="cmd-actions">
          <button class="btn primary check-btn" type="button">Check Command</button>
          <button class="btn hint-btn" type="button">Hint</button>
          <button class="btn show-btn" type="button">Show Answer</button>
        </div>
        <div class="feedback"></div>
      `;

      const input = card.querySelector(".cmd-input");
      const fb = card.querySelector(".feedback");

      if (saved) {
        input.value = saved.userAnswer || "";
        fb.className = `feedback show ${saved.correct ? "ok" : "bad"}`;
        fb.innerHTML = saved.correct
          ? `<strong>Correct!</strong> ${item.explanation}`
          : `<strong>Expected:</strong> <code>${escapeHtml(item.accepted[0])}</code>. ${item.explanation}`;
      }

      function check() {
        const val = normalizeCmd(input.value);
        if (!val) return;
        const ok = item.accepted.some(acc => acc === val);
        saveAnswer(item.id, ok, val);
      }

      card.querySelector(".check-btn").addEventListener("click", check);
      input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
      card.querySelector(".hint-btn").addEventListener("click", () => {
        fb.className = "feedback show hint";
        fb.innerHTML = `<strong>Hint:</strong> ${item.hint}`;
      });
      card.querySelector(".show-btn").addEventListener("click", () => {
        saveAnswer(item.id, false, input.value || "(revealed)");
      });

      body.appendChild(card);
    });

    // Part 3: Troubleshooting
    const h3 = document.createElement("h2");
    h3.className = "section-h";
    h3.style.marginTop = "26px";
    h3.innerHTML = `Part 3: Troubleshooting Scenarios <span class="section-sub">(${p.troubleshooting.length} real errors)</span>`;
    body.appendChild(h3);
    renderChoiceList(p.troubleshooting, "Scenario", savedMap, saveAnswer, body);
  }

  function renderChoiceList(items, prefix, savedMap, saveAnswer, container) {
    items.forEach((item, idx) => {
      const saved = savedMap[item.id];
      const card = document.createElement("div");
      card.className = "card" + (saved ? (saved.correct ? " correct" : " wrong") : "");
      const termHtml = item.terminal ? `<div class="terminal-box">${item.terminal}</div>` : "";
      card.innerHTML = `
        <div class="q-header">
          <span class="q-label">${prefix} ${idx + 1}</span>
          <span class="q-env">${item.env}</span>
        </div>
        ${termHtml}
        <p class="q-text">${item.question}</p>
        <div class="options"></div>
        <div class="feedback"></div>
      `;

      const optDiv = card.querySelector(".options");
      const fb = card.querySelector(".feedback");

      item.options.forEach((optText, optIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.innerHTML = optText;

        if (saved) {
          btn.disabled = true;
          if (optIdx === saved.userAnswer) {
            btn.classList.add(saved.correct ? "selected-correct" : "selected-wrong");
          }
          if (!saved.correct && optIdx === item.answer) {
            btn.classList.add("reveal-correct");
          }
        }

        btn.addEventListener("click", () => {
          if (savedMap[item.id]) return;
          saveAnswer(item.id, optIdx === item.answer, optIdx);
        });
        optDiv.appendChild(btn);
      });

      if (saved) {
        fb.className = `feedback show ${saved.correct ? "ok" : "bad"}`;
        fb.innerHTML = `<strong>${saved.correct ? "Correct!" : "Not quite."}</strong> ${item.explanation}`;
      }

      container.appendChild(card);
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function closeMobileSidebar() {
    document.getElementById("sidebar").classList.remove("open");
  }

  function renderAll() {
    renderSidebar();
    if (view.type === "dashboard") {
      renderDashboard();
    } else {
      renderLessonView();
    }
  }

  document.getElementById("navDashboard").addEventListener("click", () => {
    view = { type: "dashboard", lessonId: null, tab: "lesson" };
    renderAll();
    closeMobileSidebar();
  });

  document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });

  renderAll();
})();
