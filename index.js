console.log("Hello World");

var express = require('express');

var app = express();

app.get('/', (req, res) => res.send('Hello master ish #8 World!'))

module.exports = app.listen(8080, () => console.log('Example app listening on port 8080!'))
