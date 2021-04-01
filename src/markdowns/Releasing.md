# Releasing

Releasing, as a whole is the biggest reward one application van get. Therefore, it's essentiak to have a well thought, well implemented release process.

As I've mentioned here earlier, the `semantic-release` and it's pluginis helps a lot with this, as well as the chosen git branching modal  but there are other imortant asepcts too.

## Checklist

I am using a very basic, yet super helpful `release checklist`. It's a self-written release manager application, that relies on the [`semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer), and also connected to `JIRA`, with it's official `API`.

The purpose of this tool, that it's analyzes the git commits, which contains every time the scope of the git commit. The scopes are paired with the stories in JIRA, and the commit analyzer recognises witch modules of the application are going to be affected with the upcomiign release.

Generates a checklist of the main functionalities, that needs to be stress-tested, and if everything checked, it allows the pipeline to run.

I am planning to open source this tiny tool at some point.

## CI/CD

It's inevitable to have some kind of continous integration setup on you project. Both bitbucket and github offers tools for this. In GitHub it's called `Actions`, while in `BitBucket` it called `Pipelines`. I have used `GitLab` in the past, it was also quite advanced and handy, but lately I am sticking with `Github` and `Bitbucket`. They are both well documented, and it's easy to get started with them.
