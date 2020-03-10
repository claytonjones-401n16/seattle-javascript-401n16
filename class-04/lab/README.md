# LAB: Advanced Mongo/Mongoose

Using a Mongo Schema and Data Model, implement a CRUD interface that can be used the same as your "in memory" data models from the previous labs

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'collection' and continue to work in your 'notes' repository.

## Requirements

The features for your note application remain unchanged:

- When a user adds a new note, save it to the database
  - i.e. `notes -add "This is fun" --category school

- Users should be able to list notes from the database
  - All Notes: `notes --list` or `notes -l`
  - Notes in a category: `notes --list school` or `notes -l school`

- Users should be able to delete a single note
  - `notes -d id-here`

### Implementation Notes

Although the requirements are the same, in this assignment you'll be refactoring the application as follows

- Create a notes "collection" which requires your notes mongo schema
  - You must implement the following collection interface methods for CRUD operations
    - `get()`
    - `create()`
    - `update()`
    - `delete()`
  - Write a suite of tests, using TDD to get the tests and your model working in sync.
  - Use `@code-fellows/supergoose`
- Update your notes module to save, list, delete notes using the collection interface rather than the model itself

### Reflect: What have we accomplished?

- How does having a single interface impact testing?
  - What do you need (or not) to test?
- Can you see how this might scale?
- How do these interfaces relate to the file and memory interfaces?
- Can they exist in the same system?

### Stretch Goals

- Add some pre and post hooks
  - Logging
  - Upper and Lower casing

### Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations

> This application must be deployed to npm as an installable package.  Please include a link to your npm page for this application with your submission
