/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query allPosts($type: PostFilterType!, $limit: Int = 10) {\n    posts(input: { type: $type, limit: $limit }) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n": typeof types.AllPostsDocument,
    "\n  query favouritePosts {\n    favouritePosts(input: {}) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n": typeof types.FavouritePostsDocument,
    "\n  query myPosts {\n    myPosts(input: {}) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n": typeof types.MyPostsDocument,
    "\n  query userEmail {\n    userEmail: userMe {\n      email\n    }\n  }\n": typeof types.UserEmailDocument,
    "\n  query userId {\n    userId: userMe {\n      id\n    }\n  }\n": typeof types.UserIdDocument,
    "\n  query userMiniProfile {\n    userMe {\n      avatarUrl\n      firstName\n      lastName\n    }\n  }\n": typeof types.UserMiniProfileDocument,
    "\n  query userProfile {\n    userMe {\n      avatarUrl\n      firstName\n      lastName\n      middleName\n      email\n      gender\n      id\n      birthDate\n      country\n      phone\n    }\n  }\n": typeof types.UserProfileDocument,
    "\n  mutation createPost(\n    $description: String!\n    $title: String!\n    $mediaUrl: String!\n  ) {\n    postCreate(\n      input: { description: $description, mediaUrl: $mediaUrl, title: $title }\n    ) {\n      id\n    }\n  }\n": typeof types.CreatePostDocument,
    "\n  mutation postLike($id: String!) {\n    postLike(input: { id: $id }) {\n      id\n    }\n  }\n": typeof types.PostLikeDocument,
    "\n  mutation postUnlike($id: String!) {\n    postUnlike(input: { id: $id }) {\n      id\n    }\n  }\n": typeof types.PostUnlikeDocument,
    "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser: userSignIn(input: { email: $email, password: $password }) {\n      token\n      problem {\n        message\n      }\n    }\n  }\n": typeof types.LoginUserDocument,
    "\n  mutation CreateUserInfo(\n    $email: String!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n  ) {\n    newUserInfo: userEditProfile(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        middleName: $middleName\n      }\n    ) {\n      problem {\n        ... on EmailAlreadyUsedProblem {\n          message\n        }\n        ... on PhoneAlreadyUsedProblem {\n          message\n        }\n      }\n    }\n  }\n": typeof types.CreateUserInfoDocument,
    "\n  mutation CreateUser(\n    $email: String!\n    $password: String!\n    $passwordConfirm: String!\n  ) {\n    newUser: userSignUp(\n      input: {\n        email: $email\n        password: $password\n        passwordConfirm: $passwordConfirm\n      }\n    ) {\n      token\n      problem {\n        message\n      }\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  mutation EditUser(\n    $email: String!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n    $birthDate: String\n    $gender: GenderType\n    $country: String\n    $avatarUrl: String\n    $phone: String\n  ) {\n    editUser: userEditProfile(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        middleName: $middleName\n        birthDate: $birthDate\n        gender: $gender\n        country: $country\n        avatarUrl: $avatarUrl\n        phone: $phone\n      }\n    ) {\n      problem {\n        ... on EmailAlreadyUsedProblem {\n          message\n        }\n        ... on PhoneAlreadyUsedProblem {\n          message\n        }\n      }\n    }\n  }\n": typeof types.EditUserDocument,
};
const documents: Documents = {
    "\n  query allPosts($type: PostFilterType!, $limit: Int = 10) {\n    posts(input: { type: $type, limit: $limit }) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n": types.AllPostsDocument,
    "\n  query favouritePosts {\n    favouritePosts(input: {}) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n": types.FavouritePostsDocument,
    "\n  query myPosts {\n    myPosts(input: {}) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n": types.MyPostsDocument,
    "\n  query userEmail {\n    userEmail: userMe {\n      email\n    }\n  }\n": types.UserEmailDocument,
    "\n  query userId {\n    userId: userMe {\n      id\n    }\n  }\n": types.UserIdDocument,
    "\n  query userMiniProfile {\n    userMe {\n      avatarUrl\n      firstName\n      lastName\n    }\n  }\n": types.UserMiniProfileDocument,
    "\n  query userProfile {\n    userMe {\n      avatarUrl\n      firstName\n      lastName\n      middleName\n      email\n      gender\n      id\n      birthDate\n      country\n      phone\n    }\n  }\n": types.UserProfileDocument,
    "\n  mutation createPost(\n    $description: String!\n    $title: String!\n    $mediaUrl: String!\n  ) {\n    postCreate(\n      input: { description: $description, mediaUrl: $mediaUrl, title: $title }\n    ) {\n      id\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation postLike($id: String!) {\n    postLike(input: { id: $id }) {\n      id\n    }\n  }\n": types.PostLikeDocument,
    "\n  mutation postUnlike($id: String!) {\n    postUnlike(input: { id: $id }) {\n      id\n    }\n  }\n": types.PostUnlikeDocument,
    "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser: userSignIn(input: { email: $email, password: $password }) {\n      token\n      problem {\n        message\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation CreateUserInfo(\n    $email: String!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n  ) {\n    newUserInfo: userEditProfile(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        middleName: $middleName\n      }\n    ) {\n      problem {\n        ... on EmailAlreadyUsedProblem {\n          message\n        }\n        ... on PhoneAlreadyUsedProblem {\n          message\n        }\n      }\n    }\n  }\n": types.CreateUserInfoDocument,
    "\n  mutation CreateUser(\n    $email: String!\n    $password: String!\n    $passwordConfirm: String!\n  ) {\n    newUser: userSignUp(\n      input: {\n        email: $email\n        password: $password\n        passwordConfirm: $passwordConfirm\n      }\n    ) {\n      token\n      problem {\n        message\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation EditUser(\n    $email: String!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n    $birthDate: String\n    $gender: GenderType\n    $country: String\n    $avatarUrl: String\n    $phone: String\n  ) {\n    editUser: userEditProfile(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        middleName: $middleName\n        birthDate: $birthDate\n        gender: $gender\n        country: $country\n        avatarUrl: $avatarUrl\n        phone: $phone\n      }\n    ) {\n      problem {\n        ... on EmailAlreadyUsedProblem {\n          message\n        }\n        ... on PhoneAlreadyUsedProblem {\n          message\n        }\n      }\n    }\n  }\n": types.EditUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allPosts($type: PostFilterType!, $limit: Int = 10) {\n    posts(input: { type: $type, limit: $limit }) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query allPosts($type: PostFilterType!, $limit: Int = 10) {\n    posts(input: { type: $type, limit: $limit }) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query favouritePosts {\n    favouritePosts(input: {}) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query favouritePosts {\n    favouritePosts(input: {}) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query myPosts {\n    myPosts(input: {}) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query myPosts {\n    myPosts(input: {}) {\n      data {\n        author {\n          firstName\n          lastName\n          avatarUrl\n          id\n        }\n        createdAt\n        description\n        likesCount\n        isLiked\n        title\n        mediaUrl\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userEmail {\n    userEmail: userMe {\n      email\n    }\n  }\n"): (typeof documents)["\n  query userEmail {\n    userEmail: userMe {\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userId {\n    userId: userMe {\n      id\n    }\n  }\n"): (typeof documents)["\n  query userId {\n    userId: userMe {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userMiniProfile {\n    userMe {\n      avatarUrl\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query userMiniProfile {\n    userMe {\n      avatarUrl\n      firstName\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userProfile {\n    userMe {\n      avatarUrl\n      firstName\n      lastName\n      middleName\n      email\n      gender\n      id\n      birthDate\n      country\n      phone\n    }\n  }\n"): (typeof documents)["\n  query userProfile {\n    userMe {\n      avatarUrl\n      firstName\n      lastName\n      middleName\n      email\n      gender\n      id\n      birthDate\n      country\n      phone\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPost(\n    $description: String!\n    $title: String!\n    $mediaUrl: String!\n  ) {\n    postCreate(\n      input: { description: $description, mediaUrl: $mediaUrl, title: $title }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createPost(\n    $description: String!\n    $title: String!\n    $mediaUrl: String!\n  ) {\n    postCreate(\n      input: { description: $description, mediaUrl: $mediaUrl, title: $title }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postLike($id: String!) {\n    postLike(input: { id: $id }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation postLike($id: String!) {\n    postLike(input: { id: $id }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation postUnlike($id: String!) {\n    postUnlike(input: { id: $id }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation postUnlike($id: String!) {\n    postUnlike(input: { id: $id }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser: userSignIn(input: { email: $email, password: $password }) {\n      token\n      problem {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser: userSignIn(input: { email: $email, password: $password }) {\n      token\n      problem {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUserInfo(\n    $email: String!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n  ) {\n    newUserInfo: userEditProfile(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        middleName: $middleName\n      }\n    ) {\n      problem {\n        ... on EmailAlreadyUsedProblem {\n          message\n        }\n        ... on PhoneAlreadyUsedProblem {\n          message\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserInfo(\n    $email: String!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n  ) {\n    newUserInfo: userEditProfile(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        middleName: $middleName\n      }\n    ) {\n      problem {\n        ... on EmailAlreadyUsedProblem {\n          message\n        }\n        ... on PhoneAlreadyUsedProblem {\n          message\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $email: String!\n    $password: String!\n    $passwordConfirm: String!\n  ) {\n    newUser: userSignUp(\n      input: {\n        email: $email\n        password: $password\n        passwordConfirm: $passwordConfirm\n      }\n    ) {\n      token\n      problem {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser(\n    $email: String!\n    $password: String!\n    $passwordConfirm: String!\n  ) {\n    newUser: userSignUp(\n      input: {\n        email: $email\n        password: $password\n        passwordConfirm: $passwordConfirm\n      }\n    ) {\n      token\n      problem {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditUser(\n    $email: String!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n    $birthDate: String\n    $gender: GenderType\n    $country: String\n    $avatarUrl: String\n    $phone: String\n  ) {\n    editUser: userEditProfile(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        middleName: $middleName\n        birthDate: $birthDate\n        gender: $gender\n        country: $country\n        avatarUrl: $avatarUrl\n        phone: $phone\n      }\n    ) {\n      problem {\n        ... on EmailAlreadyUsedProblem {\n          message\n        }\n        ... on PhoneAlreadyUsedProblem {\n          message\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EditUser(\n    $email: String!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n    $birthDate: String\n    $gender: GenderType\n    $country: String\n    $avatarUrl: String\n    $phone: String\n  ) {\n    editUser: userEditProfile(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        middleName: $middleName\n        birthDate: $birthDate\n        gender: $gender\n        country: $country\n        avatarUrl: $avatarUrl\n        phone: $phone\n      }\n    ) {\n      problem {\n        ... on EmailAlreadyUsedProblem {\n          message\n        }\n        ... on PhoneAlreadyUsedProblem {\n          message\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;