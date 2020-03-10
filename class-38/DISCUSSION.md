# Readings: Redux - Asynchronous Actions

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

### Thunking for Data...

Using Redux actions to connect to remote APIs via Thunk Middleware

Normally, action generators return a function, like this:

```javascript
const get = (payload) => {
  return {
    type: 'GET',
    payload: payload
  }
}
```

But often, you'll need your actions to do some asynchronous action before you dispatch it to the reducer. For example, you may need to get something from a remote api.

In this case, we want to set it up like this, where the action you dispatch from your React App returns a function, not an actual action object, which is what Redux **expects** and **requires**

```javascript
let api = 'https://api.mockable.io/api/v1/stuff';

export const get = () => dispatch => {
  return utils.fetchData(api).then(records => {
    dispatch(getAction(records));
  });
};

const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};
```

So, we will implement special redux middleware, called "thunk", which inspects every dispatched action and then either lets it go through (in the case of a normal action that returns an object) or it processes the function and then dispatches what that function returns.

Notice in the example above, that the function we ran for the action is curried, and receives `dispatch()`, which it calls with the payload it got from the server.

**What does thunk middleware look like?**

```javascript
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
```

In Redux, middleware is implemented as a curried function that ultimately evaluates the action and determines whether it's a function or not. If so, it gets invoked with the store's `dispatch()` and `getState()` methods. Otherwise (a normal action creator), it simply runs your action.

At its base level, this is all we really need.  However, we're going to be using the `redux-thunk` npm module in our production applications, as it provides more stability and error checking for us.

## Additional Resources

### Videos

* [dan abramov on suspense](https://www.youtube.com/watch?v=6g3g0Q_XVb4)

### Bookmark/Skim

* [async actions](https://redux.js.org/advanced/asyncactions)
* [thunk middleware](https://github.com/reduxjs/redux-thunk)
* [redux thunk](https://alligator.io/redux/redux-thunk/)
* [suspense](https://blog.logrocket.com/async-rendering-in-react-with-suspense-5d0eaac886c8) (alpha/beta)
