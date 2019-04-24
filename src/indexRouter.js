import express from 'express';
import graphqlHttp from './graphql/init-graphql-server'
import oAuthRouter from './oauth/router';
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();

const router = express.Router();

router.use('/oauth', oAuthRouter);

router.use('/dashboard', (req, res) => {
    if(!req.isAuthenticated()){
        res.render('/login');
    }
    res.redirect('/dashboard');
    
});


router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/dashboard');
    }
    res.render('login');
});

router.use('/graphql', graphqlHttp);

export default router;