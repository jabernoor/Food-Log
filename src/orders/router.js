import express from 'express'

import model from "./model";

const router = express.Router();

router.get('/',(req,res)=>{

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
