import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    mobile: String!
    picture: String
    cart: [String]
    shopped: [String]
    date: String
  }

  type Category {
    _id: ID!
    name: STring!
    description: STring!
    date: STring
  }

  type Collection {
    _id: ID!
    name: STring!
    contents: [STring]!
    price: Float!
    measure: STring
    stock: Int
    pictures: [STring]
    description: STring!
    type: STring!
    date: STring
  }

  type Commpdity {
    _id: ID!
    name: STring!
    variety: [String]
    price: Float!
    measure: STring
    stock: Int
    pictures: [STring]
    categories: [STring]!
    description: STring!!
    type: STring!
    date: STring
  }

  type Query {
    users: [User!]!
    categories: [Categories!]!
    collections: [Collections!]!
    commodities: [Commodities!]!
  }

  input UserInput {
    _id: ID!
    name: String!
    email: String!
    password: String
    mobile: String!
    picture: String
    cart: [String]
    shopped: [String]
    date: String
  }

  input CategoryInput {
    _id: ID!
    name: STring!
    description: STring!
    date: STring
  }

  input CollectionInput  {
    _id: ID!
    name: STring!
    contents: [STring]!
    price: Float!
    measure: STring
    stock: Int
    pictures: [STring]
    description: STring!
    type: STring!
    date: STring
  }

  type CommpdityInput {
    _id: ID!
    name: STring!
    variety: [String]
    price: Float!
    measure: STring
    stock: Int
    pictures: [STring]
    categories: [STring]!
    description: STring!!
    type: STring!
    date: STring
  }

  type Mutation {
    createUser(input: UserInput): User
    createCategory(input: CategoryInput): Category
    createCollection(input: CollectionInput): Collection
    createCommodity(input: CommodityInput): Commodity
  }
`);

export default schema;
