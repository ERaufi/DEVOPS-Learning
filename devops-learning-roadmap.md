# DevOps Learning Roadmap & Progress Tracker

> **Document purpose:** This is the single source of truth for the
> DevOps learning project. Keep it updated as lessons are completed so
> that the user can continue in another ChatGPT conversation or with
> another AI agent without losing context, repeating work, or changing
> the learning path accidentally.

## 1. What We Are Doing

We are building practical DevOps skills from beginner level, using a
real Hostinger VPS running **Ubuntu 24.04 LTS** as the main remote Linux
laboratory and a Windows 11 computer as the local workstation.

The learner is an experienced **Full-Stack Laravel developer** who wants
to understand DevOps from the ground up and, ultimately, automate as
much of the software development lifecycle as practical. The goal is not
simply to memorize DevOps tools. The goal is to be able to build, test,
package, deploy, operate, secure, monitor, and maintain applications
reliably---with repeatable automation instead of a long list of manual
steps.

The learning process will be hands-on. Concepts will be explained first,
then practiced on the local environment or VPS, followed by exercises,
expected results, troubleshooting, and a small project or milestone. We
will not move to the next subject just because a video or lesson has
been watched; the learner should be able to explain and perform the
important tasks independently.

The learner also wants to turn the learning journey into original
educational YouTube tutorials. Video planning is therefore a secondary
outcome of each suitable module: explain concepts in the learner's own
words, demonstrate real lab work, and avoid simply reproducing another
instructor's course.

## 2. What We Are Going to Build Toward

The final practical outcome is an automated Laravel delivery workflow. A
typical target workflow will look like this:

1.  Develop a Laravel application locally.
2.  Commit and push changes to GitHub.
3.  Automatically run code checks and tests.
4.  Build application assets and prepare dependencies.
5.  Build or retrieve deployable container images where appropriate.
6.  Deploy to a staging environment and verify it.
7.  Promote approved changes to production.
8.  Run safe deployment tasks such as migrations and cache optimization.
9.  Restart or reload relevant workers/services safely.
10. Run health checks and report deployment success or failure.
11. Monitor application and server health.
12. Back up important data and provide a recovery/rollback strategy.

The exact tools will be introduced only when their purpose is
understood. The initial tool direction is:

-   **Linux / Ubuntu:** server fundamentals and administration.
-   **SSH:** secure remote access.
-   **Networking:** IP addresses, ports, DNS, HTTP(S), firewalls and
    reverse proxies.
-   **Git and GitHub:** version control and collaboration.
-   **Docker and Docker Compose:** reproducible application
    environments.
-   **GitHub Actions:** continuous integration and deployment (CI/CD).
-   **Ansible:** repeatable server configuration and provisioning.
-   **Terraform:** infrastructure as code, using a supported provider or
    lab.
-   **Monitoring and logging:** visibility, alerting and
    troubleshooting.
-   **Kubernetes:** later, after containers and deployment fundamentals
    are solid.

This is a learning roadmap, not a requirement to use every tool in every
project. Kubernetes and other advanced technologies are not
prerequisites for automating a Laravel deployment to one VPS.

## 3. Learner and Environment Context

  -----------------------------------------------------------------------
  Item                                Current information
  ----------------------------------- -----------------------------------
  Current role                        Full-Stack Developer

  Main application stack              Laravel, PHP, MySQL, JavaScript

  Development computer                Windows 11

  Local Linux environment             WSL Ubuntu is already installed

  Remote lab                          Hostinger VPS

  Remote operating system             Ubuntu 24.04 LTS

  VPS access status at project start  Not connected yet; SSH setup is the
                                      first practical task

  Primary learning goal               Understand DevOps and automate the
                                      development/deployment process

  Secondary goal                      Create original YouTube tutorials
                                      based on practical learning

  Preferred learning style            Step-by-step explanations,
                                      commands, practical exercises,
                                      expected outputs and
                                      troubleshooting

  Main project to use for examples    A Laravel application, preferably a
                                      safe test/staging copy
  -----------------------------------------------------------------------

### Important environment notes

-   Use WSL for local Linux practice and experiments.
-   Use the Hostinger VPS for real remote-server administration and
    deployment practice.
-   Do not assume the VPS IP address, SSH port, credentials, plan
    resources, domain, or firewall configuration. Ask the learner or
    inspect their provided output when those details are needed.
-   Do not ask the learner to share passwords, private SSH keys, access
    tokens, `.env` secrets, or other credentials.
-   Do not assume that a command succeeded. Ask for output or a
    verification step.
-   Keep production applications and production data separate from the
    learning lab.

## 4. Learning Method and Rules

Every lesson should normally include:

1.  **Learning objectives** --- what the learner should understand by
    the end.
2.  **Concept explanation** --- plain-language explanation, including
    why the topic matters to a Laravel developer.
3.  **Commands and examples** --- commands explained rather than
    presented as unexplained copy/paste.
4.  **Hands-on exercises** --- tasks for the learner to perform.
5.  **Expected results** --- what successful output or behavior looks
    like.
6.  **Troubleshooting** --- common failures, diagnostic commands and
    safe recovery steps.
7.  **Knowledge check** --- questions that test understanding, not just
    memorization.
8.  **Practical milestone** --- a small outcome that demonstrates the
    skill.
9.  **YouTube idea** --- optional original video outline based on that
    lesson.
10. **Progress update** --- record what was completed, what remains, and
    evidence supplied by the learner.

### Progress rules

-   A lesson is **Not started** until work begins.
-   A lesson is **In progress** when the learner has started but has not
    demonstrated the required outcomes.
-   A lesson is **Needs review** when exercises or concepts need
    correction.
-   A lesson is **Completed** only after the required practical outcomes
    have been demonstrated or reviewed.
-   Watching a course video alone does not mark a lesson complete.
-   If the learner changes chat or AI agent, use this file as the
    handoff document and continue from the recorded status.
-   Do not restart completed lessons unless the learner requests
    revision or a later task reveals a knowledge gap.
-   Update the progress table and change log after meaningful
    milestones.

### Safety rules for the VPS

-   Confirm the target machine before running commands: local WSL or
    remote VPS.
-   Prefer a non-root administrative user for normal administration.
-   Back up important configuration and data before risky changes.
-   Before changing SSH configuration or firewall rules, ensure an
    alternate recovery path is available (for example, Hostinger console
    access) and verify a second SSH session before closing the existing
    one.
-   Never disable the only working SSH access path before verifying the
    replacement.
-   Understand destructive commands before running them. Be especially
    cautious with `rm -rf`, disk formatting, firewall changes, recursive
    ownership changes and database migrations.
-   Do not expose secrets in screenshots, terminal recordings, Git
    repositories or YouTube videos.
-   Use a test application and non-production database for learning.
-   Take a VPS snapshot or backup before major infrastructure changes
    when the provider supports it.

------------------------------------------------------------------------

# 5. Table of Contents --- Complete Learning Curriculum

The order below is intentional. Some topics can overlap later, but
foundational topics should be demonstrated before moving to advanced
tools.

## Phase 0 --- Orientation and Lab Preparation

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  0.1               What DevOps is    Understand DevOps Completed in
                    and the software  culture, feedback introductory
                    delivery          loops, CI, CD and discussion
                    lifecycle         operations        

  0.2               Understand the    Know the role of  In progress
                    learning lab      Windows, WSL,     
                                      VPS, SSH and      
                                      GitHub            

  0.3               Lab safety,       Establish safe    Not started
                    backups and       working practices 
                    documentation     and a progress    
                                      log               
  -----------------------------------------------------------------------

## Phase 1 --- Linux Fundamentals

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  1.1               Connect to Ubuntu Establish and     In progress
                    VPS using SSH     verify secure     
                                      remote access     

  1.2               Identify Linux    Inspect OS,       In progress
                    system            kernel, hostname, 
                    information       uptime, RAM, disk 
                                      and network       
                                      interfaces        

  1.3               Linux filesystem  Understand `/`,   In progress
                    hierarchy         `/etc`, `/var`,   
                                      `/home`, `/root`, 
                                      `/usr`, `/opt`    
                                      and `/tmp`        

  1.4               Essential         Navigate, list,   In progress
                    terminal commands create, copy,     
                                      move, inspect and 
                                      remove files      
                                      safely            

  1.5               Linux users,      Understand users, In progress
                    groups and        groups, `rwx`,    
                    permissions       `chmod`, `chown`, 
                                      `sudo` and        
                                      ownership         

  1.6               Package           Update package    In progress
                    management with   indexes, upgrade  
                    APT               packages, install 
                                      and inspect       
                                      software          

  1.7               Processes and     Understand        In progress
                    services          processes, `ps`,  
                                      `top`,            
                                      `systemctl` and   
                                      service status    

  1.8               Linux logs and    Inspect logs with Not started
                    troubleshooting   `journalctl` and  
                                      files under       
                                      `/var/log`        

  1.9               Environment       Understand shell  Not started
                    variables and     variables, PATH,  
                    shell basics      profiles and      
                                      command execution 

  1.10              Bash scripting    Write simple      Not started
                    fundamentals      scripts using     
                                      variables,        
                                      conditions, loops 
                                      and exit codes    

  1.11              Cron and          Schedule and      Not started
                    scheduled jobs    verify recurring  
                                      Linux tasks       

  1.12              Linux             Administer a      Not started
                    fundamentals      basic Ubuntu      
                    practical         server without    
                    assessment        step-by-step      
                                      instructions      
  -----------------------------------------------------------------------

## Phase 2 --- Server Administration and Security

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  2.1               Create a          Use               Not started
                    dedicated         least-privilege   
                    non-root          administration    
                    administrator     and `sudo`        

  2.2               SSH keys and      Configure         Not started
                    secure            key-based access  
                    authentication    and understand    
                                      SSH configuration 

  2.3               SSH hardening     Safely review     Not started
                                      root login,       
                                      password          
                                      authentication    
                                      and SSH settings  

  2.4               Firewall          Allow only        Not started
                    fundamentals with required ports    
                    UFW               and verify        
                                      firewall behavior 

  2.5               Ownership and     Understand        Not started
                    permissions for   service users and 
                    web applications  safe Laravel      
                                      directory         
                                      permissions       

  2.6               Server updates    Establish a       Not started
                    and basic         repeatable server 
                    hardening         maintenance       
                                      routine           

  2.7               Backups and       Back up important Not started
                    recovery basics   files and         
                                      databases and     
                                      understand        
                                      restoration       

  2.8               Secure-server     Prepare a basic   Not started
                    practical         VPS with secure   
                    assessment        remote            
                                      administration    
  -----------------------------------------------------------------------

## Phase 3 --- Networking and Web Server Fundamentals

  ---------------------------------------------------------------------------
  Lesson            Topic             Main outcome          Status
  ----------------- ----------------- --------------------- -----------------
  3.1               Networking        Understand IP         Not started
                    fundamentals      addresses,            
                                      private/public        
                                      networks and subnets  

  3.2               Ports and         Understand TCP, UDP   Not started
                    protocols         and common service    
                                      ports                 

  3.3               DNS fundamentals  Understand domains,   Not started
                                      A/AAAA, CNAME, MX and 
                                      propagation           

  3.4               HTTP and HTTPS    Understand requests,  Not started
                                      responses, status     
                                      codes, headers and    
                                      TLS                   

  3.5               Diagnose network  Use `curl`, `ping`,   Not started
                    connectivity      `ss`, `dig`, `ip` and 
                                      related tools         

  3.6               Nginx             Install, configure    Not started
                    fundamentals      and troubleshoot      
                                      Nginx                 

  3.7               Reverse proxies   Route domain requests Not started
                    and virtual hosts to the correct        
                                      application/service   

  3.8               SSL/TLS           Configure HTTPS and   Not started
                    certificates      understand            
                                      certificate renewal   

  3.9               Deploy a static   Serve a domain over   Not started
                    website           HTTPS from the VPS    

  3.10              Networking and    Diagnose and          Not started
                    web-server        configure a basic     
                    assessment        web-serving           
                                      environment           
  ---------------------------------------------------------------------------

## Phase 4 --- Git, GitHub and Development Workflows

  ----------------------------------------------------------------------------
  Lesson            Topic             Main outcome           Status
  ----------------- ----------------- ---------------------- -----------------
  4.1               Git review for    Understand commits,    Not started
                    delivery          branches, merges, tags 
                    workflows         and history            

  4.2               GitHub            Use reviewable changes Not started
                    repositories and  and a consistent       
                    pull requests     branching workflow     

  4.3               Branching and     Separate development,  Not started
                    release strategy  staging and production 
                                      changes                

  4.4               Secrets and       Keep credentials out   Not started
                    environment       of Git and manage      
                    configuration     environment-specific   
                                      settings               

  4.5               Release tags and  Create identifiable    Not started
                    versioning        application releases   

  4.6               Git workflow      Prepare a Laravel      Not started
                    practical         repository for         
                    assessment        automated delivery     
  ----------------------------------------------------------------------------

## Phase 5 --- Docker and Containerization

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  5.1               Why containers    Understand        Not started
                    exist             containers,       
                                      images, isolation 
                                      and               
                                      reproducibility   

  5.2               Docker            Understand Docker Not started
                    architecture and  Engine, CLI and   
                    installation      daemon            

  5.3               Images and        Pull, run,        Not started
                    containers        inspect, stop and 
                                      remove containers 

  5.4               Dockerfiles       Build a custom    Not started
                                      image and         
                                      understand build  
                                      layers            

  5.5               Volumes and       Persist database  Not started
                    persistent data   and application   
                                      data safely       

  5.6               Container         Connect services  Not started
                    networking        and understand    
                                      ports and         
                                      networks          

  5.7               Docker Compose    Define and run    Not started
                                      multi-container   
                                      applications      

  5.8               Container logs    Inspect health,   Not started
                    and               logs, resource    
                    troubleshooting   use and failures  

  5.9               Containerize a    Run Laravel with  Not started
                    Laravel           PHP, web server   
                    application       and supporting    
                                      services          

  5.10              Laravel workers,  Run background    Not started
                    scheduler and     workloads         
                    queues in         reliably          
                    containers                          

  5.11              Docker image      Tag, publish,     Not started
                    registries        pull and manage   
                                      application       
                                      images            

  5.12              Docker practical  Rebuild and run   Not started
                    assessment        the Laravel       
                                      environment       
                                      consistently      
  -----------------------------------------------------------------------

## Phase 6 --- CI/CD with GitHub Actions

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  6.1               CI/CD concepts    Distinguish       Not started
                                      continuous        
                                      integration,      
                                      delivery and      
                                      deployment        

  6.2               YAML fundamentals Read and write    Not started
                                      workflow          
                                      configuration     

  6.3               GitHub Actions    Understand        Not started
                    fundamentals      workflows,        
                                      events, jobs,     
                                      steps and runners 

  6.4               Automated Laravel Run PHPUnit/Pest  Not started
                    testing           and required      
                                      checks in CI      

  6.5               Dependency and    Automate Composer Not started
                    asset builds      and frontend      
                                      build steps       

  6.6               Secrets and       Configure         Not started
                    environment       credentials       
                    variables in      safely            
                    Actions                             

  6.7               Build and publish Create versioned  Not started
                    Docker images     deployable images 
                                      automatically     

  6.8               Deploy to a       Automate          Not started
                    staging VPS       deployment to a   
                                      non-production    
                                      environment       

  6.9               Production        Promote tested    Not started
                    deployment        releases to       
                    workflow          production safely 

  6.10              Migrations,       Automate Laravel  Not started
                    caches and queue  deployment tasks  
                    restarts          with appropriate  
                                      safeguards        

  6.11              Health checks and Verify            Not started
                    deployment        deployments and   
                    notifications     report failures   

  6.12              Rollback and      Understand        Not started
                    deployment        rollback, release 
                    strategies        directories and   
                                      zero-downtime     
                                      concepts          

  6.13              End-to-end        Push code and     Not started
                    Laravel CI/CD     deploy through a  
                    project           working pipeline  
  -----------------------------------------------------------------------

## Phase 7 --- Configuration Management with Ansible

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  7.1               Configuration     Understand        Not started
                    management        repeatable server 
                    concepts          configuration and 
                                      idempotency       

  7.2               Ansible           Connect to        Not started
                    installation and  managed Linux     
                    inventory         hosts             

  7.3               Ad-hoc commands   Perform           Not started
                    and modules       repeatable        
                                      administration    
                                      tasks             

  7.4               Playbooks, tasks  Describe server   Not started
                    and handlers      configuration as  
                                      code              

  7.5               Variables,        Reuse             Not started
                    templates and     configuration     
                    facts             across            
                                      environments      

  7.6               Roles and project Structure         Not started
                    organization      maintainable      
                                      Ansible projects  

  7.7               Secrets with      Protect sensitive Not started
                    Ansible Vault     configuration     

  7.8               Provision a       Prepare a fresh   Not started
                    Laravel server    Ubuntu host       
                    with Ansible      consistently      
  -----------------------------------------------------------------------

## Phase 8 --- Infrastructure as Code with Terraform

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  8.1               Infrastructure as Understand        Not started
                    Code concepts     declarative       
                                      infrastructure    
                                      and repeatability 

  8.2               Terraform         Understand        Not started
                    fundamentals      providers,        
                                      resources and     
                                      configuration     
                                      files             

  8.3               Variables,        Make              Not started
                    outputs and data  infrastructure    
                    sources           configurations    
                                      reusable          

  8.4               Terraform state   Understand state, Not started
                    and plans         planning and      
                                      applying changes  

  8.5               Modules and       Organize reusable Not started
                    project structure infrastructure    
                                      code              

  8.6               Provision a       Create            Not started
                    practice          infrastructure    
                    environment       with a supported  
                                      provider or lab   

  8.7               Terraform         Review and safely Not started
                    practical         apply             
                    assessment        infrastructure    
                                      changes           
  -----------------------------------------------------------------------

**Provider note:** Do not assume Hostinger VPS resources can be managed
by an official Terraform provider. Verify provider support before
choosing a Terraform project. Terraform can be learned using another
supported cloud provider or a local lab.

## Phase 9 --- Monitoring, Logging and Reliability

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  9.1               Observability     Understand        Not started
                    fundamentals      metrics, logs,    
                                      traces and health 
                                      checks            

  9.2               Linux server      Monitor CPU, RAM, Not started
                    monitoring        disk, processes   
                                      and network       

  9.3               Application and   Diagnose Laravel, Not started
                    web-server logs   PHP-FPM and Nginx 
                                      problems          

  9.4               Uptime monitoring Detect service    Not started
                                      availability      
                                      problems          

  9.5               Prometheus        Collect and query Not started
                    fundamentals      metrics           

  9.6               Grafana           Visualize         Not started
                    dashboards        infrastructure    
                                      and application   
                                      metrics           

  9.7               Centralized       Explore Loki or   Not started
                    logging           another suitable  
                                      log aggregation   
                                      system            

  9.8               Alerts and        Create useful     Not started
                    incident response alerts and        
                                      troubleshoot      
                                      incidents         

  9.9               Monitoring        Build a dashboard Not started
                    practical project and basic alerts  
                                      for the lab       
  -----------------------------------------------------------------------

## Phase 10 --- Kubernetes and Container Orchestration

**Prerequisite:** Complete the Docker and CI/CD fundamentals first.
Kubernetes is an advanced extension, not a requirement for the initial
single-VPS Laravel automation project.

  -----------------------------------------------------------------------
  Lesson            Topic             Main outcome      Status
  ----------------- ----------------- ----------------- -----------------
  10.1              Why Kubernetes    Understand        Not started
                    exists            orchestration and 
                                      when it is useful 

  10.2              Kubernetes        Understand        Not started
                    architecture      control plane and 
                                      worker nodes      

  10.3              Pods and          Run and manage    Not started
                    Deployments       application       
                                      workloads         

  10.4              Services and      Expose and        Not started
                    networking        connect workloads 

  10.5              ConfigMaps and    Manage            Not started
                    Secrets           application       
                                      configuration     

  10.6              Persistent        Understand        Not started
                    Volumes           persistent        
                                      storage           

  10.7              Ingress           Route external    Not started
                                      traffic to        
                                      services          

  10.8              Health probes and Improve workload  Not started
                    resource limits   reliability       

  10.9              Scaling and       Manage            Not started
                    rolling updates   application       
                                      changes and       
                                      capacity          

  10.10             Helm fundamentals Package and       Not started
                                      configure         
                                      Kubernetes        
                                      applications      

  10.11             Deploy a sample   Practice a        Not started
                    Laravel           complete          
                    application       Kubernetes        
                                      deployment        
  -----------------------------------------------------------------------

## Phase 11 --- Capstone: Automated Laravel Delivery Platform

  ---------------------------------------------------------------------------------
  Lesson            Topic             Main outcome                Status
  ----------------- ----------------- --------------------------- -----------------
  11.1              Design the        Document environments,      Not started
                    delivery          workflow, services and      
                    architecture      security boundaries         

  11.2              Prepare           Automate server setup and   Not started
                    reproducible      application dependencies    
                    infrastructure                                

  11.3              Containerize the  Build a repeatable          Not started
                    Laravel           application runtime         
                    application                                   

  11.4              Implement CI      Automatically test and      Not started
                                      validate code changes       

  11.5              Implement CD to   Deploy and verify staging   Not started
                    staging           releases                    

  11.6              Implement         Promote approved releases   Not started
                    controlled        safely                      
                    production                                    
                    deployment                                    

  11.7              Add backups and   Protect data and test       Not started
                    recovery          restoration procedures      

  11.8              Add monitoring    Observe application and     Not started
                    and alerting      infrastructure health       

  11.9              Document          Write deployment,           Not started
                    operations and    troubleshooting and         
                    recovery          rollback runbooks           

  11.10             Final             Demonstrate the complete    Not started
                    demonstration     automated                   
                                      development-to-deployment   
                                      workflow                    
  ---------------------------------------------------------------------------------

------------------------------------------------------------------------

# 6. Current Progress --- Source of Truth

**Last updated:** 2026-11-22

### Current position

-   Introductory discussion about DevOps and the overall learning
    direction: completed.
-   Hostinger VPS operating system identified as Ubuntu 24.04: confirmed
    by learner.
-   Windows 11 is the local workstation.
-   WSL Ubuntu is already installed and should be retained for local
    practice.
-   VPS SSH connection: **not connected yet** at the beginning of Lesson
    1.
-   Lesson 1 material has been provided, but the learner has not yet
    submitted command outputs or confirmed completion.
-   Do not mark Lesson 1 as completed until practical work has been
    reviewed.

### Lesson 1 --- Linux Fundamentals

  Exercise   Task                                          Status
  ---------- --------------------------------------------- --------------
  1          Connect to VPS using SSH                      Not verified
  2          Identify Ubuntu version and kernel            Not verified
  3          Inspect RAM and disk usage                    Not verified
  4          Explore `/etc`, `/var`, `/home`, `/var/log`   Not verified
  5          Create `~/devops-lab/lesson-01`               Not verified
  6          Create, copy, rename and read files           Not verified
  7          Change permissions using `chmod`              Not verified
  8          Update Ubuntu packages                        Not verified
  9          Inspect processes using `ps` and `top`        Not verified
  10         Check SSH service status and logs             Not verified

### What the learner should submit for Lesson 1 review

Share the following outputs, after removing public IP addresses or other
sensitive information:

``` bash
cat /etc/os-release
free -h
df -h
whoami
hostname
uname -a
systemctl status ssh
ls -la ~/devops-lab/lesson-01
```

Also report:

-   Whether SSH access works.
-   Which exercises were completed.
-   Any errors encountered.
-   Any command or concept that is still unclear.

Do not share passwords, private keys, tokens or `.env` contents.

## 7. Weekly Review Routine

A weekly DevOps lab review is scheduled for **Sunday at approximately
5:00 PM, Europe/Istanbul time**.

The review should:

1.  Check the progress and evidence shared in the conversation.
2.  Identify completed exercises and remaining gaps.
3.  Correct misunderstandings and explain errors.
4.  Recommend whether to continue, revise or repeat a task.
5.  Give one practical assignment for the coming week.
6.  Suggest an original YouTube tutorial idea where appropriate.
7.  Update this document's progress section when the learner supplies
    new evidence.

A scheduled review must not claim to have inspected the VPS directly. It
can only assess information the learner has shared or tools that have
actually been authorized and used.

## 8. YouTube Content Strategy

The learner wants to create educational videos from this learning
journey.

Suggested series:

**DevOps From Zero --- A Laravel Developer's Journey**

Potential video topics:

-   What is DevOps? Why should Laravel developers learn it?
-   What is a VPS and how does Linux work?
-   Connecting to Ubuntu using SSH.
-   Essential Linux commands for developers.
-   Linux users, groups and permissions.
-   Securing an Ubuntu VPS.
-   Understanding DNS, ports and Nginx.
-   Running Laravel using Docker.
-   Automating Laravel tests with GitHub Actions.
-   Deploying Laravel automatically.
-   Automating server setup with Ansible.
-   Monitoring a Laravel application.

For each video, prepare: - A clear learning objective. - A short
explanation of the concept. - A real demonstration. - A small practical
challenge. - A summary of what was learned.

Keep videos technically accurate and based on the learner's own lab
work. Do not reveal credentials, private IP information where
inappropriate, domain secrets, customer data or production
configuration.

## 9. Useful Learning Resources

Use the official documentation as the primary technical reference. Video
courses can support the learning process, but practical verification
remains essential.

  ------------------------------------------------------------------------------------
  Subject                             Resource
  ----------------------------------- ------------------------------------------------
  Ubuntu                              https://ubuntu.com/tutorials

  Ubuntu Server documentation         https://documentation.ubuntu.com/server/

  Linux manual pages                  https://man7.org/linux/man-pages/

  SSH                                 https://www.openssh.com/manual.html

  Nginx                               https://nginx.org/en/docs/

  Git                                 https://git-scm.com/doc

  GitHub Actions                      https://docs.github.com/en/actions

  Docker                              https://docs.docker.com/get-started/

  Ansible                             https://docs.ansible.com/

  Terraform                           https://developer.hashicorp.com/terraform/docs

  Prometheus                          https://prometheus.io/docs/

  Grafana                             https://grafana.com/docs/

  Kubernetes                          https://kubernetes.io/docs/tutorials/

  TechWorld with Nana                 https://www.techworld-with-nana.com/
  ------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 10. Instructions for Any AI Agent Continuing This Project

You are helping the learner continue a structured, practical DevOps
training project. This document is the project's source of truth.

Follow these rules:

1.  Read this document before teaching the next lesson.
2.  Check the **Current Progress** section to identify the exact
    position.
3.  Do not assume a lesson is complete just because it has been
    presented.
4.  If a required exercise is unverified, ask for its result or help the
    learner complete it.
5.  Continue from the current unfinished exercise instead of restarting
    the entire course.
6.  Teach step by step, using plain explanations appropriate for an
    experienced Laravel developer who is new to DevOps.
7.  Explain what each important command does, why it is needed, where it
    runs (Windows, WSL or remote VPS), and what successful output looks
    like.
8.  Clearly distinguish commands that run locally from commands that run
    on the VPS.
9.  Give practical exercises and expected results. Include safe
    troubleshooting instructions.
10. Do not introduce advanced tools prematurely. Follow the curriculum
    prerequisites.
11. Use a Laravel application as the recurring practical example when
    relevant.
12. Include YouTube content ideas when a lesson provides a useful
    teaching opportunity.
13. After reviewing a milestone, update the progress table, current
    position and last-updated date.
14. Preserve completed work and important learner decisions when
    updating this document.
15. Never request or expose passwords, private keys, API tokens or other
    secrets.
16. If the learner's actual environment differs from this document,
    verify the difference and update the document rather than silently
    assuming.
17. Be honest about uncertainty. Do not claim to have accessed or
    changed the VPS unless a connected tool actually performed that
    action.

### Required lesson response structure

Use this structure for each new lesson:

1.  Lesson number and title.
2.  Learning objectives.
3.  Concepts and explanations.
4.  Commands with explanations and execution location.
5.  Practical exercises.
6.  Expected results.
7.  Common errors and troubleshooting.
8.  Knowledge-check questions.
9.  Practical milestone and completion criteria.
10. Optional YouTube tutorial outline.
11. Progress update instructions.

### Required handoff when changing AI agent or chat

When continuing in another chat, the learner can provide this file and
say:

> Continue my DevOps training using this roadmap and progress tracker.
> First read the current progress section. Do not restart completed
> lessons. Help me finish the next unverified exercise, review my
> results, and update the roadmap when a milestone is completed.

------------------------------------------------------------------------

# 11. Change Log

  -----------------------------------------------------------------------
  Date                                Change
  ----------------------------------- -----------------------------------
  2026-11-22                          Created the DevOps learning
                                      roadmap, full curriculum,
                                      environment context, progress
                                      tracking rules and AI-agent handoff
                                      instructions.

  2026-11-22                          Recorded Ubuntu 24.04 VPS, Windows
                                      11 workstation, existing WSL Ubuntu
                                      and the initial Lesson 1 position.
  -----------------------------------------------------------------------

**End of document.**

Keep this file updated throughout the project. It should remain the
reliable record of the learner's progress, decisions and next steps.
