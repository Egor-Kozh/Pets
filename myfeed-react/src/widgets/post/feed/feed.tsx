import { useGetAllPosts } from "@entities/posts/model/get-all-posts/use-get-all-posts";
import { Post } from "@entities/posts/ui/post/post";
import { PostSkeleton } from "@shared/components/skeleton/skeleton";
import { SortPosts } from "./ui/sort-posts/sort-posts";
import { useState } from "react";
import { PostFilterType, useUserIdQuery } from "@shared/__generated__/hooks";
import styles from "./feed.module.scss";
import { LikePost } from "@features/posts/post-reaction/ui/post-like";
import { PostType } from "@entities/posts/model/types";
import { PostModal } from "@widgets/post/feed/ui/post-modal/post-modal";
import { useLockScroll } from "@shared/hooks/useLockScroll";
import { SharedPost } from "@features/posts/shared-post/ui/shared-post";
import { DeletePost } from "@features/posts/delete-post/ui/delete-post";
import { EditPost } from "@features/posts/edit-post/ui/edit-post";

export const Feed = () => {
  const [postsSort, setPostsSort] = useState<PostFilterType>(
    PostFilterType.New
  );

  const { data: userData } = useUserIdQuery();
  const userId = userData?.userId.id;

  const setScroll = useLockScroll();

  const [activePostId, setActivePostId] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const setIsOpenPost = (id: string) => {
    setActivePostId(id);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setScroll();
    setIsOpenModal(false);
  };

  const { data, isLoading } = useGetAllPosts(postsSort);

  const headerAction = (post: PostType) => {
    return (
      <>
        <SharedPost />
        <DeletePost post={post} />
        <EditPost />
      </>
    );
  };

  const footerAction = (post: PostType) => {
    return (
      <>
        <LikePost post={post} />
        <SharedPost />
      </>
    );
  };

  if (isLoading) return <PostSkeleton />;

  return (
    <div className={styles["posts-list"]}>
      <div className={styles["posts-list__sort"]}>
        <SortPosts setPostsSort={setPostsSort} />
      </div>

      <div className={styles["posts-list__list"]}>
        {data?.posts.data?.map((post) => {
          const isMyPost = userId === post.author.id;

          return (
            <Post
              mine={isMyPost}
              post={post}
              key={post.id}
              headerActionSlot={isMyPost && headerAction(post)}
              footerActionSlot={!isMyPost && footerAction(post)}
              handleClickReadMore={setIsOpenPost}
            />
          );
        })}
      </div>

      <PostModal
        isOpen={isOpenModal}
        hanleCloseModal={handleCloseModal}
        id={activePostId}
      />
    </div>
  );
};
