import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost(
    $description: String!
    $title: String!
    $mediaUrl: String!
  ) {
    postCreate(
      input: { description: $description, mediaUrl: $mediaUrl, title: $title }
    ) {
      id
    }
  }
`;
