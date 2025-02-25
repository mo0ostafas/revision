# :arrows_counterclockwise: Git & GitHub :octocat:
This is a beginner quick guide to Git and GitHub for collaboration coding and version control.


## :arrows_counterclockwise: What is Git?
Git is a distributed version control system that helps developers track changes in code, collaborate on projects, and manage different versions of a project efficiently.

### Key Features of Git
- **Version Control**: Keeps track of every change made to a project.
- **Branching & Merging**: Allows working on different features/bugs separately and then merging them into the main project.
- **Distributed System**: Every developer has a full copy of the project repo.
- **Speed & Performance**: Fast operations due to local repos.
- **Collaboration**: Multiple developers can work on the same project without conflicts.

### Common Git Commands
- `git config --list`: Lists registered user data.
- `git config --global user.name`: Configures git with user's name.
- `git config --global user.email`: Configures git with user's email.
- `git init`: Initializes a new Git repo.
- `git status`: Shows the current state of the repo.
- `git add`: Stages changes for commit.
- `git ls-files`: Shows the statging area files (index).
- `git rm --cached`: Unstages changes / Clears chaches.
- `git commit -m`: Saves changes with a message.
- `git commit -am`: Stages and Commits changes.
- `git commit --amend`: Opens editor to edit commit message.
- `git show`: Displays commited file content with changes.
- `git tag -a`: Gives a commit a version to ease logging.
- `git diff`: Displays differences between 2 commits/files.
- `git log`: Displays commit history.
- `git log`: Displays commit history references (for undoing).
- `git restore`: Undoes the latest staged & local change.
- `git restore --staged`: Undoes only the latest staged change.
- `git fetch`: Fetches updates without merging them into the local main branch.
- `git reset --soft`: Undoes commit but keep changes staged.
- `git reset --hard`: Undoes commit and delete all changes permanently.
- `git revert`: Undoes commit by creating a new commit.
- `git branch`: Creates new branch from branch you already in.
- `git checkout` / `git switch`: Switches to an exsisting branch in the repo.
- `git checkout -b`: Combines the both 2 previous commands.
- `git merge`: Merges a branch into the branch you are in.
- `git branch -d`: Deletes the branch locally.
- `git clone`: Clones an existing repo from remote repo.
- `git fetch`: Downloads remote changes without merging.
- `git remote`: Manages remote repos.
- `git pull`: Fetches and merges changes from the remote repo into the local branch.
- `git push`: Uploads local commits/branches to a remote repo.
- `git push origin --delete`: Deletes the branch remotely.


## :octocat: What is GitHub?
GitHub is a cloud-based hosting service for Git repos that allows developers to collaborate, contribute, and manage projects.

### Key Features of GitHub:
- **All in One (AIO)**: Simulates Git commands graphically in addition to GitHub features.
- **Remote Repo Hosting**: Stores Git repos online.
- **Collaboration & Pull Requests**: Developers can contribute to projects using pull requests and code reviews.
- **Issues & Project Management**: Bug tracking, feature requests, and task management.
- **Actions & Automation**: Automate workflows with GitHub Actions.
- **Security & Access Control**: Manage repo visibility (public/private) and access permissions.

### Common GitHub Actions:
- **Git GUI Simulation**: Can do everything Git commands do.
- **Forking a Repo**: Creates a personal copy of another user's repo.
- **Pull Requests (PRs)**: Propose changes to the main project.
- **Issues**: Report bugs or suggest improvements.
- **GitHub Pages**: Host static websites directly from a repo.
- **Collaborators & Teams**: Work with others on private or public repos.

### Some GitHub Commands
- `gh auth login`: Log into GitHub CLI.
- `gh auth status`: Check authentication status.
- `gh repo clone`: Clone a repository.
- `gh repo create`: Create a new repository.
- `gh repo view`: View details of the current repository.
- `gh repo fork`: Fork a repository.
- `gh pr create`: Create a new pull request.
- `gh pr list`: List open pull requests.
- `gh pr view`: View a specific PR.
- `gh pr checkout`: Checkout a PR branch.
- `gh pr merge`: Merge a pull request.
- `gh issue list`: List open issues.
- `gh issue create`: Create a new issue.
- `gh issue view`: View an issue.
- `gh issue close`: Close an issue.
- `gh browse`: Open the repo in a web browser.
- `gh repo sync`: Sync the local branch with the remote.
- `gh run list`: List recent GitHub Actions runs.
- `gh run watch`: Watch an ongoing GitHub Actions workflow.


## :arrows_counterclockwise: Git :vs: GitHub :octocat:
|Feature|Git|GitHub|
|:-|:-:|:-:|
|Type|Version control system|Cloud-based Git repo hosting|
|Purpose|Tracks changes in code|Facilitates collaboration & hosting|
|Storage|Local machine|Cloud (GitHub servers)|
|Collaboration|Requires manual sharing|Enables team collaboration online|
|GUI Support|Command-line interface|Web interface & integrations|


## :zap: Git Workflows
- Creating/Forking Remote Repo
- Assigning Git Hosting Service Credentials (GitHub Account)
- Initializing Local Repo /Cloning Remote Repo
- Configuring Settings and Structuring
- Branching and Pipelining
- Making Changes & Committing
- Pushing Changes Remotely
- Pulling Requests, Merging & Issues
- Documentations, Releases, Deployment, Actions & CI/CD


## :ok_hand: Best Practices for Git & GitHub
- **Use meaningful commit messages**: Descriptive texts in commits help you and other contributers while development.
- **Create dev and fixes branches**: Avoid working directly on the main branch.
- **Pull before pushing**: Avoid conflicts by pulling the latest changes.
- **Use `.gitignore`**: Prevent tracking of unnecessary files.
- **Review PRs before merging**: Ensure code quality and avoid breaking changes.


## :link: Helpful Links
- [Big Data بالعربي Video](https://youtu.be/Q6G-J54vgKc?si=D_NZ9u4F7jV4bcw8)
- [Git Docs & Download](https://git-scm.com/)
- [Visual Git Guide](https://marklodato.github.io/visual-git-guide/index-en.html)
- [GitHub Website](https://github.com/)
- [GitHub CLI Download & Manual](https://cli.github.com)
- [JSM Video for Git Commands](https://youtu.be/XpvA00MRZ0o?si=u-Uc0Z4Y3IgCPQ_i)
- [JSM Video for GitHub CLI](https://youtu.be/3c64BQm75eg?si=g56ISf3gKL__Tk9q)