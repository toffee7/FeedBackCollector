const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const routes = require('./routes/authRoutes');
const app = express();

//make the express use cookie
app.use( cookieSession({
    maxAge: 1*24*3600*1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

routes(app);

//Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);