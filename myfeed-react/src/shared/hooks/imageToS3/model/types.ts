export interface Args {
  fileImage: File;
  typeImage: TypeFiles;
}

export enum TypeFiles {
  posts = "POSTS",
  avatar = "AVATARS",
}
