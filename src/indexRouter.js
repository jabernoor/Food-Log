import express from 'express';
import ordersRouter from './orders/router';
import oAuthRouter from './oauth/router';
import express_graphql from "express-graphql";
import fs from 'fs'
import path from 'path'


const router = express.Router();
import {
    buildSchema
} from 'graphql';
const stringSchema = fs.readFileSync(path.join(__dirname, "/graphql/schema.graphql"), "utf8");
var schema = buildSchema(stringSchema);

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

router.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true

}));

export default router;