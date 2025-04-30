import { PostType } from "@entities/posts/model/types";
import { useDeletePost } from "../model/use-delete-post";
import SvgDeleteComponent from "@shared/assets/images/svg/components/delete";
import { IconButton } from "@shared/components/icon-button/icon-button";
import { useState } from "react";
import { Modal } from "@shared/components/modal/modal";
import { PopUp } from "@shared/components/pop-up/pop-up";

interface Args {
  post: PostType;
}
export const DeletePost = ({ post }: Args) => {
  const [activePopUpModal, setActivePopUpModal] = useState(false);

  const { hadleDeletePost } = useDeletePost({ post });

  const handlePopUpModal = () => {
    setActivePopUpModal((active) => !active);
  };

  return (
    <>
      <IconButton onClick={handlePopUpModal}>
        <SvgDeleteComponent />
      </IconButton>
      {activePopUpModal && (
        <Modal active={true} setActiveModal={handlePopUpModal}>
          <PopUp
            header="Удалить эту запись?"
            description="После удаления, запись нельзя будет восстановить"
            action={{ trigger: hadleDeletePost, name: "Удалить" }}
            handleModal={handlePopUpModal}
          />
        </Modal>
      )}
    </>
  );
};
