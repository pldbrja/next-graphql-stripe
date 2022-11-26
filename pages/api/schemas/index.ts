import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    _id: ID
    email: {
      type: String,
    }
    password: String
    type: String!
    avatar: String

  }

  type Product {
    _id: ID
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Review {
    _id: ID
    review_author: String!
    review_body: Text
    rating: Int
    createdAt: String
  }

  type Checkout {
    session: ID
  }

  type Query {
    products: [Product]
    product(_id: ID): Product
    order(_id: ID): Order
    checkout(products: [ID]!): Checkout
    reviews: [Review]
  }
`