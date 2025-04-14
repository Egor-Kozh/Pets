import { useEffect, useRef, useState } from "react";
import { IconButton } from "../../../shared/components/icon-button/icon-button";
import { MiniProfilePost } from "../../user/mini-profile/mini-profile-post";
import SvgChangeComponent from "../../../shared/assets/images/svg/components/change";
import SvgDeleteComponent from "../../../shared/assets/images/svg/components/delete";
import SvgLikeComponent from "../../../shared/assets/images/svg/components/like";
import SvgShareComponent from "../../../shared/assets/images/svg/components/share";
import styles from "./post.module.scss";
import { Button } from "../../../shared/components/buttons/button";
import { Modal } from "../../../shared/components/modal/modal";
import { useLockScroll } from "../../../shared/hooks/useLockScroll";
import { PostModal } from "./post-modal";

interface PostProps {
  mine?: boolean;
}
export const Post = ({ mine }: PostProps) => {
  const [activeModal, setActiveModal] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const setScroll = useLockScroll();

  const containerRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current;
      setIsReadMore(scrollHeight > clientHeight);
    }
  }, []);

  const handleModal = () => {
    setScroll();
    setActiveModal((active) => !active);
  };

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
            <span ref={containerRef}>
              Мы сделали долгожданный ремонт в спальне в стиле 60-х! Сейчас эта
              мода вновь буквально врывается в окружающее нас пространство. При
              помощи ярких акцентов и скругленных элементов интерьера нам
              удалось придать. Мы сделали долгожданный ремонт в спальне в стиле
              60-х! Сейчас эта мода вновь буквально врывается в окружающее нас
              пространство. При помощи ярких акцентов и скругленных элементов
              интерьера нам удалось придать
            </span>
            {isReadMore && (
              <Button typeView="flat" onClick={handleModal}>
                Читать дальше
              </Button>
            )}
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
        {mine && (
          <footer className={styles["post__footer"]}>
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
          </footer>
        )}
      </div>
      {activeModal && (
        <Modal active={true} setActiveModal={handleModal}>
          <PostModal mine={mine} handleModal={handleModal} />
        </Modal>
      )}
    </section>
  );
};
