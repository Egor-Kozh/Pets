import { gql } from "@apollo/client";

export const POST_BY_ID = gql`
  query postById($id: String!) {
    post(input: { id: $id }) {
      author {
        firstName
        lastName
        avatarUrl
        id
      }
      createdAt
      description
      likesCount
      isLiked
      title
      mediaUrl
      id
    }
  }
`;
