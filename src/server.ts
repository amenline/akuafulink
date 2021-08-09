import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const app: Application = express();

// initialize dotenv
dotenv.config();

connectDB();

// body parser
app.use(express.json());

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Hello world');
// });
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
