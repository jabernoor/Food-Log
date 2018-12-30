import express from 'express';
import ordersRouter from './orders/router';
import oAuthRouter from './oauth/router';

const router = express.Router();

router.use('/orders',ordersRouter);
router.use('/oauth',oAuthRouter);
router.get('/login',(req,res)=>{
   res.render('login');
});
export default router;