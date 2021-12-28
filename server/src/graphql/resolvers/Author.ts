export default {
  Query: {
    getAuthor(_: unknown, { id }: { id: any }, { dataSources }: any) {
      return dataSources.trackAPI.getAuthor(id);
    },
  },
};
