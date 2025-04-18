import { gql } from "@apollo/client";

export const FAVOURITE_POSTS = gql`
  query favouritePosts {
    favouritePosts(input: {}) {
      data {
        author {
          firstName
          lastName
          avatarUrl
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
  }
`;
