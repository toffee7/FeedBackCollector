const express = require('express');
const passport = require('passport');

module.exports = (app) => {
    //route setup for authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile','email']
    }));

    //route setup for callback
    app.get('/auth/google/callback', passport.authenticate('google'));
};


