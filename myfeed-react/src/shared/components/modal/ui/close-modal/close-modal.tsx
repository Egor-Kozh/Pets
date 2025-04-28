import SvgCloseModalComponent from "@shared/assets/images/svg/components/close-modal";
import { IconButton } from "@shared/components/icon-button/icon-button";

interface Args {
  handleCloseModal: () => void;
}
export const CloseModal = ({ handleCloseModal }: Args) => {
  return (
    <IconButton onClick={handleCloseModal}>
      <SvgCloseModalComponent />
    </IconButton>
  );
};
