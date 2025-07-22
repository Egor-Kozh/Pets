import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./input-image.module.scss";
import SvgLoadFileComponent from "@shared/assets/images/svg/components/load-file";
import { Button } from "@shared/components/buttons/button";
import { ProgressBar } from "./ui/progress-bar/progress-bar";

interface InputImageProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImageFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}
export const InputImage = ({
  setImageFile,
  onChange,
  ...props
}: InputImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [fileImage, setFileImage] = useState<File>();
  const [loadImage, setLoadImage] = useState(false);

  useEffect(() => {
    setLoadImage((active) => !active);
  }, [image]);

  const handleLoad = () => {
    if (!fileImage) return;
    const imgURL = URL.createObjectURL(fileImage);
    setImageFile(fileImage);
    setImage(imgURL);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileImg = event.target.files ? event.target.files[0] : null;
    if (!fileImg) return;

    setFileImage(fileImg);
    setLoadImage(true);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={styles.image}>
      <input
        type="file"
        accept="image/*"
        {...props}
        onChange={(e) => {
          onChange(e);
          handleChange(e);
        }}
        disabled={loadImage}
        ref={inputRef}
      />
      <div className={styles["image__content"]}>
        {image ? (
          <div
            className={`${styles["image__wrapper"]} ${
              loadImage ? styles.block : ""
            }`}
          >
            <img src={image} alt="preview"></img>
          </div>
        ) : (
          <div className={styles["image__info"]}>
            <SvgLoadFileComponent />
            <span>Перетащите фото сюда</span>
            <p>
              или
              <Button typeView="flat" onClick={handleClick} type="button">
                выберите фото с вашего компьютера{" "}
              </Button>
            </p>
          </div>
        )}
      </div>
      {loadImage && (
        <ProgressBar
          setLoadImage={handleLoad}
          fileSize={fileImage ? fileImage.size : 0}
        />
      )}
    </div>
  );
};
