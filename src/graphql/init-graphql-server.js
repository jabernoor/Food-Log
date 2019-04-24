import graphqlHTTP from "express-graphql";
import resolvers from './resolvers/root'
import fs from 'fs';
import path from 'path';

import {
    buildSchema
} from 'graphql';


const stringSchema = fs.readFileSync(path.join(__dirname, "/schema.graphql"), "utf8");
var schema = buildSchema(stringSchema);

export default graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
})