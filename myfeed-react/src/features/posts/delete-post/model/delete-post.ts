import { gql } from "@apollo/client";

export const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    postDelete(input: { id: $postId }) {
      id
    }
  }
`;
