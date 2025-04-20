import { gql } from "@apollo/client";

export const USER_ID = gql`
  query userId {
    userId: userMe {
      id
    }
  }
`;
