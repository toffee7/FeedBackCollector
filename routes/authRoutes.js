const express = require('express');
const passport = require('passport');

module.exports = (app) => {
    //route setup for authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile','email']
    }));

    app.get('/auth/github', passport.authenticate('github', {
        scope: [ 'user:email']
    }));

    app.get('/auth/linkedin', passport.authenticate('linkedin', {
        scope: ['r_basicprofile', 'r_emailaddress']
    }))

    //route setup for callback
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/auth/github/callback', passport.authenticate('github'));

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin'));

    //add route for logout
    app.get('/api/logout', (req, res) => {
        req.logout();
    });


};


