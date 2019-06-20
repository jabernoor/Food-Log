import express from 'express';
import graphqlHttp from './graphql/init-graphql-server'
import dotenv from 'dotenv'

dotenv.config();

const router = express.Router();

router.use('/graphql', graphqlHttp);
router.get('/test', (req,res)=>{
    res.send(100);
});

export default router;