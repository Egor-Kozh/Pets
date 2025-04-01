import { useForm } from "react-hook-form";
import "../app/styles/global.scss";
import { Button } from "../shared/components/buttons/button";
import { Input } from "../shared/components/input/input";
import { RadioButton } from "../shared/components/radio-buttons/radio-button";
import { Tab } from "../shared/components/tab/tab";
import { Toggle } from "../shared/components/toggle/toggle";
import { MiniProfile } from "../widgets/dropdowns/mini-profile/mini-profile";
import { SortPosts } from "../widgets/dropdowns/sort-posts/sort-posts";
import { Header } from "../widgets/header/header";
import { Post } from "../widgets/post/post";
import { MiniProfilePost } from "../widgets/dropdowns/mini-profile/mini-profile-post";
import { InputImage } from "../shared/components/input/input-image";

export const UiKit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<{ name: string; password: string }>();

  const onSubmit = () => {
    console.log(watch("name"));
  };

  return (
    <>
      <div id="modal"></div>
      <Header />
      <p>Hello world!</p>

      <Button typeView="flat">читать дальше</Button>
      <Button size="small" typeView="primary">
        Текст
      </Button>
      <Button size="small" typeView="primary" disabled>
        Текст
      </Button>
      <Button size="small" typeView="primary" loading></Button>
      <Button size="large" typeView="primary">
        Текст
      </Button>
      <Button size="large" typeView="primary" disabled>
        Текст
      </Button>
      <Button size="large" typeView="primary" loading></Button>
      <Button size="small" typeView="secondary">
        Текст
      </Button>
      <Button size="small" typeView="secondary" disabled>
        Текст
      </Button>
      <Button size="small" typeView="secondary" loading></Button>

      <RadioButton name="rad" id="1" value="text1" />
      <RadioButton name="rad" id="2" value="text2" />
      <RadioButton name="rad dis" id="4" value="text4" />
      <RadioButton name="rad dis" id="3" value="text3" disabled checked />

      <Toggle id="5" />
      <Toggle id="6" />
      <Toggle id="7" disabled />

      <Tab type="auth" />
      <Tab type="registr" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="8"
          placeholder="Placeholder"
          title="input"
          register={register("name", {
            required: "required",
          })}
          wrong={errors.name ? true : false}
        >
          {errors.name && <span>{errors.name.message}</span>}
        </Input>

        <Input
          id="20"
          placeholder="Placeholder"
          title="input"
          type="password"
          register={register("password", {
            required: "required",
          })}
          wrong={errors.password ? true : false}
        >
          {errors.password && <span>{errors.password.message}</span>}
        </Input>
        <Button size="small" typeView="primary" type="submit">
          Отправить
        </Button>
      </form>

      <Input id="9" type="password" title="input eye" />
      <Input id="10" type="password" title="input eye/slash" />
      <Input id="11" type="date" title="calender" />
      <Input id="112" title="large" large />
      <InputImage />

      <MiniProfile userFirstName="Мария" userLastName="Иванова" />
      <MiniProfilePost
        userFirstName="Мария"
        userLastName="Иванова"
        date="20.09.2022"
      />

      <SortPosts />
      <SortPosts sortBy="best" />

      <Post />
      <Post mine />
    </>
  );
};
