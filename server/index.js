const express = require('express');
require('./services/passport');
const routes = require('./routes/authRoutes');
const app = express();

routes(app);

//Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);