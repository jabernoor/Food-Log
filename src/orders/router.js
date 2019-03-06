import express from 'express'
import order from '../schemes/OrderSchema'

const router = express.Router();

router.get('/',(req,res)=>{
   const orderId = req.query.orderId;
   order.find({orderId,creatorId:req.user.id});
   res.send(req.user._json);
});

router.post('/',(req,res)=>{
   res.send('orders goes here');
});

router.delete('/',(req,res)=>{
   res.send('orders goes here');
});

router.put('/',(req,res)=>{
   res.send('orders goes here');
});

export default router
