const express = require('express');
const { signup, signin } = require('../controller/auth.controller');
const { setpin } = require('../controller/pin.controller');
const auth = express.Router();

auth.post('/signup',signup);
auth.post("/setpin",setpin);
auth.post("/signin",signin);




module.exports = auth;