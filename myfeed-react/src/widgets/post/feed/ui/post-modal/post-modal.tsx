import { Modal } from "@shared/components/modal/modal";
import { Post } from "@entities/posts/ui/post/post";
import { useGetPostById } from "@entities/posts/model/get-post-by-id/use-get-post-by-id";
import { PostType } from "@entities/posts/model/types";
import { CloseModal } from "@shared/components/modal/ui/close-modal/close-modal";
import { LikePost } from "@features/posts/post-reaction/ui/post-like";
import { SharedPost } from "@features/posts/shared-post/ui/shared-post";
import { DeletePost } from "@features/posts/delete-post/ui/delete-post";
import { EditPost } from "@features/posts/edit-post/ui/edit-post";

interface PostModalProps {
  mine?: boolean;
  isOpen: boolean;
  id: string;
  hanleCloseModal: () => void;
}
export const PostModal = ({
  mine,
  isOpen,
  hanleCloseModal,
  id,
}: PostModalProps) => {
  const { data } = useGetPostById(id);

  const headerAction = () => {
    return (
      <>
        <CloseModal handleCloseModal={hanleCloseModal} />
      </>
    );
  };

  const footerAction = (post: PostType) => {
    if (mine)
      return (
        <>
          <SharedPost />
          <DeletePost post={post} />
          <EditPost />
        </>
      );
    return (
      <>
        <LikePost post={post} />
        <SharedPost />
      </>
    );
  };

  return (
    <Modal active={isOpen} setActiveModal={hanleCloseModal}>
      <Post
        post={data}
        headerActionSlot={headerAction()}
        footerActionSlot={footerAction(data)}
      />
    </Modal>
  );
};
