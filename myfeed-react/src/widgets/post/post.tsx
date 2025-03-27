import { IconButton } from "../../shared/components/icon-button/icon-button";
import { MiniProfilePost } from "../dropdowns/mini-profile/mini-profile-post";
import SvgChangeComponent from "./icons/components/change";
import SvgDeleteComponent from "./icons/components/delete";
import SvgLikeComponent from "./icons/components/like";
import SvgShareComponent from "./icons/components/share";
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
              <li>
                <IconButton>
                  <SvgShareComponent />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgDeleteComponent />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgChangeComponent />
                </IconButton>
              </li>
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
              <li>
                <IconButton>
                  <SvgLikeComponent />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgShareComponent />
                </IconButton>
              </li>
            </ul>
          </footer>
        )}
      </div>
    </section>
  );
};
