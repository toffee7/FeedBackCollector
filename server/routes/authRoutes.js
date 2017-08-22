const express = require('express');
const passport = require('passport');
const app = new express();

//route setup for authentication
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile','email']
}));

//route setup for callback
app.get('/auth/google/callback', passport.authenticate('google'));