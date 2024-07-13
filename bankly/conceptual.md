### Conceptual Exercise

Answer the following questions below:

- What is a JWT?<br />
JWT stands for JSON Web Token. It is a secure way of transmitting information between parties as a JSON object. JWT is digitally signed.<br />

- What is the signature portion of the JWT?  What does it do?<br />
The signature portion of JSON Web Token is created by combining the encoded header, encoded payload and a secret key. It verifies the sender of the JWT and ensures the message wasn't changed along the way<br />

- If a JWT is intercepted, can the attacker see what's inside the payload?<br />
Yes. The payload is only Base64Url encoded and not encrypted<br />


- How can you implement authentication with a JWT?  Describe how it works at a high level.<br />
1. User logs in with credentials, username and password
2. Server verifies credentials and creates a JWT containing the user ID
3. Server sends the JWT to the client
4. Client stores the JWT locally
5. With subsequent requests, the client sends the JWT in the Authorization header
6. Server then verifies JWT signature and extracts user info each time the request is sent

- Compare and contrast unit, integration and end-to-end tests.<br />
1. Unit Test: test individual components in isolation
2. Integration test: test how different components work together
3. end-to-end test: Test the entire application

- What is a mock? What are some things you would mock?<br />
A mock is a simulated object that mimics the real objects in a controlled way<br />
Things to mock such as database operations, complex objects<br />

- What is continuous integration?<br />
Continuous Integration is to automatically integrate code changes from multiple contributors into a shared repository<br />

- What is an environment variable and what are they used for?<br />
Environment variable is a dynamic-named value that can affect the way running processes will behave on a computer.<br />
It can be used for storing sensitive information, for configuration management<br />

- What is TDD? What are some benefits and drawbacks?<br />
TDD, or Test Driven Development, is a software development process where you write the tests before writing production code<br />
Its benifits can include codes are testable from the start, a more modular code. Its drawbacks very time-consuming<br />

- What is the value of using JSONSchema for validation?<br />
JSON schema provides a clear, standardized way to describe the structure of JSON data, including validating input data, documenting APIs and generating codes, tests<br />

- What are some ways to decide which code to test?<br />
Codes that involve critical logic, frequently used codes, and complex codes that are prone to bugs<br />

- What does `RETURNING` do in SQL? When would you use it?<br />
RETURNING in SQL allows you to retrive the values of columns from INSERT, UPDATE, DELETE commands. <br />

- What are some differences between Web Sockets and HTTP?<br />
1. HTTP is a request-response protocol, while web sockets allow for full-duplex communications
2. HTTP connections are closed off after each request, while web sockets mantain open connection
3. Web sockets are more suitable for real time applications; HTTP has higher latency for frequent messages


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?<br />
  I personally prefer Flask over Express due to simplicity. But the coding logic of the two is the same: routing, GET, POST, PUT, DELETE etc. Flask codes are simplier, but for small applications. Express employs more hierachy for code organization, putting routing.js, app.js, middleware.js into seperate folders. This is needed to organize different aspects for large projects, but this can be time consuming for small projects<br />
