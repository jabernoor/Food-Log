import passport from 'passport';
import {OAuth2Strategy as GoogleStrategy} from "passport-google-oauth";
import config from './config.json';
import {findOrCreate} from '../users/create'

passport.use(new GoogleStrategy({
        clientID: config.google_client_id,
        clientSecret: config.google_client_secret,
        callbackURL: config.google_callback_url
    },
    function (accessToken, refreshToken, profile, done) {
        const params = {};

        params['id'] = profile.id;
        params['name'] = profile.displayName;
        params['email'] = profile.emails[0].value;
        params['imagePath'] = profile.photos[0].value;
        params['oauthProvider'] = profile.provider;

        findOrCreate(params);

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
