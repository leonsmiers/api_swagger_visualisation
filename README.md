## Requirements
- Node v6 or higher
- NPM

## Installing
- `$ npm i -g gulp`
- `$ npm i`

## Running
`$ node index.js`


### Functionality
This node scripts supports showing API files in the Swagger UI (An HTML5 based UI for exploring and interacting with a Swagger defined API) with proper CORS support.
When Swagger is opened and you try to use an API reference like http://docs.oracle.com/cloud/latest/process_gs/CPRRA/swagger.json
the following error is shown in Swagger :
"Can't read from server. It may not have the appropriate access-control-origin settings".
The reason for that is that the Swagger UI requires CORS.
This Node project supports solving this problem.

For more information see the blogpost:
<a href="https://www.capgemini.com/blog/capgemini-oracle-blog/2017/01/getting-the-best-oracle-api-information-with-swagger-and-a-pinch">Getting the best Oracle API information with Swagger and a pinch of NodeJS</a>
 
(1) First install NodeJS and NPM.  
<br>
Go to https://nodejs.org for more details on this topic
(2) Download this NodeJS project
<br>
(3) Initialise the project
Install the required Node module by running npm init from the command line
<br>
(4) Download the Process Cloud API, and place the Swagger file in the public directory in the NodeJS project. You might want to rename the JSON file towards and appropriate name, for instance PCS-swagger.json
<br>
(5) Start the NodeJS project
Open the command line, go to the NodeJS project and run node index.js
The Process Cloud API can now be opened in a browser with http://localhost:8081/PCS-swagger.json

### Dependencies
"body-parser": "^1.15.2",
"cookie-parser": "^1.4.3",
"express": "^4.14.0",
"multer": "^1.2.1"

### Devdependencies
