import { gql } from "@apollo/client";

export const EDIT_USER = gql`
  mutation EditUser(
    $email: String!
    $firstName: String
    $lastName: String
    $middleName: String
    $birthDate: String
    $gender: GenderType
    $country: String
    $avatarUrl: String
    $phone: String
  ) {
    editUser: userEditProfile(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        middleName: $middleName
        birthDate: $birthDate
        gender: $gender
        country: $country
        avatarUrl: $avatarUrl
        phone: $phone
      }
    ) {
      user {
        id
        email
        firstName
        lastName
        middleName
        birthDate
        gender
        country
        avatarUrl
        phone
      }
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
