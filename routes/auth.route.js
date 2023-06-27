const express = require('express');
const auth = express.Router();
const { signup, signin, tokenverify } = require('../controller/auth.controller');
const { setpin } = require('../controller/pin.controller');

auth.post('/signup',signup);
auth.post("/setpin",setpin);
auth.post("/signin",signin);
auth.get("/tokenverification",tokenverify);




module.exports = auth;