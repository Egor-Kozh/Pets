import { ChangeEvent, useState } from "react";
import styles from "./input.module.scss";
import SvgLoadFileComponent from "./icons/components/load-file";
import { Button } from "../buttons/button";

export const InputImage = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileImg = event.target.files ? event.target.files[0] : null;
    if (!fileImg) return;

    const imgURL = URL.createObjectURL(fileImg);
    setImage(imgURL);
  };

  return (
    <div className={styles.image}>
      <input type="file" accept="image/*" onChange={handleChange} />
      <div className={styles["image__content"]}>
        {image ? (
          <div className={styles["image__wrapper"]}>
            <img src={image} alt="preview"></img>
          </div>
        ) : (
          <div className={styles["image__info"]}>
            <SvgLoadFileComponent />
            <span>Перетащите фото сюда</span>
            <p>
              или
              <Button typeView="flat">
                выберите фото с вашего компьютера{" "}
              </Button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
