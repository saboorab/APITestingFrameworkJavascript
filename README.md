## API Test supertest framework

### Install
To run test cases in terminal successfully, please ensure node has been intalled in your environment.
https://nodejs.org/en/download/

open command prompt and install npm i --save-dev mocha chai @babel/cli @babel/node @babel/register @babel/preset-env, mochawesome,supertest
 

### Run

 To run test cases, please execute commands:
 `npm run test`
 
 ### To be noted
 - Created helper function to generate token (helper --> token.js)
 - All data generator functions are available in utils --> random.js
 - All endpoits are managed in services --> endpoints.js file
 - All api payload are maintained in resources --> payload.js file
 - All tests are mainted in test-->test.js

 ### Reporting

 Detailed reporting has been implemented with mochawesome.Just open the html file after running the test from  the project directory and it will shows the details regaring test cases execution


 ### Bug Report

Detailed bug  report has been included Bug report_QA Automation Task  
