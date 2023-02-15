import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      medications {
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
  }
`;

export const QUERY_MEDICATIONS = gql`
  query getMedications {
    medications {
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

export const QUERY_MEDICATION = gql`
  query getMedication($medicationId: ID!) {
    medication(medicationId: $medicationId) {
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
