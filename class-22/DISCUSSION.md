# Reading: React Testing and Deployment

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

### React Testing

- **Snapshots** - Make assertions on the *exact* rendered markup (with content) at any state of the application.
- **Render Testing** - Similar to snapshots, but allows for jQuery-like inspection of the virtual DOM tree
- **Shallow Testing** - Executes and renders the called/container component, but does not compose children.
- **Mounting** - Executes the full component and children. Allows for inspection of rendered Virtual DOM as well as the current state

Using a combination of approaches, you can easily "use" your application and ensure that things are changing both visually and physically (elements and state) as you expect.

#### Sample test for our counter component

```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../src/components/counter/counter.js';

describe('<Counter/> (Enzyme Test)', () => {
  it('is alive at application start', () => {
    let app = mount(<Counter />);
    expect(app.find('.count').text()).toBe('0');
  });

  it('can count up', () => {
    let app = mount(<Counter />);
    app.find('.up').simulate('click');
    expect(app.state('count')).toEqual(1);
    app.find('.up').simulate('click');
    expect(app.state('count')).toEqual(2);
  });

  it('can count down', () => {
    let app = mount(<Counter />);
    app.find('.down').simulate('click');
    expect(app.state('count')).toEqual(-1);
    app.find('.down').simulate('click');
    expect(app.state('count')).toEqual(-2);
  });

  it('visually displays proper polarity and value on the count element', () => {
    let app = mount(<Counter />);
    expect(app.find('.count.negative').exists()).toBeFalsy();
    expect(app.find('.count.positive').exists()).toBeFalsy();
    // Go to 1
    app.find('.up').simulate('click');
    expect(app.find('.count.positive').exists()).toBeTruthy();
    expect(app.find('.count').text()).toBe('1');

    // Down to zero
    app.find('.down').simulate('click');
    expect(app.find('.count').text()).toBe('0');
    expect(app.find('.count.negative').exists()).toBeFalsy();
    expect(app.find('.count.positive').exists()).toBeFalsy();

    // Down to -1
    app.find('.down').simulate('click');
    expect(app.find('.count.negative').exists()).toBeTruthy();
    expect(app.find('.count').text()).toBe('-1');
  });
});

describe('<Counter/> Core Component (Snapshot Test)', () => {
  it('renders right', () => {
    const component = renderer.create(<Counter />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

### Deployment

React in development mode uses a node service to create a live website that refreshes as you write code. This is NOT what actually gets deployed when you want your React website to go live. React, remember is an index.html file that uses Javascript to render components in the browser. The node server is only there to aid in your development.

```bash
npm run build
```

This command, executed from the root folder of your React application will output a "static website" containing no more than the `index.html`, `.js` and `.css` files required to open your app. Nearly the same files as you would have deployed in Code 201, but with much better code!

#### Deploying to GitHub Pages

1. Enable GitHub Pages on your domain, using the `gh-pages` branch
1. Create a Personal Access Token in your GitHub account
1. Add this token as a "Secret" called `PERSONAL_TOKEN` in the repository housing your react app
1. Add the react workflow .yml file to your repository (in `.github/workflows`)

This will initiate a GitHub Action whenever you push (or merge) code into your repository. This action will run the build command for you, create a new branch called `gh-pages` and deploy your React static files to that branch, which you can then view at the Github Pages link provided to you

#### Deploying to AWS (s3)

- Create a new Bucket
  - Storage containers for static assets
  - Essentially, these are "folders"
- Objects
  - These are the things in the buckets (your files)
  - Upload the contents of your React application build folder to your bucket
- Set up to serve websites
  - Properties Tab "Static Web Hosting" option

#### Deploying to AWS Amplify

- Create a new Amplify Workflow
- Point the workflow at your GitHub repository (master branch)
- Merge your code to master on GitHub
- That's it ... Amplify will monitor your repository for changes, pull, build, and deploy your React app automatically
- Eventually, there's a usage charge for the service, depending on your traffic level

#### Deploying to Netlify

- Create a netlify.com account
- Create a new application
- Point the application at your GitHub repository (master branch)
- Merge your code to master on GitHub
- That's it ... Netlify will monitor your repository for changes, pull, build, and deploy your React app automatically

#### Deploying to an "old school" host, such as godaddy.com

- Create your account
- Open an FTP connection to your hosting company with a tool like Transmit or FileZilla
- Navigate to the web root folder
- Upload the contents of your react application's `build` folder

## Additional Resources

### Videos

### Skim

- [jest testing with react](https://create-react-app.dev/docs/running-tests/)
- [snapshot testing](https://jestjs.io/docs/en/snapshot-testing)
- [static rendering - enzyme](https://airbnb.io/enzyme/docs/api/shallow.html)
- [shallow mounting - enzyme](https://airbnb.io/enzyme/docs/api/render.html)
- [full mounting - enzyme](https://airbnb.io/enzyme/docs/api/mount.html)

### Bookmark

- [selenium](https://www.seleniumhq.org/)
- [web driver](http://webdriver.io/)
- [nightmare](http://www.nightmarejs.org/)
- [enzyme](https://airbnb.io/enzyme/docs/api/)
- [nightmare](http://www.nightmarejs.org/)
- [AWS](http://aws.amazon.com)
- [Netlify](http://www.netlify.com)
