# Reading: Component Based UI

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

Component based UI systems like `React`, `Angular`, `Vue` and the like all operate on similar architectural principles.

- Rather than view an application as an enormous interconnected codebase, the application is a **composition** of `components` that work together to make the application work.
- The secret sauce is how they work together.
- We use Classes and Functions to classify functionality
- We require what we need
- We render it where we want
- We pay attention to `state` and react as it changes.

### COMPONENTS!

<img src="assets/components.png" width="400">

#### STATE!

<img src="assets/state.jpg" width="400">

### React

#### We will be using React in this course to learn these basic principles

As a component based system, React does an awful lot for us, principally, it gets out out of the way and makes it EASY to implement your application the way you see it, using familiar tools.

> JSX looks like markup, but it's actually Javascript. If you had to code it out, you wouldn't...

JSX

```javascript
const element = () => {
  return {
    <h1 className="greeting">
      Hello, world!
    </h1>
  }
);
```

Behind the scenes...

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

## Additional Resources

### Videos

### Bookmark/Skim

- [react hello world](https://facebook.github.io/react/docs/hello-world.html)
- [introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
- [rendering elements](https://facebook.github.io/react/docs/rendering-elements.html)
- [sass](https://sass-lang.com/)
- [sassmeister](http://www.sassmeister.com)
- [sass cheatsheet](https://devhints.io/sass)
- [react cheatsheet](https://devhints.io/react)
- [another react cheatsheet](https://reactcheatsheet.com/)
