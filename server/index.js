const express = require('express');
const passportConfig = require('./services/passport');
const app = express();


//Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);