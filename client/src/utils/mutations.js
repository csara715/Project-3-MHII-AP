import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MEDICATION = gql`
  mutation addMedication(
    $medName: String!
    $strength: String
    $direction: String
    $prescriber: String
    $allergic: Boolean!
    $reaction: String
  ) {
    addMedication(
      medName: $medName
      strength: $strength
      direction: $direction
      prescriber: $prescriber
      allergic: $allergic
      reaction: $reaction
    ) {
      _id
      medName
      strength
      direction
      prescriber
      allergic
      reaction
      createdAt
    }
  }
`;

export const REMOVE_MEDICATION = gql`
  mutation removeMedication($_id: String!) {
    removeMedication(_id: $_id) {
      medication {
        _id
      }
    }
  }
`;
