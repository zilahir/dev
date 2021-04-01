# Testing (in React)

Testing is an essential part of every software developing project. I think everyone agrees on that. Yet, as it was mentioned before, developers doesn't enjoy writing documentation. Assuming that's true, well, implementing testcases is something that most of them hates even more.

It's a long time discussion, but it can be shortened: Writing test is a must!

Tests gives confidence to the develoeprs, that what they are building passes the requirements, what's more it gives the confidence and better approaches when it comes to refactoring, or, even bigfixing.

## General

In `React` there are different approaches, different framework that helps writing good test coverages for the application I am working on.

### Test render logic

I call this the _ultimate basic_ method of testing an application.

Why?

When I am implementign testcases for components written in React, I write them in such way that they test only the render logic and don’t care about any internal implementation. This means that, the test should be testing the things that the user will be seeing and interacting with. Let's say, this component is a custom Button component, that implements some UI logic.

Let's consider the following example:

This button, will render _some_ message in a `div` in the application.

How should we test this? Or, what should be tested?

Le's test whether the button is clickable (it may have an extra prop that disables the button based on some business logic), and then the expected text is rendered into _some_ div.

When it comes to implementing testcase, I tend to keep a few important rules in mind:

* No lifecycle methods

Lifecyvle methods should be covered by React itself.

* No interaction with the outer world

`Unit` tests implies the indepedency. A unit test should be _free_ piece of code, that has everything inside, to perform it's job. If a test needs some piece of data, we need to mock it.

The smaller, the better. If the componet in question is big, the test should be divided into as many smaller pieces, as possible.

Pro tip:

A correctly chosen project structure can help you achieve this.

## Frameworks

Let's see some of the most known and widely used frameworks, and other testing related tools:

### Jest

Maybe the most widely used testing framework in `React` is `Jest` which – just like the React itself – is being created at Facebook.

Jest’s UI snapshot testing and complete-API philosophy combines well with React. Performance is also a plus with process-based parallel testing and optional priority to failed tests. With over 16M downloads a week, Jest is probably the most popular testing framework for React.

### Mocha

Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library. It is very configurable and gives the developer full control over how they wish to test their code, with which tools, while you can plug in and out most supporting libraries and tools in your chain.

### Enzyme

It’s hard to dive into React testing, and particularly with testing frameworks like Jest, without crossing paths with Enzyme by AirbnbEng. Enzyme isn’t a testing framework, but rather a testing utility for React that makes it easier to test the outputs of components, abstracting the rendering of components.

### React-testing-library

This is my personal favourite.

[`React-testing-library`] is simulates user behavior in the tests. Much like Enzyme, this library is a simple and complete set of React DOM testing utilities aimed to imitate actual user actions and workflows.

## Testing toolkits

Besides the framework, there are other intersting toolkits avaliable.

What I think it's worth mentioning is [`react-unit`](https://github.com/pzavolinsky/react-unit), which is lightweight unit test library for React. It's definitely worth checking out [one](https://github.com/pzavolinsky/react-unit/blob/master/test/stateless.jsx) of their examples. Real handy!

## Misc

If you wanna get deeper into testing, here's some good material:

* [https://www.leighhalliday.com/testing-react-jest-enzyme-sinon](https://www.leighhalliday.com/testing-react-jest-enzyme-sinon)
* [Introducing to React Testing Library bd Kent. C. Dodds](https://kentcdodds.com/blog/introducing-the-react-testing-library)
* [Udemy course on testing React](https://www.udemy.com/course/react-testing-with-jest-and-enzyme/)
* [Github repo with working examples](https://github.com/mihailgaberov/testing-reactjs-examples)