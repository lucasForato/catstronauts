export default {
  Query: {
    getAuthors() {
      const author = {
        id: 1,
        name: 'lucas',
      };
      return [author];
    },
    getAuthor() {
      const author = {
        id: 1,
        name: 'lucas',
      };
      return author;
    }
  },
};
