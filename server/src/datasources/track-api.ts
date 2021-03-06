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

  getAuthor(authorId: any) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId: any) {
    return this.get(`track/${trackId}`);
  }

  getModules(trackId: any) {
    return this.get(`track/${trackId}/modules`);
  }

  incrementTrackViews(trackId: any) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}
module.exports = TrackAPI;
