const express = require('express');
const router = express.Router();
const UserController = require('../controller/users.controller');

/* GET home page. */
router.get('/', function (req, res, next)
{
    res.json({status: "success", message: "Service API", data: {"version_number": "v1.0.0"}})
});

//common
router.get('/all', UserController.all);


//relations

module.exports = router;