const express = require('express');
require('dotenv').config();

const app = express();
 const PORT = process.env.PORT || 5003;


 app.use(express.json());
app.use(express.static("public"));

const smsRoutes = require('./routes/sms.routes');

app.get('/', (req, res) => {
  res.send('SMS Service Running ✅');
});

app.use('/api/sms', smsRoutes);

app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
 }); 