import styles from "./create-post.module.scss";
import { Input } from "@shared/components/input/input";
import { InputImage } from "@shared/components/uploader/input-image";
import { Button } from "@shared/components/buttons/button";
import { useNavigate } from "react-router-dom";
import { Routes } from "@shared/routes";
import { useCreatePost } from "../model/use-create-post";

export const CreatePost = () => {
  const navigate = useNavigate();

  const onCompleted = () => {
    navigate(Routes.my_posts, { replace: true });
  };

  const onFiled = () => {
    console.log("failed!");
  };

  const { onSubmit, register, errors, setImageFile, isLoading } = useCreatePost(
    {
      onCompleted,
      onFiled,
    }
  );

  return (
    <div className={styles["create-post"]}>
      <div className={styles["create-post__inner"]}>
        <div className={styles["create-post__header"]}>
          <span>Создание поста</span>
        </div>
        <form className={styles["create-post__form"]} onSubmit={onSubmit}>
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
      </div>
    </div>
  );
};
