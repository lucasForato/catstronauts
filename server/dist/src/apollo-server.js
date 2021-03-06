"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApolloServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const schemas_1 = __importDefault(require("./graphql/schemas"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const TrackAPI = require('./datasources/track-api');
function startApolloServer(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs: schemas_1.default,
            resolvers: resolvers_1.default,
            dataSources: () => {
                return {
                    trackAPI: new TrackAPI(),
                };
            },
        });
        yield server.start();
        server.applyMiddleware({
            app,
            path: '/',
        });
    });
}
exports.startApolloServer = startApolloServer;
