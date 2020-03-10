# LAB: OAuth

Integrate Github OAuth into your authentication server

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today and continue to work in your 'auth-server' repository.

## Assignment:

Continue to work on the authentication server you started in the previous lab. You should already have the following features working

- POST `/signup` route that accepts a JSON object to create a new account
  - Returns a token
- POST `/signin` route that accepts a basic authentication header and can 'login' a user with a valid username and password
  - Returns a token
- Tests!

Add support for OAuth to your server, using either GitHub, as demonstrated

- A public folder with an index.html file
- A static router in your server
- GET `/oauth` route that handles the handshaking process
- Implement GitHub OAuth as middleware for that route
- Alter the provided to code to work with your server scheme and users model

### Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
