import { MiniProfilePost } from "../dropdowns/mini-profile/mini-profile-post";
import styles from "./post.module.scss";

interface PostProps {
  mine?: boolean;
}
export const Post = ({ mine }: PostProps) => {
  return (
    <section className={styles["post"]}>
      <div className={styles["post__inner"]}>
        <header className={styles["post__header"]}>
          <div className={styles["post__user-profile"]}>
            <MiniProfilePost
              userFirstName="Мария"
              userLastName="Иванова"
              date="20.09.2022"
            />
          </div>
          {mine && (
            <ul className={styles["post__actions-mine"]}>
              <li>😄</li>
              <li>😄</li>
              <li>😄</li>
            </ul>
          )}
        </header>
        <section className={styles["post__content"]}>
          <header className={styles["post__content-header"]}>
            <span>Как интерьер влияет на самочувствие</span>
          </header>
          <div className={styles["post__content-image"]}></div>
          <div className={styles["post__content-text"]}>
            <span>
              Мы сделали долгожданный ремонт в спальне в стиле 60-х! Сейчас эта
              мода вновь буквально врывается в окружающее нас пространство. При
              помощи ярких акцентов и скругленных элементов интерьера нам
              удалось придать...
            </span>
          </div>
        </section>
        {!mine && (
          <footer className={styles["post__footer"]}>
            <ul className={styles["post__actions-another"]}>
              <li>😄</li>
              <li>😄</li>
            </ul>
          </footer>
        )}
      </div>
    </section>
  );
};
