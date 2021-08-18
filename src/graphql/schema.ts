import { buildSchema } from 'graphql';

const userType = `
  type User {
    _id: ID!
    name: String!
    mobile: String!
    email: String!
    password: String
    picture: String
    location: Location
    account: Account
    date: String
  }

  input UserInput {
    _id: ID!
    name: String!
    mobile: String!
    email: String!
    password: String
    picture: String
    location: LocationInput
    account: Account
    date: String
  }
`;

const profileType = `
  type Profile {
    cart: [String]
    purchased: [String]
    saved: [String]
    Viewed: [String]
  }
`;

const commodityType = `
  type Commpdity {
    _id: ID!
    name: String!
    variety: String
    price: Float!
    measure: String!
    stock: Int
    pictures: [String]
    description: String
    categories: [Category]!
    tags: [String]
    date: String
  }
`;

const mealboxType = `
  type Mealbox {
    _id: ID!
    name: String!
    contents: [String]!
    price: Float!
    stock: Int
    pictures: [String]
    description: String!
    tags: [String]
    meal: [String]!
    date: String
  }
`;

const CategoryType = `
  type Category {
    _id: ID!
    name: String!
    description: String!
    date: String
  }
`;

const query = `
  type Query {
    users: [User!]!
    profiles: [Profile!]!
    categories: [Categories!]!
    commodities: [Commodities!]!
    Mealboxes: [Mealboxes!]!
  }
`;

const schema = buildSchema(`
  ${userType}
  ${profileType}
  ${CategoryType}
  ${commodityType}
  ${mealboxType}
  ${query}

  enum Account {
    CUSTOMER
    ADMIN
  }

  type Location {
    country: String
    region: String
    town: String
    gps: String
  }

  input LocationInput {
    country: String
    region: String
    town: String
    gps: String
  }

  input CategoryInput {
    _id: ID!
    name: String!
    description: String!
    date: String
  }

  input MealboxInput  {
    _id: ID!
    name: String!
    contents: [String]!
    price: Float!
    measure: String
    stock: Int
    pictures: [String]
    description: String!
    type: String!
    date: String
  }

  type CommpdityInput {
    _id: ID!
    name: String!
    variety: [String]
    price: Float!
    measure: String
    stock: Int
    pictures: [String]
    categories: [String]!
    description: String!!
    type: String!
    date: String
  }

  type Mutation {
    createUser(input: UserInput): User
    createCategory(input: CategoryInput): Category
    createMealbox(input: MealboxInput): Mealbox
    createCommodity(input: CommodityInput): Commodity
  }
`);

export default schema;
