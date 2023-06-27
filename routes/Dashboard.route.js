const express = require('express');
const { getUserDetials } = require('../controller/Dashboard.controller');
const dashboard = express.Router();

dashboard.post("/getUser",getUserDetials);





module.exports= dashboard