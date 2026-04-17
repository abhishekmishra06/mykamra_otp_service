const express = require('express');
require('dotenv').config();

const app = express();
 
 app.use(express.json());
app.use(express.static("public"));

const smsRoutes = require('./routes/sms.routes');

app.use('/api/sms', smsRoutes);

app.listen(5005, () => {
 }); 