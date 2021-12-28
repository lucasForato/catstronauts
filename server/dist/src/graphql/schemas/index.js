"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("./Author"));
const Track_1 = __importDefault(require("./Track"));
const Module_1 = __importDefault(require("./Module"));
const apollo_server_express_1 = require("apollo-server-express");
const Base = (0, apollo_server_express_1.gql) `
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
exports.default = [Base, Author_1.default, Track_1.default, Module_1.default];
