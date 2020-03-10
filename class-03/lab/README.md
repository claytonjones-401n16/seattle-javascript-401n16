# LAB: Data Modeling & NoSQL Databases

Using a Mongo Schema and Data Model, implement CRUD functionality to your note taking application

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'mongo' and continue to work in your 'notes' repository.

Your app needs a new dependency today: mongoose

- `npm i mongoose`
- Remember to start your mongo server: `mongod --dbpath=/Users/path/to/data/db`

## Requirements

Add the following features to your Notes application:

- When a user adds a new note, save it to the database
  - i.e. `notes -add "This is fun" --category school

- Users should be able to list notes from the database
  - All Notes: `notes --list` or `notes -l`
  - Notes in a category: `notes --list school` or `notes -l school`

- Users should be able to delete a single note
  - `notes -d id-here`

## Implementation Notes

- Your mongoose schema should have a minimum of 2 properties: text and category
- If you want to store (or ask for) more information
  - Ensure that add a new property and rules for it in your schema
  - Alter (possibly) your input class to support new command line arguments

### Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations

> This application must be deployed to npm as an installable package.  Please include a link to your npm page for this application with your submission
