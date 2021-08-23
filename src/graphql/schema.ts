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
    account: AccountType
    profile: String
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
    account: AccountType
    profile: String
    date: String
  }
`;

const customerType = `
  type Customer {
    cart: [String]
    purchased: [String]
    saved: [String]
    Viewed: [String]
  }

  input CustomerInput {
    cart: [String]
    purchased: [String]
    saved: [String]
    Viewed: [String]
  }
`;

const adminType = `
  type Admin {
    added: [String]
  }

  input AdminInput {
    added: [String]
  }
`;

const locationType = `
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
`;

const accountEnum = `
  enum AccountType {
    CUSTOMER
    ADMIN
  }
`;

const commodityType = `
  type Commodity {
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
    author: String!
    date: String
  }

  type CommodityInput {
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
    author: String!
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
    author: String
    date: String
  }

  input MealboxInput  {
    _id: ID!
    name: String!
    contents: [String]!
    price: Float!
    stock: Int
    pictures: [String]
    description: String!
    tags: [String]
    meal: [String]!
    author: String
    date: String
  }
`;

const categoryType = `
  type Category {
    _id: ID!
    name: String!
    description: String!
    date: String
  }

  input CategoryInput {
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

const mutation = `
type Mutation {
  createUser(input: UserInput): User
  createCategory(input: CategoryInput): Category
  createMealbox(input: MealboxInput): Mealbox
  createCommodity(input: CommodityInput): Commodity
}
`;

const schema = buildSchema(`
  ${userType}
  ${customerType}
  ${adminType}
  ${categoryType}
  ${commodityType}
  ${mealboxType}
  ${query}
  ${accountEnum}
  ${locationType}
  ${mutation}

  union Profile = Customer | Admin
  union ProfileInput = CustomerInput | AdminInput
`);

export default schema;
