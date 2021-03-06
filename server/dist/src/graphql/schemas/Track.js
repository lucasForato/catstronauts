"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = (0, apollo_server_core_1.gql) `
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

  type Mutation {
    incrementTrackViews(id: ID!): incrementTrackViewsReturn
  }

  type incrementTrackViewsReturn {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  extend type Query {
    getTracksForHome: [Track!]!
    track(id: ID!): Track
  }
`;
