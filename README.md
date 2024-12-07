# Express.js Route Handler Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js route handlers:  missing error handling for invalid input.  Specifically, the code attempts to parse a user ID from the route parameters as an integer without checking if the parameter is a valid number.

## Bug

The `bug.js` file contains the erroneous code.  The route handler attempts to find a user by ID, but it doesn't handle the case where the ID is not a number or is otherwise invalid, causing the application to crash.

## Solution

The `bugSolution.js` file demonstrates the corrected code.  The solution includes error handling to check if the `userId` can be parsed as an integer and to gracefully handle the case where no user is found.

## How to run

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Run the buggy code: `node bug.js`
5. Run the corrected code: `node bugSolution.js`