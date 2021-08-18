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
  mealBoxes: () => {
    return mealBoxes;
  },
  createMealBox: {{ input }} => {
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