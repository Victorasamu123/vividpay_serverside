const express = require('express');
const { signup } = require('../controller/auth.controller');
const auth = express.Router();

auth.post('/signup',signup);






module.exports = auth;