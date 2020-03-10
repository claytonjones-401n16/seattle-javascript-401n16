# LAB: Node Ecosystem

Time to get hands on with Test Driven Development (TDD) and Continuous Integration (CI). For this lab, you will be writing a fully tested validation module and shepherd it through a CI pipeline.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Create a new repository for this project, called 'notes' and work in a branch specific for this day

## Requirements

Create a command line application using Node.js called `notes` which will allow the user to specify a note (words) to be added to a database.

The user should be able to type the `notes` command with a flag and a parameter, like this:

```bash
notes -a "This is a really cool thing that I wanted to remember for later"
```

- The `-a` (or `--add`) will tell your application that the user wants to ADD a new note
- All of the text following the `-a` (in the quotes) is the text of the note itself
- If the user doesn't provide a valid flag (`-a`), show them an error
- If the user specifies the flag, but doesn't provide any text, show them an error

### Developer Implementation

> **USE TDD Practices** as you write your modules

Use the following files/structure

- `index.js` - Your application's "entry point"
  - Requires the library files you will be writing (input, notes)
  - Instantiates an "Input" parser
  - Sends properly parsed input to the Notes library for display

- `lib/input.js`
  - Exports a constructor function
  - Uses `minimist` (or any other CLI library) to read command line arguments
  - Evaluates and Validates the input (is the command (i.e. '-a') a valid one and is there data)
  - Returns an instance containing the action to perform and the payload for the action
    - for example:

      ```javascript
        {
          action: "add";
          payload: "This is a really cool thing that I wanted to remember for later"
        }
      ```

- `lib/notes.js`
  - Exports a constructor function
  - Compose a prototype method that can execute the correct (any) operation, given the above object
    - How will you use that object to run the correct method?
      - You can predict that `add` won't be the only action we're going to have to handle...
  - Write a prototype method called `add()` that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the `add` command is executed

#### Testing

Write a set of tests for your Input Module

- Does it properly parse the `-x` style options?
- Do the instance methods do their correct job (return the right thing) given various inputs?

Write a test for the `add()` method of the Notes module

- Since it's only doing a `console.log()`, assert that you can view that log with a spy.

### Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations

> This application must be deployed to npm as an installable package.  Please include a link to your npm page for this application with your submission
