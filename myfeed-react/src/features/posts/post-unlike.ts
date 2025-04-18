import { gql } from "@apollo/client";

export const POST_UNLIKE = gql`
  mutation postUnlike($id: String!) {
    postUnlike(input: { id: $id }) {
      id
    }
  }
`;
