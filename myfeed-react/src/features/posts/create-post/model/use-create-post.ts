import {
  MyPostsQuery,
  useCreatePostMutation,
} from "@shared/__generated__/hooks";
import { useForm } from "react-hook-form";
import { CreatePost } from "./types";
import { useState } from "react";
import { uploadToS3 } from "@shared/hooks/imageToS3/imageToS3";
import { MY_POSTS } from "@entities/posts/model/get-my-posts/my-posts";
import { TypeFiles } from "@shared/hooks/imageToS3/model/types";

interface Args {
  onCompleted: () => void;
  onFiled: () => void;
}

export const useCreatePost = ({ onCompleted, onFiled }: Args) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePost>();

  const [imageFile, setImageFile] = useState<File | undefined>();

  const [createPost, { loading, error }] = useCreatePostMutation({
    update(cache, { data: newPost }) {
      const posts = cache.readQuery<MyPostsQuery>({ query: MY_POSTS });

      cache.writeQuery({
        query: MY_POSTS,
        data: {
          myPosts: [newPost?.postCreate, ...(posts?.myPosts.data || [])],
        },
      });
    },
  });

  const onSubmit = handleSubmit(async (values: CreatePost) => {
    if (!imageFile) return;

    const imageUrl = await uploadToS3({
      fileImage: imageFile,
      typeImage: TypeFiles.posts,
    });

    try {
      await createPost({
        variables: {
          title: values.title,
          description: values.description,
          mediaUrl: imageUrl,
        },
      });

      onCompleted?.();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      onFiled?.();
    }
  });

  return {
    onSubmit,
    control,
    setImageFile,
    errors,
    isLoading: loading,
    isError: error,
  };
};
