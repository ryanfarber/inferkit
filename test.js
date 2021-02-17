// test.js
require('dotenv').config();
const Inferkit = require("./index.js")

const inferkit = new Inferkit(process.env.API_KEY)
inferkit.process("hello world.  I am playing around with an AI.", {length: 300}).then(console.log)