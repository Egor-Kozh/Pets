import { gql } from "@apollo/client";

export const USER_EMAIL = gql`
  query userEmail {
    userEmail: userMe {
      email
    }
  }
`;
