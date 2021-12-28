import Author from './Author';
import Track from './Track';
import Module from './Module';
import { gql } from 'apollo-server-express';

const Base = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [Base, Author, Track, Module];
