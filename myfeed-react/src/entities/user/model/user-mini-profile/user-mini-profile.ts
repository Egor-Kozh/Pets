import { gql } from "@apollo/client";

export const USER_MINI_PROFILE = gql`
  query userMiniProfile {
    userMe {
      id
      avatarUrl
      firstName
      lastName
      __typename
    }
  }
`;
