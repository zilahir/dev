# GIT

At work we are using Bitbucket, for my personal projects, I am using [GitHub](https://github.com/zilahir).

## Branching

I am favouring the environmental branching modal, or with other words `Branch per platform` modal.

The advantage of this is that you always have a branch that tracks a particular platform, which makes it very easy to hot-fix a problem if, for example, it is spotted on live. By using the live branch as the basis of your fix, you can easily deploy the existing codebase, plus one single change. Once the live platform is sorted out, you can then apply the fix to the master and any other environment branches. This means you avoid a situation where you're either trying to guess what is on the live platform, or doing a weird direct-on-live fix.

## Tags

In addition to the environmental branching modal, I prefer to tag the version that are being released. This way, it's easier to look back at the history of the versions that had been live.

I find that having a branching strategy in place greatly improves both the quality of the work and the confidence and communication of the team.

## Git hooks

I am using for various different reasons the [built-in hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) provided by GIT. For example, running linting scipts on the project, when a commit action happens.

There is a great tool called [`husky🐶`](https://github.com/typicode/husky/tree/main) that helps you configuring `hooks` in `git`.

An other great tool to use is [`lint-staged`](https://github.com/okonet/lint-staged#readme). Combining this, with `husky` you can lint your staged commit,, to avoid bad code end up in your repository.

```json
"lint-staged": {
  "*.{js,jsx}": [
    "yarn lint:js",
    "git add"
  ]
}
```

where `lint:js` refersh to the `scripts` object in the `package.json`:

```json
"lint:js": "eslint --ext .js,.jsx .",
```

## Commitizen



## Semantic release

Besides the `pre-commit` hook, there are other type of hooks also. For example, to maintain the [`semantic-release`](https://github.com/semantic-release/semantic-release), I am using the `prepare-commit-message` hook, to help myself, and [`comittizen`](https://github.com/commitizen/cz-cli) to have properly formatted commit messages.

`Comittizen` a `Command Line Interface` that creates the commit messages, based on prompt, you are given, to fill out any required commit fields at commit time.

When using `comittizen` your commit history will look like this:

It's not just the nicely formatted commit messages. There are other advantages of it. I am using [`@semantic-release/changelog`](https://github.com/semantic-release/changelog), which generates a `CHANGELOG.md` every time a release action is triggered. Either by your branching model, or explicitely from your `CI/CD`. Using together with [`semantic/commit-analyzer`](https://github.com/semantic-release/commit-analyzer), you will get this nicely generated [changelog](https://github.com/conventional-changelog/standard-version/blob/master/CHANGELOG.md), that can be used later to prepare release notes for your users.
