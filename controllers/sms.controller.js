const { sendSMS } = require('../services/sms.service');

const sendOtpSMS = async (req, res) => {

   try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({
        status: false,
        message: "Phone and OTP required"
      });
    }

    const result = await sendSMS(phone, otp);

    if (!result.success) {
      return res.status(500).json(result);
    }

    return res.json({
      status: true,
      message: "SMS sent",
      requestId: result.requestId
    });

  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal error"
    });
  }
};

module.exports = { sendOtpSMS };