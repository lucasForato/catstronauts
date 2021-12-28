import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
/** importing our pages */
import Tracks from './tracks';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

export default function Pages() {
  return (
    <ApolloProvider client={client}>
      <Router primary={false} component={Fragment}>
        <Tracks path="/" />
      </Router>
    </ApolloProvider>
  );
}
