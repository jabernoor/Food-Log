import express from 'express';
import ordersRouter from './orders/router';
import orderEntryRouter from './order-entries/router';
import foodProviderRouter from './food-providers/router';
import oAuthRouter from './oauth/router';
import graphqlHTTP from "express-graphql";
import fs from 'fs'
import path from 'path'
import resolvers from './graphql/resolvers/root'

const router = express.Router();
import {
    buildSchema
} from 'graphql';
const stringSchema = fs.readFileSync(path.join(__dirname, "/graphql/schema.graphql"), "utf8");
var schema = buildSchema(stringSchema);

router.use('/orders', ordersRouter);
router.use('/order/entry', orderEntryRouter);
router.use('/providers', foodProviderRouter);
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

router.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

export default router;