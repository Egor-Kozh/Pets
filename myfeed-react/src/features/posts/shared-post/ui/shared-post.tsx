import { IconButton } from "@shared/components/icon-button/icon-button";
import SvgShareComponent from "@shared/assets/images/svg/components/share";
import { useState } from "react";
import { Modal } from "@shared/components/modal/modal";
import { PopUp } from "@shared/components/pop-up/pop-up";
import { useLockScroll } from "@shared/hooks/useLockScroll";
import { PostType } from "@entities/posts/model/types";

interface Args {
  post: PostType;
}
export const SharedPost = ({ post }: Args) => {
  const [isOpen, setIsOpen] = useState(false);
  const setScroll = useLockScroll();

  const onClick = () => {
    setIsOpen((prev) => !prev);
    setScroll();
  };

  const CopyText = () => {
    const url = window.location.href + post.id;

    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <IconButton onClick={onClick}>
        <SvgShareComponent />
      </IconButton>

      {isOpen && (
        <Modal active={isOpen} setActiveModal={onClick}>
          <PopUp
            header="Cсылка на запись"
            description={window.location.href + post.id}
            action={{ trigger: CopyText, name: "Скопировать" }}
            handleModal={onClick}
          />
        </Modal>
      )}
    </>
  );
};
