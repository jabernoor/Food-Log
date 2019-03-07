import express from 'express'
import orderEntry from '../schemes/OrderEntrySchema'

const router = express.Router();

router.get('/',(req,res)=>{
   const orderId = req.query.orderId;
   orderEntry.find({orderId,creatorId:req.user.id});
   res.send(req.user._json);
});

router.post('/',(req,res)=>{
    orderEntry.create(req.body).then(resp=>{
        res.send(resp);
    }).catch(error=>{
        res.send(error);
    });
});

router.delete('/',(req,res)=>{
   res.send('orders goes here');
});

router.put('/',(req,res)=>{
   res.send('orders goes here');
});

export default router
