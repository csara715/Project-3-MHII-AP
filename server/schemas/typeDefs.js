const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    medications: [Medication]
  }

  type Medication {
    _id: ID
    medName: String
    strength: String
    direction: String
    prescriber: String
    allergic: Boolean
    reaction: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    medications: [Medication]
    medication(medicationId: ID!): Medication
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMedication(
      medName: String
      strength: String
      direction: String
      prescriber: String
      allergic: Boolean
      reaction: String
    ): Medication
  }
`;

module.exports = typeDefs;
