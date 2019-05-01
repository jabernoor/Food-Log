import express from 'express';
import oAuthRouter from './oauth/router';
import fs from 'fs'
import path from 'path'

const router = express.Router();

router.use('/oauth', oAuthRouter);

router.use('/dashboard', (req, res) => {
    if(!req.isAuthenticated()){
        res.redirect('/login');
    }
    res.render('dashboard');
});

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/dashboard');
    }
    res.render('login');
});

export default router;