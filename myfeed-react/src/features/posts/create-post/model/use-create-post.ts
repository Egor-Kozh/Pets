import { useCreatePostMutation } from "@shared/__generated__/hooks";
import { useForm } from "react-hook-form";
import { CreatePost } from "./types";
import { useState } from "react";
import { uploadToS3 } from "@shared/hooks/imageToS3/imageToS3";
import { TypeFiles } from "@shared/hooks/imageToS3/model/types";

interface Args {
  onCompleted: () => void;
  onFiled: () => void;
}

export const useCreatePost = ({ onCompleted, onFiled }: Args) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreatePost>();

  const [imageFile, setImageFile] = useState<File | undefined>();

  const [titleError, setTitleError] = useState<string | undefined>();
  const [descriptionError, setDescriptionError] = useState<
    string | undefined
  >();

  const [createPost, { loading, error }] = useCreatePostMutation({
    onError: (error: unknown) => {
      interface GraphQLError {
        message: string;
        extensions?: {
          errors?: Array<{
            errors?: string[];
            field?: string;
          }>;
        };
      }

      const gqlError = error as { graphQLErrors?: GraphQLError[] };
      const validError = gqlError.graphQLErrors?.[0];

      validError?.extensions?.errors?.map((error) => {
        if (error.field === "title") {
          console.log(error.errors?.[0]);
          setTitleError(error?.errors?.[0]);
        }
        if (error.field === "description") {
          console.log(error.errors?.[0]);
          setDescriptionError(error.errors?.[0]);
        }
      });
    },
    update(cache, { data: newPost }) {
      cache.modify({
        fields: {
          posts(existingData, { toReference }) {
            if (newPost?.postCreate) {
              const cacheId = cache.identify(newPost?.postCreate);

              if (!cacheId) return;

              return [...existingData.data, toReference(cacheId, true)];
            }
          },
        },
      });

      cache.modify({
        fields: {
          myPosts(existingData, { toReference }) {
            if (newPost?.postCreate) {
              const cacheId = cache.identify(newPost?.postCreate);

              if (!cacheId) return;

              return [...existingData.data, toReference(cacheId, true)];
            }
          },
        },
      });
    },
    onCompleted: () => {
      onCompleted?.();
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
    isValid,
    isLoading: loading,
    isError: error,
    titleError: { message: titleError, setTitleError },
    descriptionError: { message: descriptionError, setDescriptionError },
  };
};
