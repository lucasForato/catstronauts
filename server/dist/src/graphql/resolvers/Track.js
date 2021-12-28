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
    Mutation: {
        incrementTrackViews(_, { id }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const track = yield dataSources.trackAPI.incrementTrackViews(id);
                    return {
                        code: 200,
                        success: true,
                        message: `Successfully incremented the number of views for ${id}`,
                        track,
                    };
                }
                catch (err) {
                    return {
                        code: err.extensions.response.status,
                        success: false,
                        message: err.extensions.response.body,
                        track: null
                    };
                }
            });
        },
    },
};
