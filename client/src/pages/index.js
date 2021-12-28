import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
/** importing our pages */
import Tracks from './tracks';
import Track from './track';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

export default function Pages() {
  return (
    <ApolloProvider client={client}>
      <Router primary={false} component={Fragment}>
        <Tracks path="/" />
        <Track path="/track/:trackId" />
      </Router>
    </ApolloProvider>
  );
}
