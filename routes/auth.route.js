const express = require('express');
const { signup } = require('../controller/auth.controller');
const { setpin } = require('../controller/pin.controller');
const auth = express.Router();

auth.post('/signup',signup);
auth.post("/setpin",setpin);




module.exports = auth;