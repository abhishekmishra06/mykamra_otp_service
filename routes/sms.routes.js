const express = require('express');
const router = express.Router();
const { sendOtpSMS } = require('../controllers/sms.controller');

router.post('/send-otp', sendOtpSMS);

module.exports = router;