import express from 'express'

import googleRouter from "./google-router";
import axios from 'axios';
import querystring from "querystring";
import fs from "fs";
import path from "path";
import appConfig from '../config'
import https from "https";

const router = express.Router();

router.use('/google', googleRouter);

router.get('/success', (req, res) => {
    let user = {
        name: req.user.displayName,
        email: req.user.email,
        imagePath: req.user.imagePath,
        oauthProvider: req.user.oauthProvider
    }
    saveUser(user).then(result => {
        req.user['id'] = result.data.createUser.id;
        return res.redirect('/dashboard');
    }).catch(error => {
        return res.redirect('/error');
    });
});


let saveUser = function (user) {
    return new Promise((resolve, reject) => {
        const query = fs.readFileSync(path.join(__dirname, "/../graphql-queries/create-user.graphql"), "utf8");
        let queryString = querystring.stringify({
            query: query,
            variables: JSON.stringify(user)
        })
        axios.post(appConfig.gqlRoute, {
                query: query,
                variables: JSON.stringify(user)
            })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                return reject({
                    status: 500,
                    message: 'Internal server error.',
                    stackTrace: error
                });
            });
    });
}
export default router
