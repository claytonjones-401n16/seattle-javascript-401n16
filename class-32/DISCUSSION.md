# Reading - Custom Hooks

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

## Custom Hooks

- What are custom hooks?
  - Extract duplicated logic from components
  - Share common functionality
    - But not state...
  - Take advantage of useEffect lifecycle

- Common use cases -- make things DRY!
  - Handle forms easily
  - Pre-fetch API data
  - Connect to services (like socket.io, Q, etc)

  > Unlike a React component, a custom Hook doesn't need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it's just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.

Following is a simple example that demonstrates proper wiring.

- Hooks are exported as a function, named as useXXX()
- Hooks return data or behaviors (functions) that are required to reuse their internal functionality
- Hooks are imported into components
- Components can re-use the hook functionality or data/state as needed
- Hooks do not render

  use-food-hook.js

  ```javascript
  export default function useFoodHook(hungry) {
    let food = 'cookies';
    return hungry ? food : null;
  }
  ```

  Using a hook is a simple, then, as requiring it and calling it.

  my-component.js

  ```javascript
  import useFeedme from 'use-food-hook.js';
  function myComponent() {
    const food = useFeedMe(true);
    return <div>{food}</div>
  }
  ```

## Additional Resources

### Videos

### Bookmark/Skim

Authoring

- [custom hooks - all you need to know](https://www.telerik.com/blogs/everything-you-need-to-create-a-custom-react-hook)
- [async hooks](https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g)
- [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [react custom hooks](https://reactjs.org/docs/hooks-custom.html)

Hooks Lists/Collections

- [use hooks](https://usehooks.com/)
- [hooks list](https://github.com/rehooks/awesome-react-hooks)
- [10 essential react hooks](https://blog.bitsrc.io/10-react-custom-hooks-you-should-have-in-your-toolbox-aa27d3f5564d)
