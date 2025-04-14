import { IconButton } from "../../../shared/components/icon-button/icon-button";
import { MiniProfilePost } from "../../user/mini-profile/mini-profile-post";
import SvgChangeComponent from "../../../shared/assets/images/svg/components/change";
import SvgDeleteComponent from "../../../shared/assets/images/svg/components/delete";
import SvgLikeComponent from "../../../shared/assets/images/svg/components/like";
import SvgShareComponent from "../../../shared/assets/images/svg/components/share";
import styles from "./post.module.scss";
import SvgCloseModalComponent from "../../../shared/assets/images/svg/components/close-modal";

interface PostModalProps {
  mine?: boolean;
  handleModal: () => void;
}
export const PostModal = ({ mine, handleModal }: PostModalProps) => {
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
          <IconButton onClick={handleModal}>
            <SvgCloseModalComponent />
          </IconButton>
        </header>
        <section className={styles["post__content"]}>
          <header className={styles["post__content-header"]}>
            <span>Как интерьер влияет на самочувствие</span>
          </header>
          <div className={styles["post__content-image"]}></div>
          <div
            className={styles["post__content-text"]}
            style={{ maxHeight: "none" }}
          >
            <span style={{ display: "block" }}>
              Мы сделали долгожданный ремонт в спальне в стиле 60-х! Сейчас эта
              мода вновь буквально врывается в окружающее нас пространство. При
              помощи ярких акцентов и скругленных элементов интерьера нам
              удалось придать. Мы сделали долгожданный ремонт в спальне в стиле
              60-х! Сейчас эта мода вновь буквально врывается в окружающее нас
              пространство. При помощи ярких акцентов и скругленных элементов
              интерьера нам удалось придать
            </span>
          </div>
        </section>
        <footer className={styles["post__footer"]}>
          {mine ? (
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
          ) : (
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
          )}
        </footer>
      </div>
    </section>
  );
};
