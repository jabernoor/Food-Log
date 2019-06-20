'use strict';

import express from "express";
import googlePassport from "./google"

const router = express.Router();

router.get('/', googlePassport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}));

router.get('/callback',
    googlePassport.authenticate('google', {
        successRedirect: '/oauth/success',
        failureRedirect: '/login'
    }),
    function (req, res) {
        console.log('after callback')
    });

module.exports = router;
