# Linters

## ESLint

I think we can all agree on the fact that `ESLint` brought a whole new world into modern webapplication development. Just like the most of you, I also have my personal preferences, when it comes to writing code, yet, I like order and I like produce clean code, so I am trying to keep my linting settings strict.

`airbnb` has a pretty decent config, I am using that, to extend it further: [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb).

### Plugins

The biggest strength of `ESLint` is the fact that its pluggabe. To make it even powerful, I am using a series of different plugins. Recently I am working together with these:

* [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc#readme)
* [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)
* [`eslint-plugin-markdown`](https://github.com/eslint/eslint-plugin-markdown)
* [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme)

### Rules

My rules set are relatively strict, but I also like the _minimal_ codestyle, so some of the rules enforing that.

For example, I don't like semicolons at the end of the lines:

```json
  "semi": [2, "never"]
```

Or:

```json
  "arrow-parens": [1, "as-needed"],
```

Which will don't require parens in this case:

```javascript
 const loremIpsum = something => console.debug('thing', something)
```

but it will require here:

```javascript
const loremIpsum = (some, thing) => console.debug(some, thing)
```

### Install

If you wanna try out my personal config, go ahead, give it a chance:

```text
yarn add @zilahir/eslint-config
```

### Usage

Just create an `.eslintrc` file in the root of your project and add:

```json
{
  "root": true,
  "extends": [
    "@zilahir/eslint-config/react"
  ]
}
```

## StyleLint

`StyleLint` is very similar to `ESLint` as the name suggests. I am using `SCSS modules` (together with [`styled-components`](https://github.com/styled-components/styled-components))

Just like with `ESLint`, I have a personal preference of `StyleLint` rules as well. [Check it out](https://github.com/zilahir/stylelint-config/blob/master/index.js).

It's nothing fancy, just taking care of the basics, and trying to avoid that the `SCSS` turns to a mess in no time.

For example avoiding too deep nesting

```json
"selector-max-compound-selectors": 5,
```

And forbidding the use of `important`:

```json
"declaration-no-important": true,
```

Here's some list of awesome `StyleLint` plugins that worth considering use.

* [`stylelint-a11y`](https://github.com/YozhikM/stylelint-a11y)
* [`stylelint-8-point-grid`](https://github.com/darwintantuco/stylelint-8-point-grid)
* [`stylelint-validator`](https://github.com/csstree/stylelint-validator)
