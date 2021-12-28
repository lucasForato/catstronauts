import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';
import typeDefs from './graphql/schemas';
import resolvers from './graphql/resolvers';
const TrackAPI = require('./datasources/track-api');

export async function startApolloServer(app: Express) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        trackAPI: new TrackAPI(),
      };
    },
  });
  await server.start();
  server.applyMiddleware({
    app,
    path: '/',
  });
}
