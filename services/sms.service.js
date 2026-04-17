const axios = require('axios');

const sendSMS = async (phone, otp) => {

    try {
        const response = await axios.post(
            "https://control.msg91.com/api/v5/otp",
            {},
            {
                params: {
                    mobile: `91${phone}`,
                    authkey: process.env.MSG91_AUTH_KEY,
                    template_id: process.env.MSG91_TEMPLATE_ID,
                    otp: otp,
                    otp_length: 6,
                    // otp_expiry: 15
                },

            }
        );

        if (response.data.type === "error") {
            throw new Error(response.data.message);
        }

        return {
            success: true,
            requestId: response.data.request_id
        };

    } catch (error) {


        return {
            success: false,
            error: error.message
        };
    }
};

module.exports = { sendSMS };