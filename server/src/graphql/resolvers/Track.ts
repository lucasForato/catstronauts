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

  Mutation: {
    async incrementTrackViews(_: any, { id }: any, { dataSources }: any) {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented the number of views for ${id}`,
          track,
        };
      } catch (err: any) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        };
      }
    },
  },
};
