import { gql } from 'apollo-server-core';

export default gql`
  extend type Query {
    getAuthors: [Author!]!
    getAuthor: Author
  }
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
