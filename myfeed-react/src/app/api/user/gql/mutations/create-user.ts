import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    newUser: userSignUp(
      input: {
        email: $email
        password: $password
        passwordConfirm: $passwordConfirm
      }
    ) {
      token
    }
  }
`;
