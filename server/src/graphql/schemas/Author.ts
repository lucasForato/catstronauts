import { gql } from 'apollo-server-core';

export default gql`
  type Author {
    id: ID!
    name: String!
    photo: String
  }
  extend type Query {
    getAuthor(id: ID!): Author
  }
`;
