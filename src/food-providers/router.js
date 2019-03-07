import express from 'express'
import foodProvider from '../schemes/FoodProviderSchema'

const router = express.Router();

router.post('/',(req,res)=>{
    foodProvider.create(req.body).then(resp=>{
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
