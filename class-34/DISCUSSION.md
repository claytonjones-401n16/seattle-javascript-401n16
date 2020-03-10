# Reading: `<Login />` and `<Auth />`

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Read

### Authentication + Role Based Authorization

What problems do we need to solve for?

- Is this a valid user (are they logged in)?
- What is the user authorized to do?
  - Which parts of our application care about this?
  - How can we determine this?
    - What's in the token?
    - Contact between the UI and the API
- How do we make this easy to use?

### Proposal

`<Auth />` component

- Based on your permissions and login status, it either gives you access to a component or jsx or hides it.
- Must not use Redux
  - Why? We don't want to force implementors into a specific state management system.

```javascript
// The div only shows if you are logged in
  <Auth>
    <div />
  </Auth>

// The div only shows if you are logged in AND have read permissions
  <Auth capability="read">
    <div />
  </Auth>
```

## Additional Resources

### Videos

### Bookmark/Skim

- [what is rbac?](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more)
- [react-cookies component](https://www.npmjs.com/package/react-cookies)
- [react-cookie library](https://www.npmjs.com/package/react-cookie)
