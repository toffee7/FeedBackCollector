const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

//create the identifying piece of info using the user model returned through done function for logged in user which shall be passed as Set-Cookie header.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//use the mongo id to generate the user model back from mongodb
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});


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

    //Check for existing user else create a new user
    User.findOne({authID: profile.id})
        .then((existingUser) => {
            if (existingUser) {
                //user exists 
                done(null, existingUser);
            } else {
                //create a new user in mongodbk
                new User({ authID: profile.id })
                .save()
                .then(user => done(null, user));
            }
            
        });   
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

