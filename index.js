const express = require('express');
require('dotenv').config();

const app = express();
 const PORT = process.env.PORT || 5000;


 app.use(express.json());
app.use(express.static("public"));

const smsRoutes = require('./routes/sms.routes');

app.use('/api/sms', smsRoutes);

app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
 }); 