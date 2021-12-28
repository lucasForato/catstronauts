"use strict";
// src/datasources/track-api.js
const { RESTDataSource } = require('apollo-datasource-rest');
class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }
    getTracksForHome() {
        return this.get('tracks');
    }
    getAuthor(authorId) {
        console.log(authorId);
        return this.get(`author/${authorId}`);
    }
    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }
    getModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }
}
module.exports = TrackAPI;
