import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreatePostRequest = {
  description: Scalars['String']['input'];
  mediaUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type DeletePostResponse = {
  id: Scalars['String']['output'];
  ok: Scalars['Boolean']['output'];
};

export type EditProfileProblemUnion = EmailAlreadyUsedProblem | PhoneAlreadyUsedProblem;

export type EditProfileRequest = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** ex. 1996-09-23 */
  birthDate?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderType>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type EditProfileResponse = {
  problem?: Maybe<EditProfileProblemUnion>;
  user?: Maybe<UserModel>;
};

export type EmailAlreadyUsedProblem = {
  message: Scalars['String']['output'];
};

export type EmailOrPasswordIncorrectProblem = {
  message: Scalars['String']['output'];
};

export type FindFavouritePostsPaginationResponse = {
  data?: Maybe<Array<PostModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type FindFavouritePostsRequest = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FindMyPostsPaginationResponse = {
  data?: Maybe<Array<PostModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type FindMyPostsRequest = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FindPostsPaginationResponse = {
  data?: Maybe<Array<PostModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type FindPostsRequest = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  type: PostFilterType;
};

export enum GenderType {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Mutation = {
  postCreate: PostModel;
  postDelete: DeletePostResponse;
  postLike: PostModel;
  postUnlike: PostModel;
  userEditProfile: EditProfileResponse;
  userSignIn: SignInResponse;
  userSignUp: SignUpResponse;
};


export type MutationPostCreateArgs = {
  input: CreatePostRequest;
};


export type MutationPostDeleteArgs = {
  input: PostIdRequest;
};


export type MutationPostLikeArgs = {
  input: PostIdRequest;
};


export type MutationPostUnlikeArgs = {
  input: PostIdRequest;
};


export type MutationUserEditProfileArgs = {
  input: EditProfileRequest;
};


export type MutationUserSignInArgs = {
  input: SignInRequest;
};


export type MutationUserSignUpArgs = {
  input: SignUpRequest;
};

export type PageAfterCursorInfo = {
  afterCursor?: Maybe<Scalars['String']['output']>;
  count: Scalars['Float']['output'];
  perPage: Scalars['Float']['output'];
};

export type PhoneAlreadyUsedProblem = {
  message: Scalars['String']['output'];
};

export enum PostFilterType {
  New = 'NEW',
  Top = 'TOP'
}

export type PostIdRequest = {
  /** post id */
  id: Scalars['String']['input'];
};

export type PostModel = {
  author: UserModel;
  authorId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Float']['output'];
  mediaUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  favouritePosts: FindFavouritePostsPaginationResponse;
  myPosts: FindMyPostsPaginationResponse;
  post: PostModel;
  posts: FindPostsPaginationResponse;
  userMe: UserModel;
};


export type QueryFavouritePostsArgs = {
  input: FindFavouritePostsRequest;
};


export type QueryMyPostsArgs = {
  input: FindMyPostsRequest;
};


export type QueryPostArgs = {
  input: PostIdRequest;
};


export type QueryPostsArgs = {
  input: FindPostsRequest;
};

export type SignInRequest = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInResponse = {
  problem?: Maybe<EmailOrPasswordIncorrectProblem>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserModel>;
};

export type SignUpRequest = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirm: Scalars['String']['input'];
};

export type SignUpResponse = {
  problem?: Maybe<EmailAlreadyUsedProblem>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserModel>;
};

export type UserModel = {
  avatarUrl?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type AllPostsQueryVariables = Exact<{
  type: PostFilterType;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AllPostsQuery = { posts: { data?: Array<{ createdAt: string, description: string, likesCount: number, isLiked: boolean, title: string, mediaUrl: string, id: string, author: { firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, id: string } }> | null } };

export type FavouritePostsQueryVariables = Exact<{ [key: string]: never; }>;


export type FavouritePostsQuery = { favouritePosts: { data?: Array<{ createdAt: string, description: string, likesCount: number, isLiked: boolean, title: string, mediaUrl: string, id: string, author: { firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, id: string } }> | null } };

export type MyPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyPostsQuery = { myPosts: { data?: Array<{ createdAt: string, description: string, likesCount: number, isLiked: boolean, title: string, mediaUrl: string, id: string, author: { firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, id: string } }> | null } };

export type UserEmailQueryVariables = Exact<{ [key: string]: never; }>;


export type UserEmailQuery = { userEmail: { email: string } };

export type UserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type UserIdQuery = { userId: { id: string } };

export type UserMiniProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserMiniProfileQuery = { userMe: { __typename: 'UserModel', id: string, avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } };

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { userMe: { avatarUrl?: string | null, firstName?: string | null, lastName?: string | null, middleName?: string | null, email: string, gender?: string | null, id: string, birthDate?: string | null, country?: string | null, phone?: string | null } };

export type CreatePostMutationVariables = Exact<{
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  mediaUrl: Scalars['String']['input'];
}>;


export type CreatePostMutation = { postCreate: { id: string } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type DeletePostMutation = { postDelete: { id: string } };

export type PostLikeMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PostLikeMutation = { postLike: { id: string } };

export type PostUnlikeMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PostUnlikeMutation = { postUnlike: { id: string } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { loginUser: { token?: string | null, problem?: { message: string } | null } };

export type CreateUserInfoMutationVariables = Exact<{
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserInfoMutation = { newUserInfo: { problem?: { message: string } | { message: string } | null } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirm: Scalars['String']['input'];
}>;


export type CreateUserMutation = { newUser: { token?: string | null, problem?: { message: string } | null } };

export type EditUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderType>;
  country?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditUserMutation = { editUser: { problem?: { message: string } | { message: string } | null } };


export const AllPostsDocument = gql`
    query allPosts($type: PostFilterType!, $limit: Int = 10) {
  posts(input: {type: $type, limit: $limit}) {
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

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *      type: // value for 'type'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables> & ({ variables: AllPostsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export function useAllPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsSuspenseQueryHookResult = ReturnType<typeof useAllPostsSuspenseQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const FavouritePostsDocument = gql`
    query favouritePosts {
  favouritePosts(input: {}) {
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

/**
 * __useFavouritePostsQuery__
 *
 * To run a query within a React component, call `useFavouritePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavouritePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavouritePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFavouritePostsQuery(baseOptions?: Apollo.QueryHookOptions<FavouritePostsQuery, FavouritePostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FavouritePostsQuery, FavouritePostsQueryVariables>(FavouritePostsDocument, options);
      }
export function useFavouritePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavouritePostsQuery, FavouritePostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FavouritePostsQuery, FavouritePostsQueryVariables>(FavouritePostsDocument, options);
        }
export function useFavouritePostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FavouritePostsQuery, FavouritePostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FavouritePostsQuery, FavouritePostsQueryVariables>(FavouritePostsDocument, options);
        }
export type FavouritePostsQueryHookResult = ReturnType<typeof useFavouritePostsQuery>;
export type FavouritePostsLazyQueryHookResult = ReturnType<typeof useFavouritePostsLazyQuery>;
export type FavouritePostsSuspenseQueryHookResult = ReturnType<typeof useFavouritePostsSuspenseQuery>;
export type FavouritePostsQueryResult = Apollo.QueryResult<FavouritePostsQuery, FavouritePostsQueryVariables>;
export const MyPostsDocument = gql`
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

/**
 * __useMyPostsQuery__
 *
 * To run a query within a React component, call `useMyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyPostsQuery(baseOptions?: Apollo.QueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, options);
      }
export function useMyPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, options);
        }
export function useMyPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, options);
        }
export type MyPostsQueryHookResult = ReturnType<typeof useMyPostsQuery>;
export type MyPostsLazyQueryHookResult = ReturnType<typeof useMyPostsLazyQuery>;
export type MyPostsSuspenseQueryHookResult = ReturnType<typeof useMyPostsSuspenseQuery>;
export type MyPostsQueryResult = Apollo.QueryResult<MyPostsQuery, MyPostsQueryVariables>;
export const UserEmailDocument = gql`
    query userEmail {
  userEmail: userMe {
    email
  }
}
    `;

/**
 * __useUserEmailQuery__
 *
 * To run a query within a React component, call `useUserEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserEmailQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserEmailQuery(baseOptions?: Apollo.QueryHookOptions<UserEmailQuery, UserEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserEmailQuery, UserEmailQueryVariables>(UserEmailDocument, options);
      }
export function useUserEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserEmailQuery, UserEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserEmailQuery, UserEmailQueryVariables>(UserEmailDocument, options);
        }
export function useUserEmailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserEmailQuery, UserEmailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserEmailQuery, UserEmailQueryVariables>(UserEmailDocument, options);
        }
export type UserEmailQueryHookResult = ReturnType<typeof useUserEmailQuery>;
export type UserEmailLazyQueryHookResult = ReturnType<typeof useUserEmailLazyQuery>;
export type UserEmailSuspenseQueryHookResult = ReturnType<typeof useUserEmailSuspenseQuery>;
export type UserEmailQueryResult = Apollo.QueryResult<UserEmailQuery, UserEmailQueryVariables>;
export const UserIdDocument = gql`
    query userId {
  userId: userMe {
    id
  }
}
    `;

/**
 * __useUserIdQuery__
 *
 * To run a query within a React component, call `useUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserIdQuery(baseOptions?: Apollo.QueryHookOptions<UserIdQuery, UserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserIdQuery, UserIdQueryVariables>(UserIdDocument, options);
      }
export function useUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserIdQuery, UserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserIdQuery, UserIdQueryVariables>(UserIdDocument, options);
        }
export function useUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserIdQuery, UserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserIdQuery, UserIdQueryVariables>(UserIdDocument, options);
        }
export type UserIdQueryHookResult = ReturnType<typeof useUserIdQuery>;
export type UserIdLazyQueryHookResult = ReturnType<typeof useUserIdLazyQuery>;
export type UserIdSuspenseQueryHookResult = ReturnType<typeof useUserIdSuspenseQuery>;
export type UserIdQueryResult = Apollo.QueryResult<UserIdQuery, UserIdQueryVariables>;
export const UserMiniProfileDocument = gql`
    query userMiniProfile {
  userMe {
    id
    avatarUrl
    firstName
    lastName
    __typename
  }
}
    `;

/**
 * __useUserMiniProfileQuery__
 *
 * To run a query within a React component, call `useUserMiniProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMiniProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMiniProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserMiniProfileQuery(baseOptions?: Apollo.QueryHookOptions<UserMiniProfileQuery, UserMiniProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserMiniProfileQuery, UserMiniProfileQueryVariables>(UserMiniProfileDocument, options);
      }
export function useUserMiniProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserMiniProfileQuery, UserMiniProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserMiniProfileQuery, UserMiniProfileQueryVariables>(UserMiniProfileDocument, options);
        }
export function useUserMiniProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserMiniProfileQuery, UserMiniProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserMiniProfileQuery, UserMiniProfileQueryVariables>(UserMiniProfileDocument, options);
        }
export type UserMiniProfileQueryHookResult = ReturnType<typeof useUserMiniProfileQuery>;
export type UserMiniProfileLazyQueryHookResult = ReturnType<typeof useUserMiniProfileLazyQuery>;
export type UserMiniProfileSuspenseQueryHookResult = ReturnType<typeof useUserMiniProfileSuspenseQuery>;
export type UserMiniProfileQueryResult = Apollo.QueryResult<UserMiniProfileQuery, UserMiniProfileQueryVariables>;
export const UserProfileDocument = gql`
    query userProfile {
  userMe {
    avatarUrl
    firstName
    lastName
    middleName
    email
    gender
    id
    birthDate
    country
    phone
  }
}
    `;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export function useUserProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileSuspenseQueryHookResult = ReturnType<typeof useUserProfileSuspenseQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const CreatePostDocument = gql`
    mutation createPost($description: String!, $title: String!, $mediaUrl: String!) {
  postCreate(
    input: {description: $description, mediaUrl: $mediaUrl, title: $title}
  ) {
    id
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      description: // value for 'description'
 *      title: // value for 'title'
 *      mediaUrl: // value for 'mediaUrl'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($postId: String!) {
  postDelete(input: {id: $postId}) {
    id
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const PostLikeDocument = gql`
    mutation postLike($id: String!) {
  postLike(input: {id: $id}) {
    id
  }
}
    `;
export type PostLikeMutationFn = Apollo.MutationFunction<PostLikeMutation, PostLikeMutationVariables>;

/**
 * __usePostLikeMutation__
 *
 * To run a mutation, you first call `usePostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postLikeMutation, { data, loading, error }] = usePostLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostLikeMutation(baseOptions?: Apollo.MutationHookOptions<PostLikeMutation, PostLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostLikeMutation, PostLikeMutationVariables>(PostLikeDocument, options);
      }
export type PostLikeMutationHookResult = ReturnType<typeof usePostLikeMutation>;
export type PostLikeMutationResult = Apollo.MutationResult<PostLikeMutation>;
export type PostLikeMutationOptions = Apollo.BaseMutationOptions<PostLikeMutation, PostLikeMutationVariables>;
export const PostUnlikeDocument = gql`
    mutation postUnlike($id: String!) {
  postUnlike(input: {id: $id}) {
    id
  }
}
    `;
export type PostUnlikeMutationFn = Apollo.MutationFunction<PostUnlikeMutation, PostUnlikeMutationVariables>;

/**
 * __usePostUnlikeMutation__
 *
 * To run a mutation, you first call `usePostUnlikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUnlikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUnlikeMutation, { data, loading, error }] = usePostUnlikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostUnlikeMutation(baseOptions?: Apollo.MutationHookOptions<PostUnlikeMutation, PostUnlikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostUnlikeMutation, PostUnlikeMutationVariables>(PostUnlikeDocument, options);
      }
export type PostUnlikeMutationHookResult = ReturnType<typeof usePostUnlikeMutation>;
export type PostUnlikeMutationResult = Apollo.MutationResult<PostUnlikeMutation>;
export type PostUnlikeMutationOptions = Apollo.BaseMutationOptions<PostUnlikeMutation, PostUnlikeMutationVariables>;
export const LoginUserDocument = gql`
    mutation loginUser($email: String!, $password: String!) {
  loginUser: userSignIn(input: {email: $email, password: $password}) {
    token
    problem {
      message
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const CreateUserInfoDocument = gql`
    mutation CreateUserInfo($email: String!, $firstName: String, $lastName: String, $middleName: String) {
  newUserInfo: userEditProfile(
    input: {email: $email, firstName: $firstName, lastName: $lastName, middleName: $middleName}
  ) {
    problem {
      ... on EmailAlreadyUsedProblem {
        message
      }
      ... on PhoneAlreadyUsedProblem {
        message
      }
    }
  }
}
    `;
export type CreateUserInfoMutationFn = Apollo.MutationFunction<CreateUserInfoMutation, CreateUserInfoMutationVariables>;

/**
 * __useCreateUserInfoMutation__
 *
 * To run a mutation, you first call `useCreateUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserInfoMutation, { data, loading, error }] = useCreateUserInfoMutation({
 *   variables: {
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      middleName: // value for 'middleName'
 *   },
 * });
 */
export function useCreateUserInfoMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserInfoMutation, CreateUserInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserInfoMutation, CreateUserInfoMutationVariables>(CreateUserInfoDocument, options);
      }
export type CreateUserInfoMutationHookResult = ReturnType<typeof useCreateUserInfoMutation>;
export type CreateUserInfoMutationResult = Apollo.MutationResult<CreateUserInfoMutation>;
export type CreateUserInfoMutationOptions = Apollo.BaseMutationOptions<CreateUserInfoMutation, CreateUserInfoMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $password: String!, $passwordConfirm: String!) {
  newUser: userSignUp(
    input: {email: $email, password: $password, passwordConfirm: $passwordConfirm}
  ) {
    token
    problem {
      message
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      passwordConfirm: // value for 'passwordConfirm'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const EditUserDocument = gql`
    mutation EditUser($email: String!, $firstName: String, $lastName: String, $middleName: String, $birthDate: String, $gender: GenderType, $country: String, $avatarUrl: String, $phone: String) {
  editUser: userEditProfile(
    input: {email: $email, firstName: $firstName, lastName: $lastName, middleName: $middleName, birthDate: $birthDate, gender: $gender, country: $country, avatarUrl: $avatarUrl, phone: $phone}
  ) {
    problem {
      ... on EmailAlreadyUsedProblem {
        message
      }
      ... on PhoneAlreadyUsedProblem {
        message
      }
    }
  }
}
    `;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      middleName: // value for 'middleName'
 *      birthDate: // value for 'birthDate'
 *      gender: // value for 'gender'
 *      country: // value for 'country'
 *      avatarUrl: // value for 'avatarUrl'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;