import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
  query allPosts($type: PostFilterType!, $limit: Int = 10) {
    posts(input: { type: $type, limit: $limit }) {
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
