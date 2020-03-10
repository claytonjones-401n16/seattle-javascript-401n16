# LAB: Classes, Inheritance, Functional Programming

In this lab, you will be doing your first "refactoring", which the process of migrating working code into a new methodology or tech stack. Today, you'll migrate a standard constructor function exported from a node module into a Class, keeping the functionality (and the interface) exactly the same.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

### Getting Started

> Building off of your previous day's branch, create a new branch for today called 'classes' and continue to work in your 'notes' repository.

## Notes Application Requirements

Your functional requirements are the same as for the previous lab:

Create a command line application using Node.js called `notes` which will allow the user to specify a note (words) to be added to a database.

The user should be able to type the `notes` command with an add flag and a string of text, like this:

```bash
notes -a "This is a really cool thing that I wanted to remember for later"
```

- The `-a` (or `--add`) will tell your application that the user wants to ADD a new note
- All of the text following the `-a` (in the quotes) is the text of the note itself
- If the user doesn't provide a valid flag (`-a`), show them an error
- If the user specifies the flag, but doesn't provide any text, show them an error

### Implementation Details

- Refactor your previous work by re-implementing both the `Input` and `Notes` library modules as ES6 Classes
- Your previous tests should remain functioning after the refactor
- Create a schema/rules set for both the Command object created by the Input class and the Note created by the Notes class

 **Software Engineering Note!** *This is the heart of a refactor -- re-implement the same functionality, the same signature, and the same I/O while completely rewriting the underlying implementation*

#### Add validation to the Input and Notes Classes

- Add a new method to the Input class called `valid()` which should inspect the command object and return a boolean if it is properly formatted according to your rules
- Add a new method to the Notes class called `valid()` which should inspect the note object and return a boolean if it is properly formatted according to your rules
- Implement these methods using a new `Validator` class (see requirements below)

##### Compose a validation class library

> `lib/validator.js`

**Write an object validation module that exports a "Validate" class that can, based on the inputs, validate whether or not an entity is satisfactory.**

Implementation

- Exports a Class
  - The constructor should accept a single parameter
    - An object that is a set of "rules" for validation (called a "schema")
  - The class should expose a method called `validate()` that accepts a single parameter
    - An object to validate
  - When called, the validate() method should return a boolean indicating whether the object is valid based on the schema
- Things we want to be able to validate
  - Is the object we're trying to validate actually an object?
  - All all "required" properties present and do they have values?
  - For any property that specifies a type, does the value match that type?
- **Examples**
  - Consider this set of rules, which describe what a valid person object should look like

      ```javascript
      const personRules = {
        id: {type: 'string', required: true},
        name: {type: 'string', required: true},
        age: {type: 'number', required: true},
        children: { type: 'array', valueType: 'string' },
      };
      ```

  - Given those rules, this person should be validated as `true`

      ```javascript
      const susan = {
        id:'123-45-6789',
        name:'Susan McDeveloperson',
        age: 37,
        children:[],
      };
      ```

    - This one, as `false`

      ```javascript
      const fred = {
        id:38,
        name:'Freddy McCoder',
        children:[],
      };
      ```

##### Testing the Validation Module

- Test each method for proper/improper use (required params)
- Validate that validation is reliable
- Validate proper error conditions/returns

## Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations

> This application must be deployed to npm as an installable package.  Please include a link to your npm page for this application with your submission
