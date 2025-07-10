import styles from "./create-post.module.scss";
import { InputImage } from "@shared/components/uploader/input-image";
import { Button } from "@shared/components/buttons/button";
import { useNavigate } from "react-router-dom";
import { Routes } from "@shared/routes";
import { useCreatePost } from "../model/use-create-post";
import { Controller } from "react-hook-form";
import { InputBig } from "@shared/components/inputs/big-input/big-input";

export const CreatePostFeature = () => {
  const navigate = useNavigate();

  const onCompleted = () => {
    navigate(Routes.my_posts, { replace: true });
  };

  const onFiled = () => {
    console.log("failed!");
  };

  const { onSubmit, control, setImageFile, isLoading } = useCreatePost({
    onCompleted,
    onFiled,
  });

  return (
    <form className={styles["create-post__form"]} onSubmit={onSubmit}>
      <Controller
        name="title"
        control={control}
        rules={{ required: "Это поле обязательное!" }}
        render={({ field, fieldState: { error } }) => (
          <InputBig
            id="create_post_title"
            placeholder="Придумайте название для своего поста"
            title="Заголовок"
            wrong={!!error}
            {...field}
          >
            <span>{error?.message}</span>
          </InputBig>
        )}
      />
      <InputImage setImageFile={setImageFile} />
      <Controller
        name="description"
        control={control}
        rules={{ required: "Это поле обязательное!" }}
        render={({ field, fieldState: { error } }) => (
          <InputBig
            id="create_post_description"
            placeholder="Придумайте описание для своего поста"
            title="Описание"
            wrong={!!error}
            {...field}
          >
            <span>{error?.message}</span>
          </InputBig>
        )}
      />
      <div className={styles["create-post__buttons"]}>
        <Button typeView="secondary" size="small" type="button">
          Отменить
        </Button>
        <Button
          typeView="primary"
          size="small"
          type="submit"
          loading={isLoading}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};
