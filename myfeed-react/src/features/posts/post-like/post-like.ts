import { gql } from "@apollo/client";

export const POST_LIKE = gql`
  mutation postLike($id: String!) {
    postLike(input: { id: $id }) {
      id
    }
  }
`;
