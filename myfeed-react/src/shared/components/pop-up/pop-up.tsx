import { Button } from "@shared/components/buttons/button";
import styles from "./pop-up.module.scss";
import { IconButton } from "@shared/components/icon-button/icon-button";
import SvgCloseModalComponent from "@shared/assets/images/svg/components/close-modal";

interface PopUpProps {
  header: string;
  description: string;
  action: { trigger: () => void; name: string };
  handleModal: () => void;
}
export const PopUp = ({
  header,
  description,
  action,
  handleModal,
}: PopUpProps) => {
  const handleDelete = () => {
    action.trigger();
    handleModal();
  };

  return (
    <div className={styles["pop-up"]}>
      <div className={styles["pop-up__inner"]}>
        <div className={styles["pop-up__close"]}>
          <IconButton onClick={handleModal}>
            <SvgCloseModalComponent />
          </IconButton>
        </div>
        <div className={styles["pop-up__header"]}>{header}</div>
        <div className={styles["pop-up__description"]}>{description}</div>
        <div className={styles["pop-up__actions"]}>
          <Button typeView="secondary" size="small" onClick={handleModal}>
            Отменить
          </Button>
          <Button typeView="primary" size="small" onClick={handleDelete}>
            {action.name}
          </Button>
        </div>
      </div>
    </div>
  );
};
