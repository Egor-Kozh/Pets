import { gql } from "@apollo/client";

export const MY_POSTS = gql`
  query myPosts {
    myPosts(input: {}) {
      data {
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
  }
`;
