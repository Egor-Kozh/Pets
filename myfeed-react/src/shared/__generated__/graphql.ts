/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  __typename?: 'DeletePostResponse';
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
  __typename?: 'EditProfileResponse';
  problem?: Maybe<EditProfileProblemUnion>;
  user?: Maybe<UserModel>;
};

export type EmailAlreadyUsedProblem = {
  __typename?: 'EmailAlreadyUsedProblem';
  message: Scalars['String']['output'];
};

export type EmailOrPasswordIncorrectProblem = {
  __typename?: 'EmailOrPasswordIncorrectProblem';
  message: Scalars['String']['output'];
};

export type FindFavouritePostsPaginationResponse = {
  __typename?: 'FindFavouritePostsPaginationResponse';
  data?: Maybe<Array<PostModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type FindFavouritePostsRequest = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FindMyPostsPaginationResponse = {
  __typename?: 'FindMyPostsPaginationResponse';
  data?: Maybe<Array<PostModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type FindMyPostsRequest = {
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FindPostsPaginationResponse = {
  __typename?: 'FindPostsPaginationResponse';
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
  __typename?: 'Mutation';
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
  __typename?: 'PageAfterCursorInfo';
  afterCursor?: Maybe<Scalars['String']['output']>;
  count: Scalars['Float']['output'];
  perPage: Scalars['Float']['output'];
};

export type PhoneAlreadyUsedProblem = {
  __typename?: 'PhoneAlreadyUsedProblem';
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
  __typename?: 'PostModel';
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
  __typename?: 'Query';
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
  __typename?: 'SignInResponse';
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
  __typename?: 'SignUpResponse';
  problem?: Maybe<EmailAlreadyUsedProblem>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserModel>;
};

export type UserModel = {
  __typename?: 'UserModel';
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


export type AllPostsQuery = { __typename?: 'Query', posts: { __typename?: 'FindPostsPaginationResponse', data?: Array<{ __typename?: 'PostModel', createdAt: string, description: string, likesCount: number, isLiked: boolean, title: string, mediaUrl: string, id: string, author: { __typename?: 'UserModel', firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, id: string } }> | null } };

export type FavouritePostsQueryVariables = Exact<{ [key: string]: never; }>;


export type FavouritePostsQuery = { __typename?: 'Query', favouritePosts: { __typename?: 'FindFavouritePostsPaginationResponse', data?: Array<{ __typename?: 'PostModel', createdAt: string, description: string, likesCount: number, isLiked: boolean, title: string, mediaUrl: string, id: string, author: { __typename?: 'UserModel', firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, id: string } }> | null } };

export type MyPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyPostsQuery = { __typename?: 'Query', myPosts: { __typename?: 'FindMyPostsPaginationResponse', data?: Array<{ __typename?: 'PostModel', createdAt: string, description: string, likesCount: number, isLiked: boolean, title: string, mediaUrl: string, id: string, author: { __typename?: 'UserModel', firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, id: string } }> | null } };

export type UserEmailQueryVariables = Exact<{ [key: string]: never; }>;


export type UserEmailQuery = { __typename?: 'Query', userEmail: { __typename?: 'UserModel', email: string } };

export type UserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type UserIdQuery = { __typename?: 'Query', userId: { __typename?: 'UserModel', id: string } };

export type UserMiniProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserMiniProfileQuery = { __typename?: 'Query', userMe: { __typename?: 'UserModel', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } };

export type CreatePostMutationVariables = Exact<{
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  mediaUrl: Scalars['String']['input'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', postCreate: { __typename?: 'PostModel', id: string } };

export type PostLikeMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PostLikeMutation = { __typename?: 'Mutation', postLike: { __typename?: 'PostModel', id: string } };

export type PostUnlikeMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PostUnlikeMutation = { __typename?: 'Mutation', postUnlike: { __typename?: 'PostModel', id: string } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'SignInResponse', token?: string | null, problem?: { __typename?: 'EmailOrPasswordIncorrectProblem', message: string } | null } };

export type CreateUserInfoMutationVariables = Exact<{
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserInfoMutation = { __typename?: 'Mutation', newUserInfo: { __typename?: 'EditProfileResponse', problem?: { __typename?: 'EmailAlreadyUsedProblem', message: string } | { __typename?: 'PhoneAlreadyUsedProblem', message: string } | null } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirm: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', newUser: { __typename?: 'SignUpResponse', token?: string | null, problem?: { __typename?: 'EmailAlreadyUsedProblem', message: string } | null } };


export const AllPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostFilterType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"mediaUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AllPostsQuery, AllPostsQueryVariables>;
export const FavouritePostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"favouritePosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favouritePosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"mediaUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FavouritePostsQuery, FavouritePostsQueryVariables>;
export const MyPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"mediaUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<MyPostsQuery, MyPostsQueryVariables>;
export const UserEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userEmail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userEmail"},"name":{"kind":"Name","value":"userMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UserEmailQuery, UserEmailQueryVariables>;
export const UserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userId"},"name":{"kind":"Name","value":"userMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UserIdQuery, UserIdQueryVariables>;
export const UserMiniProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userMiniProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<UserMiniProfileQuery, UserMiniProfileQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mediaUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mediaUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mediaUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const PostLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PostLikeMutation, PostLikeMutationVariables>;
export const PostUnlikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postUnlike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postUnlike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PostUnlikeMutation, PostUnlikeMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"loginUser"},"name":{"kind":"Name","value":"userSignIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"problem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const CreateUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"middleName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"newUserInfo"},"name":{"kind":"Name","value":"userEditProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"middleName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"middleName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"problem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAlreadyUsedProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PhoneAlreadyUsedProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserInfoMutation, CreateUserInfoMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"passwordConfirm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"newUser"},"name":{"kind":"Name","value":"userSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"passwordConfirm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"passwordConfirm"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"problem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;