export default {
  Query: {
    getTracksForHome(_: unknown, __: unknown, { dataSources }: unknown) {
      return dataSources.trackAPI.getTracksForHome();
    },

    track(_: unknown, { id }: { id: number }, { dataSources }: unknown) {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: ({ authorId }: any, _: unknown, { dataSources }: any) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }: any, _: unknown, { dataSources }: any) => {
      return dataSources.trackAPI.getModules(id);
    },
  },
};
