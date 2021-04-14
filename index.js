// const { readFile, readFileSync } = require('fs');

// const txt = readFileSync('./hello.txt', 'utf-8');
// readFile('./hello.txt', 'utf-8', (err, txt) => {
//     console.log(txt);
// })
// console.log(txt);

// console.log('do this as soon as possible');
// const myModule = require('./my-module');

// console.log(myModule);

const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))