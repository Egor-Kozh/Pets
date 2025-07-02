import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
  query allPosts($type: PostFilterType!, $limit: Int = 10, $afterCursor: String) {
    posts(input: { type: $type, limit: $limit, afterCursor: $afterCursor }) {
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
      pageInfo{
        afterCursor
      }
    }
  }
`;
