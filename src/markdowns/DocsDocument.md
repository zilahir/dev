# Documentations

Most of the developers out there, doesn't enjoy writing documentation. I am a bit different in this manner, I like documentating the functions, the API, so it comes handy even for me, months later, when I need to return to a specific part of the codebase.

## JSDoc

To annotate `javascript` code, I am using [`JSDoc`](https://jsdoc.app/). As previously described in the `ESLint` section, I have `jsdoc` plugin installed, that will warn me if I leave any function undocumented in the codebase.

It's not just the `ESLint` plugin, there is a `VSCode` extension too, that help you creating these anootations, called [Document This](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis). It adds a hotkey, to VSCode, which generates a skeleton `JSDoc` of the function.

For example, let's consider the following function:

```javascript
function sumNumbers(numA, numB) {
  return numA + numB
}
```

By callinf the Document This, it will auto-generate the following skeleton for us:

```javascript
/**
  *
  *
  * @param {*} numA
  * @param {*} numB
   * @returns
   */
  function sumNumber(numA, numB) {
   return numA + numB
  }
```

At this point, there's nothing eft, just to fill out the required parts, and our function is documented.

If `JSDoc`, I take a step further, and generate a documentation page. For that I am using the [`JSDoc`](https://www.npmjs.com/package/jsdoc) executeable. Usually, I have a `script` declared for this in the `package.json`:

```json
"docs": "jsdoc -c ./jsdoc.json",
```

`JSDoc` is configurable using a [configuration file](https://jsdoc.app/about-configuring-jsdoc.html). I prefer `markdown` and also using a different template, called [`better-docs]` as it's just look nicer.

All these are configured in the `jsdoc.json` configuration file:

```json
{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": ["./src"]
  },
  "plugins": ["plugins/markdown", "better-docs/component"],
  "opts": {
    "encoding": "utf8",
    "destination": "docs/documentation",
    "recurse": true,
    "verbose": true,
    "template": "./node_modules/better-docs"
  },
  "templates": {
    "better-docs": {
      "name": "documentation"
    }
  }
}

```

## Storybook

[`StoryBook`](https://storybook.js.org/) is an amazing tool, to document frontend. It's basically a playground, where you can demonstrate your components, provide a live clickable example, and provide the component's documentation too.

When I first encountered this, I my mind got blown away immediaely, and using it regulary since that day.

Of course, `StoryBook` also comes with a bunch of useful plugins. (They are called [addons](https://storybook.js.org/addons) here) Here are some, that I am using:

* [`console`](https://storybook.js.org/addons/@storybook/addon-console/)
* [`knobs`](https://storybook.js.org/addons/@storybook/addon-knobs/)
* [`design-assets`](https://storybook.js.org/addons/@storybook/addon-design-assets/)
* [`on-device-actions`](https://storybook.js.org/addons/@storybook/addon-ondevice-actions/)

All of these gives an extra feature to you `StoryBook` instance, for example add notes, console, you can hook up custom functions to the UI elements, etc. Worth checkin them out, it will definitely make your, and your team life easier.
