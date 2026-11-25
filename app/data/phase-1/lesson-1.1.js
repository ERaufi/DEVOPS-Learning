window.DEVOPS_CURRICULUM.lessons["1.1"] = {
  id: "1.1",
  phaseId: "phase-1",
  phaseLabel: "Phase 1 — Linux Fundamentals",
  title: "Install WSL & Ubuntu 24.04 on Windows 11",
  summary: "Set up a real Linux environment inside Windows 11 using wsl --install, inspect available distributions with wsl --list --online, and install Ubuntu-24.04 LTS.",
  environment: {
    local: "Windows 11 (PowerShell as Administrator)",
    remote: "Local WSL 2 (Ubuntu 24.04 LTS)"
  },
  objectives: [
    "Explain what WSL 2 (Windows Subsystem for Linux) is and why developers use it instead of heavy virtual machines or dual-booting.",
    "Use wsl --install to enable WSL 2 and Windows Virtual Machine features in a single command.",
    "List all official Linux distributions available online using wsl --list --online.",
    "Install the exact long-term support Ubuntu release using wsl --install -d Ubuntu-24.04.",
    "Complete first-boot Linux user creation and verify your running Ubuntu 24.04 LTS environment."
  ],
  concepts: [
    {
      heading: "Why Start DevOps with WSL 2 on Windows 11?",
      body: [
        "In production, almost every modern Laravel app, Docker container, Nginx web server, and CI/CD runner runs on <strong>Linux</strong>—not Windows.",
        "<strong>WSL 2 (Windows Subsystem for Linux)</strong> lets you run a genuine Linux kernel directly inside Windows 11 with near-native speed, lightweight memory usage, and seamless integration with Windows Terminal and VS Code—giving you a safe local Linux sandbox before touching live VPS servers."
      ]
    },
    {
      heading: "Understanding the 3 Core WSL Installation Commands",
      body: [
        "<ul>" +
          "<li><strong><code>wsl --install</code>:</strong> The all-in-one setup command. On a fresh Windows 11 machine, it automatically enables the required Windows features (<em>Virtual Machine Platform</em> and <em>Windows Subsystem for Linux</em>), downloads the WSL 2 Linux kernel, and installs the default Ubuntu distribution.</li>" +
          "<li><strong><code>wsl --list --online</code></strong> (short: <code>wsl -l -o</code>): Queries Microsoft's catalog and prints every official Linux distro you can install—such as <code>Ubuntu-24.04</code>, <code>Ubuntu-22.04</code>, <code>Debian</code>, and <code>kali-linux</code>. Always check the exact <strong>NAME</strong> column here before installing a specific distro.</li>" +
          "<li><strong><code>wsl --install -d Ubuntu-24.04</code>:</strong> The <code>-d</code> (<code>--distribution</code>) flag tells WSL to install a specific distribution by name. Choosing <code>Ubuntu-24.04</code> (LTS — Long Term Support) ensures your local Linux lab matches modern production Ubuntu servers.</li>" +
        "</ul>"
      ]
    },
    {
      heading: "First Reboot & Creating Your Linux UNIX Account",
      body: [
        "After running <code>wsl --install</code> for the first time, <strong>Windows requires a restart</strong> to activate virtualization.",
        "Once Windows reboots, Ubuntu opens automatically and asks you to create a <strong>UNIX username</strong> (lowercase, no spaces, e.g., <code>edris</code>) and a <strong>password</strong>. This Linux account is completely separate from your Windows PIN/password, and you will use this password whenever you run administrator commands with <code>sudo</code>.",
        "<em>Tip:</em> While typing your Linux password, <strong>no characters, dots, or asterisks appear on screen</strong>—that is normal Linux security behavior!"
      ]
    },
    {
      heading: "PowerShell Prompt vs. WSL Ubuntu Prompt",
      body: [
        "Always check your prompt so you know whether you are typing in Windows or Linux:",
        "<ul>" +
          "<li><strong>Windows PowerShell:</strong> <code>PS C:\\Users\\edris&gt;</code> (where <code>wsl ...</code> management commands run)</li>" +
          "<li><strong>WSL Ubuntu 24.04:</strong> <code>edris@DESKTOP-PC:~$</code> (where Linux commands like <code>ls</code>, <code>apt</code>, and <code>cat /etc/os-release</code> run)</li>" +
        "</ul>"
      ]
    }
  ],
  commandGroups: [
    {
      location: "Local Windows 11 (PowerShell — Run as Administrator for install)",
      commands: [
        { cmd: "wsl --install", desc: "Enables WSL 2 required components and installs the default Ubuntu distribution." },
        { cmd: "wsl --list --online", desc: "Lists all official Linux distributions available for download (short alias: wsl -l -o)." },
        { cmd: "wsl --install -d Ubuntu-24.04", desc: "Downloads and installs Ubuntu 24.04 LTS specifically using the -d (distribution) flag." },
        { cmd: "wsl --list --verbose", desc: "Shows installed WSL distributions, their state (Running/Stopped), and WSL version (short: wsl -l -v)." },
        { cmd: "wsl --status", desc: "Displays your default WSL distribution and WSL kernel version." },
        { cmd: "wsl -d Ubuntu-24.04", desc: "Launches into your Ubuntu-24.04 Linux shell from PowerShell." }
      ]
    },
    {
      location: "Local WSL (Inside Ubuntu 24.04 Terminal)",
      commands: [
        { cmd: "cat /etc/os-release", desc: "Verifies that you are running Ubuntu 24.04 LTS (Noble Numbat) inside Linux." },
        { cmd: "whoami", desc: "Prints the Linux UNIX username you created during setup." },
        { cmd: "uname -r", desc: "Prints the active Linux kernel version powering WSL 2." },
        { cmd: "exit", desc: "Leaves the Ubuntu shell and returns to Windows PowerShell." }
      ]
    }
  ],
  exercises: [
    {
      title: "Exercise 1: List available Linux distributions online",
      location: "Local Windows PowerShell (Administrator)",
      instructions: "Open Windows Terminal / PowerShell as Administrator and inspect all available distros online. Locate Ubuntu-24.04 in the NAME column:",
      code: "wsl --list --online"
    },
    {
      title: "Exercise 2: Install WSL and Ubuntu 24.04 LTS",
      location: "Local Windows PowerShell (Administrator)",
      instructions: "If WSL is not enabled yet, run wsl --install (or install Ubuntu-24.04 directly—it enables WSL automatically if needed). Restart Windows if prompted:",
      code: "wsl --install\nwsl --install -d Ubuntu-24.04"
    },
    {
      title: "Exercise 3: Complete first-time Ubuntu user setup",
      location: "Ubuntu 24.04 Setup Window",
      instructions: "When Ubuntu launches after installation/reboot, enter a lowercase UNIX username and type a strong password twice (nothing will show on screen as you type).",
      code: "# Example prompts shown by Ubuntu:\nEnter new UNIX username: edris\nNew password: \nRetype new password: "
    },
    {
      title: "Exercise 4: Verify WSL 2 version from PowerShell",
      location: "Local Windows PowerShell",
      instructions: "Open a Windows PowerShell tab and verify that Ubuntu-24.04 is installed and running on WSL VERSION 2:",
      code: "wsl --list --verbose\nwsl --status"
    },
    {
      title: "Exercise 5: Verify Ubuntu 24.04 inside Linux",
      location: "Local WSL (Ubuntu 24.04)",
      instructions: "Open your Ubuntu-24.04 profile in Windows Terminal (or run wsl -d Ubuntu-24.04), inspect your OS release and kernel, then exit cleanly:",
      code: "whoami\ncat /etc/os-release\nuname -a\nexit"
    }
  ],
  expectedResults: [
    "<code>wsl --list --online</code> prints a table of valid distributions including <code>Ubuntu-24.04</code> (<em>Ubuntu 24.04 LTS</em>).",
    "<code>wsl --install -d Ubuntu-24.04</code> downloads, registers, and launches Ubuntu 24.04 LTS.",
    "First-boot setup finishes with <code>Installation successful!</code> and drops you into a prompt like <code>edris@PC-NAME:~$</code>.",
    "<code>wsl --list --verbose</code> shows <code>Ubuntu-24.04</code> with <code>VERSION</code> set to <code>2</code>.",
    "Inside Ubuntu, <code>cat /etc/os-release</code> confirms <code>PRETTY_NAME=\"Ubuntu 24.04.x LTS\"</code>."
  ],
  troubleshooting: [
    {
      error: "WslRegisterDistribution failed with error: 0x80370102",
      cause: "Hardware virtualization (Intel VT-x / AMD-V) is disabled in BIOS/UEFI, or Windows wasn't restarted after enabling WSL.",
      fix: "First restart Windows 11 cleanly. If the error persists, enable Virtualization Technology (SVM / VT-x) in your motherboard BIOS settings."
    },
    {
      error: "The requested operation requires elevation",
      cause: "PowerShell was opened as a normal user instead of Administrator when enabling WSL features for the first time.",
      fix: "Right-click Windows Terminal or PowerShell → <strong>Run as administrator</strong>, then re-run <code>wsl --install</code>."
    },
    {
      error: "There is no distribution with the supplied name",
      cause: "Typo in the distro name (for example <code>ubuntu 24</code> instead of the exact ID).",
      fix: "Run <code>wsl --list --online</code> and copy the exact string from the <code>NAME</code> column: <code>wsl --install -d Ubuntu-24.04</code>."
    },
    {
      error: "Password typing appears frozen during Ubuntu user setup",
      cause: "Linux hides password characters completely (no asterisks or dots) for security.",
      fix: "Type your password carefully and press <strong>Enter</strong>, then retype it and press <strong>Enter</strong>."
    }
  ],
  milestoneChecklist: [
    "Checked available distributions with wsl --list --online in Windows PowerShell.",
    "Installed WSL 2 and Ubuntu-24.04 using wsl --install / wsl --install -d Ubuntu-24.04.",
    "Restarted Windows (if required) and created a lowercase Linux UNIX username and password.",
    "Confirmed Ubuntu-24.04 runs on WSL VERSION 2 via wsl --list --verbose.",
    "Verified Ubuntu 24.04 LTS inside Linux using cat /etc/os-release.",
    "Completed the Interactive Practice tab with at least 85% score."
  ],
  practice: {
    mcqs: [
      {
        id: "1.1-mcq1",
        env: "Concept",
        question: "Why is installing WSL 2 + Ubuntu on Windows 11 such a strong starting point for a Laravel developer learning DevOps?",
        options: [
          "Because production servers all run Windows 11 PowerShell.",
          "It runs a real Linux kernel inside Windows 11, letting you practice Linux commands, Bash, SSH, and Docker in the same OS family used on real production servers.",
          "It deletes Windows 11 and formats your hard drive.",
          "It replaces MySQL with Microsoft Access."
        ],
        answer: 1,
        explanation: "WSL 2 gives you a genuine, lightweight Ubuntu Linux environment right inside Windows 11 so your local DevOps practice matches real Linux servers."
      },
      {
        id: "1.1-mcq2",
        env: "WSL CLI",
        question: "Before installing a specific Linux distro in WSL, which command shows the official list of valid distribution names you can download?",
        options: [
          "wsl --list --online",
          "wsl --delete-all",
          "apt list --online",
          "ipconfig /all"
        ],
        answer: 0,
        explanation: "<code>wsl --list --online</code> (or <code>wsl -l -o</code>) queries Microsoft's list of official WSL distributions and prints their exact <code>NAME</code> values."
      },
      {
        id: "1.1-mcq3",
        env: "WSL CLI",
        question: "In <code>wsl --install -d Ubuntu-24.04</code>, what does the <code>-d</code> flag stand for?",
        options: [
          "--delete (deletes Ubuntu)",
          "--disk (formats disk D:)",
          "--distribution (specifies which Linux distribution to install)",
          "--debug (opens debug logs only)"
        ],
        answer: 2,
        explanation: "<code>-d</code> is short for <code>--distribution</code>, allowing you to pick an exact distro like <code>Ubuntu-24.04</code> rather than just the default."
      },
      {
        id: "1.1-mcq4",
        env: "First Boot",
        question: "When Ubuntu 24.04 launches for the first time and asks for a <code>New password:</code>, nothing appears on screen as you type. Why?",
        options: [
          "WSL crashed and needs to be reinstalled.",
          "Your keyboard is disconnected from Ubuntu.",
          "Linux terminals intentionally hide password keystrokes (no dots or asterisks) for security—your input is still being read.",
          "You must enable NumLock twice before typing."
        ],
        answer: 2,
        explanation: "In Linux, password prompts never echo characters or length. Just type your password and press Enter."
      },
      {
        id: "1.1-mcq5",
        env: "Ubuntu LTS",
        question: "Why did we specifically choose <code>Ubuntu-24.04</code> (LTS) instead of a random non-LTS release?",
        options: [
          "LTS stands for Long Term Support—it receives 5 years of security updates and is the standard choice for real production VPS and cloud servers.",
          "Non-LTS versions cannot run ls or cd.",
          "Ubuntu 24.04 only works offline.",
          "LTS versions do not require a username."
        ],
        answer: 0,
        explanation: "Ubuntu LTS (Long Term Support) releases are stable, supported for years, and match what you'll deploy to on cloud VPS providers like Hostinger, AWS, or DigitalOcean."
      }
    ],
    commands: [
      {
        id: "1.1-cmd1",
        env: "Local Windows PowerShell (Admin)",
        prompt: "PS C:\\Windows\\system32>",
        question: "Run the standard one-line command to enable WSL and install the default Linux setup on Windows 11.",
        placeholder: "wsl ...",
        accepted: ["wsl --install"],
        hint: "Use wsl followed by --install.",
        explanation: "<code>wsl --install</code> enables the required Windows features, installs the WSL 2 kernel, and sets up Ubuntu."
      },
      {
        id: "1.1-cmd2",
        env: "Local Windows PowerShell",
        prompt: "PS C:\\Users\\edris>",
        question: "List all available Linux distributions that can be installed online via WSL.",
        placeholder: "wsl ...",
        accepted: ["wsl --list --online", "wsl -l -o", "wsl --list -o", "wsl -l --online"],
        hint: "Use wsl --list --online (or short flags -l -o).",
        explanation: "<code>wsl --list --online</code> prints every available distribution name (such as <code>Ubuntu-24.04</code>)."
      },
      {
        id: "1.1-cmd3",
        env: "Local Windows PowerShell (Admin)",
        prompt: "PS C:\\Windows\\system32>",
        question: "Install the <code>Ubuntu-24.04</code> distribution specifically using the <code>-d</code> flag.",
        placeholder: "wsl ...",
        accepted: [
          "wsl --install -d Ubuntu-24.04",
          "wsl --install --distribution Ubuntu-24.04",
          "wsl --install Ubuntu-24.04"
        ],
        hint: "Format: wsl --install -d Ubuntu-24.04",
        explanation: "<code>wsl --install -d Ubuntu-24.04</code> downloads and installs Ubuntu 24.04 LTS."
      },
      {
        id: "1.1-cmd4",
        env: "Local Windows PowerShell",
        prompt: "PS C:\\Users\\edris>",
        question: "Check your installed WSL distributions along with their running state and WSL version (1 or 2).",
        placeholder: "wsl ...",
        accepted: ["wsl --list --verbose", "wsl -l -v", "wsl --list -v", "wsl -l --verbose"],
        hint: "Use wsl --list --verbose (or wsl -l -v).",
        explanation: "<code>wsl --list --verbose</code> (<code>wsl -l -v</code>) confirms that <code>Ubuntu-24.04</code> is installed and using WSL <code>VERSION 2</code>."
      },
      {
        id: "1.1-cmd5",
        env: "Local WSL (Ubuntu 24.04)",
        prompt: "edris@DESKTOP:~$",
        question: "Inside your new Ubuntu terminal, display the OS release file to confirm you are on Ubuntu 24.04 LTS.",
        placeholder: "cat ...",
        accepted: ["cat /etc/os-release"],
        hint: "Read the file /etc/os-release with cat.",
        explanation: "<code>cat /etc/os-release</code> shows <code>Ubuntu 24.04 LTS (Noble Numbat)</code>."
      }
    ],
    troubleshooting: [
      {
        id: "1.1-tr1",
        env: "Troubleshooting",
        terminal: "PS C:\\Users\\edris> wsl --install\n<span class='err'>The requested operation requires elevation (Run as administrator).</span>",
        question: "You ran <code>wsl --install</code> in PowerShell and got this error. How do you fix it?",
        options: [
          "Reinstall Windows 11.",
          "Right-click Windows Terminal or PowerShell, choose 'Run as administrator', and run <code>wsl --install</code> again.",
          "Run the command inside Chrome instead.",
          "Add <code>sudo</code> in front of PowerShell."
        ],
        answer: 1,
        explanation: "Enabling Windows virtualization features requires Administrator privileges on Windows 11."
      },
      {
        id: "1.1-tr2",
        env: "Troubleshooting",
        terminal: "Installing, this may take a few minutes...\n<span class='err'>WslRegisterDistribution failed with error: 0x80370102\nPlease enable the Virtual Machine Platform Windows feature and ensure virtualization is enabled in the BIOS.</span>",
        question: "Ubuntu fails on first launch with error <code>0x80370102</code>. What are the two things to check?",
        options: [
          "1) Restart Windows 11 if you haven't rebooted after <code>wsl --install</code>; 2) Ensure CPU Virtualization (Intel VT-x / AMD SVM) is enabled in BIOS/UEFI.",
          "Delete System32.",
          "Turn off Wi-Fi.",
          "Install XAMPP first."
        ],
        answer: 0,
        explanation: "Error <code>0x80370102</code> means hardware virtualization isn't active yet—either because Windows still needs a reboot after enabling Virtual Machine Platform, or virtualization is disabled in BIOS."
      },
      {
        id: "1.1-tr3",
        env: "Troubleshooting",
        terminal: "PS C:\\Users\\edris> wsl --install -d ubuntu24\n<span class='err'>There is no distribution with the supplied name.</span>",
        question: "Why did <code>wsl --install -d ubuntu24</code> fail, and what should you run to get the exact name?",
        options: [
          "Ubuntu 24.04 is not supported on Windows 11.",
          "<code>ubuntu24</code> is not the exact distribution ID—run <code>wsl --list --online</code> to check the exact name (<code>Ubuntu-24.04</code>) and run <code>wsl --install -d Ubuntu-24.04</code>.",
          "You must buy Ubuntu from the Microsoft Store.",
          "Use <code>-x</code> instead of <code>-d</code>."
        ],
        answer: 1,
        explanation: "<code>wsl --list --online</code> shows the exact identifier required by <code>-d</code>, which is <code>Ubuntu-24.04</code>."
      }
    ]
  }
};
