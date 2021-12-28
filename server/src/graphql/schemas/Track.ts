import { gql } from 'apollo-server-core';

export default gql`
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  extend type Query {
    getTracksForHome: [Track!]!
    track(id: ID!): Track
  }
`;
