const express = require('express');
const { loginUser } = require('../controller/loginController');
const router = express.Router();


router.route('/login').post(loginUser);

module.exports = router;
