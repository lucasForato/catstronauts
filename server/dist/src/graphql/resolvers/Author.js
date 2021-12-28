"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        getAuthor(_, { id }, { dataSources }) {
            return dataSources.trackAPI.getAuthor(id);
        },
    },
};
