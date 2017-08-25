const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const keys = require('../config/keys');

//Google Strategy setup for Passport 
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    console.log(done);
}));

//LinkedIn Strategy setup for Passport
passport.use(new LinkedInStrategy({
    clientID: keys.linkedinClientID,
    clientSecret: keys.linkedinClientSecret,
    callbackURL: '/auth/linkedin/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    console.log(done);
}));

//GitHub Strategy setup for Passport
passport.use(new GitHubStrategy({
    clientID: keys.githubClientID,
    clientSecret: keys.githubClientSecret,
    callbackURL: '/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    console.log(done);
}));

//Facebook Strategy setup for Passport

