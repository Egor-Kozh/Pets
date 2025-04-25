import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser: userSignIn(input: { email: $email, password: $password }) {
      token
      problem {
        message
      }
    }
  }
`;
