"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = (0, apollo_server_core_1.gql) `
    type Module {
        id: ID!
        title: String!
        length: Int
    }
`;
