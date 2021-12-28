"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = (0, apollo_server_core_1.gql) `
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
