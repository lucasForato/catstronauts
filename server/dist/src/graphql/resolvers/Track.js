"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        getTracksForHome(_, __, { dataSources }) {
            return dataSources.trackAPI.getTracksForHome();
        },
        track(_, { id }, { dataSources }) {
            return dataSources.trackAPI.getTrack(id);
        },
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getModules(id);
        },
    },
};
