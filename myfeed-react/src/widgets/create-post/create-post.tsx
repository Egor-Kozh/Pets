import { useForm } from "react-hook-form";
import styles from "./create-post.module.scss";
import { Input } from "../../shared/components/inputs/input/input";
import { InputImage } from "../../shared/components/inputs/uploader/input-image";
import { Button } from "../../shared/components/buttons/button";
import { useCreatePostMutation } from "../../shared/__generated__/hooks";
import { useState } from "react";
import { uploadToS3 } from "../../shared/hooks/imageToS3";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../shared/routes";

export const CreatePost = () => {
  const [imageFile, setImageFile] = useState<File | undefined>();

  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string; description: string }>();

  const [createPost] = useCreatePostMutation({
    onCompleted: () => {
      navigate(Routes.my_posts, { replace: true });
    },
  });

  const postTitle = watch("title");
  const postDescription = watch("description");

  const onClick = async () => {
    if (!imageFile) return;

    const imageUrl = await uploadToS3(imageFile);
    console.log(imageUrl, "ссылка на фото");
    console.log(postTitle);
    console.log(postDescription);

    createPost({
      variables: {
        title: postTitle,
        description: postDescription,
        mediaUrl: imageUrl,
      },
    }).catch((error) => {
      console.error("Ошибка при создании поста:", error.message);
      console.error("Детали ошибки:", error.graphQLErrors);
    });
  };

  return (
    <div className={styles["create-post"]}>
      <div className={styles["create-post__inner"]}>
        <div className={styles["create-post__header"]}>
          <span>Создание поста</span>
        </div>
        <form
          className={styles["create-post__form"]}
          onSubmit={handleSubmit(onClick)}
        >
          <Input
            id="create_post_title"
            placeholder="Придумайте название для своего поста"
            title="Заголовок"
            large
            register={register("title", {
              required: "Поле не должно быть пустым!",
            })}
            wrong={!!errors.title}
          >
            <span>{errors.title?.message}</span>
          </Input>
          <InputImage setImageFile={setImageFile} />
          <Input
            id="create_post_description"
            placeholder="Придумайте описание для своего поста"
            title="Описание"
            large
            register={register("description", {
              required: "Поле не должно быть пустым!",
            })}
            wrong={!!errors.description}
          >
            <span>{errors.description?.message}</span>
          </Input>
          <div className={styles["create-post__buttons"]}>
            <Button typeView="secondary" size="small">
              Отменить
            </Button>
            <Button typeView="primary" size="small" type="submit">
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
