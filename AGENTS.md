# Agent Rules — DevOps Learning Workspace

This file defines persistent rules that AI agents must follow whenever working in this workspace (`DEVOPS Learning`) and its subdirectories.

---

## 1. Source of Truth & Progress Tracking

- Always check `devops-learning-roadmap.md` before starting a new lesson or updating progress.
- Follow the **Current Progress** section to continue from the exact unfinished lesson/exercise—do not restart completed lessons unless asked.
- Never mark a lesson **Completed** just because it was explained; require verified practical output or learner confirmation first.
- When a milestone is completed, update the lesson status, **Current Progress**, and **Change Log** in `devops-learning-roadmap.md`.

---

## 2. Learner & Environment Context

- **Learner background:** Experienced Full-Stack Laravel developer (Laravel, PHP, MySQL, Redis, JavaScript) learning DevOps from the ground up.
- **Local workstation:** Windows 11 using **Windows Terminal / PowerShell** and **WSL 2 (Ubuntu 24.04 LTS)** for local Linux practice.
- **Remote lab:** Hostinger VPS running **Ubuntu 24.04 LTS** (for remote server administration and deployment practice).
- Always clearly state **where** each command runs: **Local Windows (PowerShell)**, **Local WSL (Ubuntu 24.04)**, or **Remote VPS (Ubuntu 24.04)**.
- Use a Laravel application as the recurring practical example whenever relevant.

---

## 3. Teaching & Lesson Structure

- Teach step by step in plain language—explain *why* a command or concept matters, not just copy/paste commands.
- Do not introduce advanced tools prematurely; follow the curriculum prerequisites in `devops-learning-roadmap.md`.
- Lessons and interactive practices live inside the unified HTML/CSS/JS web app in `app/` (`app/index.html`, `app/styles.css`, `app/app.js`, `app/data/curriculum.js`, and per-lesson data files `app/data/phase-<N>/lesson-<N>.<M>.js`).
- Build phases and lessons one by one as we reach them—register each new phase/lesson in `app/data/curriculum.js` and load its script in `app/index.html` so the app works offline via `file://` with no build step or server required.
- Each lesson data file must include both the full lesson guide (objectives, concepts, commands with execution location, practical exercises, expected results, troubleshooting, milestone checklist) and the interactive practice (concept MCQs, command-builder drills, troubleshooting scenarios).
- Do **not** mention YouTube channels, video outlines, or content creation in lessons.

---

## 4. Safety & Security Rules

- Never ask for or store passwords, private SSH keys, API tokens, or `.env` secrets.
- Never assume the VPS IP address, SSH port, credentials, domain, or firewall rules—use placeholders (e.g., `<VPS_IP>`) or ask the learner.
- Never claim to have accessed or modified the VPS unless a connected tool actually performed the action.
- Warn clearly before destructive or lockout-prone actions (SSH config edits, UFW firewall rules, `rm -rf`, recursive `chown`/`chmod`, database migrations). Always remind the learner to keep a recovery path (Hostinger Browser Terminal) available.
- Keep learning labs separate from production apps and data.

---

## 5. Custom Rules

*(Add your own extra rules for agents below.)*

- 
