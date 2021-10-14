// Load Node modules
var express = require('express');
const path = require('path');
const cors = require('cors');
require('./database/db');
// Initialise Express
var app = express();
app.use(express.json());
app.use(cors());
// Render static files
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})
// Port website will run on
//*************** */
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});