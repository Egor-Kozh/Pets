import { gql } from "@apollo/client";

export const POST_UNLIKE = gql`
  mutation UnlikePost($id: String!) {
    postUnlike(input: { id: $id }) {
      id
      isLiked
      __typename
    }
  }
`;

export const POST_UNLIKE_FRAGMENT = gql`
  fragment UnlikeFragment on PostModel {
    isLiked
  }
`;
