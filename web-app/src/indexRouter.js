import express from 'express';
import oAuthRouter from './oauth/router';
import fs from 'fs'
import path from 'path'

const router = express.Router();

router.use('/oauth', oAuthRouter);

router.use('/dashboard', (req, res) => {
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    return res.render('dashboard',{data:{isLoggedIn:true,user:req.user}});
});

router.use('/orders', (req, res) => {
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    return res.render('orders',{data:{isLoggedIn:true}});
});

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/dashboard');
    }
    return res.render('login',{data:{isLoggedIn:false}});
});

export default router;