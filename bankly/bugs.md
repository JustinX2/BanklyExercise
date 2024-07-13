## Bug 1: Async / Wait in Login Route in file auth.js under Routes folder
The login route is missing "await" keyword that comes with "async" keyword. "await" keyword is added back
For test, added a test in routes.test.js to check for 401 status when invalid credentials are inputted

## Bug 2: Async / Await in Delete User in file users.js under Routes folder
The delete user route is missing "await" keyword that comes with "async" keyword. "await" keyword is added back.
For test, added a test in routes.test.js to check for 404 status when trying to delete a user that does not exist

## Bug 3: Lack of CSRF proection
This bankly application does not have CSRF protection. So CSRF protection is added to the app.js file. 
