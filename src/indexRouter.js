import express from 'express';
import ordersRouter from './orders/router';
import oAuthRouter from './oauth/router';


const router = express.Router();

router.use('/orders', ordersRouter);
router.use('/oauth', oAuthRouter);
router.use('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {

        res.redirect('/dashboard');
    }
    res.render('login');
});
export default router;