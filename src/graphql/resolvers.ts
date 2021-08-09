const resolvers = {
  users: () => {
    return users;
  },
  createUser: {{ input }} => {
    return input;
  },
  categories: () => {
    return categories;
  },
  createCategory: {{ input }} => {
    return input;
  },
  collections: () => {
    return collections;
  },
  createCollection: {{ input }} => {
    return input;
  },
  commodities: () => {
    return commodities;
  },
  createCommodity: {{ input }} => {
    return input;
  },
};

export default resolvers;