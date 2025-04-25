import { gql } from "@apollo/client";

export const CREATE_USER_INFO = gql`
  mutation CreateUserInfo(
    $email: String!
    $firstName: String
    $lastName: String
    $middleName: String
  ) {
    newUserInfo: userEditProfile(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        middleName: $middleName
      }
    ) {
      problem {
        ... on EmailAlreadyUsedProblem {
          message
        }
        ... on PhoneAlreadyUsedProblem {
          message
        }
      }
    }
  }
`;
