import { gql } from "@apollo/client";

export const USER_PROFILE = gql`
  query userProfile {
    userMe {
      avatarUrl
      firstName
      lastName
      middleName
      email
      gender
      id
      birthDate
      country
      phone
    }
  }
`;
