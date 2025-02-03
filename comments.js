// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

// The comments.html file should contain a form that allows users to submit comments. The form should have the following fields:

// name: a text field for the user's name
// comment: a text area for the user's comment
// submit: a submit button
// When the form is submitted, the data should be sent to the server using a POST request. The server should store the data in a JSON file called comments.json. Each comment should be stored as an object with the following fields:

// name: the user's name
// comment: the user's comment
// timestamp: the current date and time
// The server should respond with a 200 status code and a message saying that the comment was successfully submitted.

// If the server receives a GET request to the /comments endpoint, it should read the comments.json file and send the comments as a JSON response.

// For example, if the comments.json file contains the following comments:

// [
//   {
//     "name": "Alice",
//     "comment": "This is a comment",
//     "timestamp": "2021-06-15T14:00:00.000Z"
//   },
//   {
//     "name": "Bob",
//     "comment": "This is another comment",
//     "timestamp": "2021-06-15T14:05:00.000Z"
//   }
// ]
// The server should respond with the following JSON:

// [
//   {
//     "name": "Alice",
//     "comment": "This is a comment",
//     "timestamp": "2021-06-15T14:00:00.000Z"
//   },
//   {
//     "name": "Bob",
//     "comment": "This is another comment",
//     "timestamp": "2021-06-15T14:05:00.000Z"
//   }
// ]
// Use the express module to create the web server.

// You can use the following code to get started:

// const express = require('express');
// const fs

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
        } else {
            res.send(data);
                }
            });
        });