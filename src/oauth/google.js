import passport from 'passport';
import {OAuth2Strategy as GoogleStrategy} from "passport-google-oauth"
import config from './config.json'

passport.use(new GoogleStrategy({
        clientID: config.google_client_id,
        clientSecret: config.google_client_secret,
        callbackURL: config.google_callback_url
    },
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

export default passport;
