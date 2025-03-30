import styles from "./progress-bar.module.scss";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  setLoadImage: () => void;
}
export const ProgressBar = ({ setLoadImage }: ProgressBarProps) => {
  const [procentProgress, setProcentProgress] = useState(0);

  const handleProgress = () => {
    const interval = setInterval(() => {
      setProcentProgress((count) => {
        if (count >= 100) {
          clearInterval(interval);
          setLoadImage();
          return 100;
        }
        return count + 1;
      });
    }, 20);
  };

  useEffect(() => {
    handleProgress();
  }, []);

  return (
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-bar__title"]}>{procentProgress}%</div>
      <div className={styles["progress-bar__bar"]}>
        <div
          className={styles["progress-bar__progress"]}
          style={{ width: `${procentProgress}%` }}
        ></div>
      </div>
    </div>
  );
};
