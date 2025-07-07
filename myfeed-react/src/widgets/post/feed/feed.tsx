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
import { Virtuoso } from "react-virtuoso";
import React from "react";

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
    setScroll();
  };

  const handleCloseModal = () => {
    setScroll();
    setIsOpenModal(false);
  };

  const { data, isLoading, fetchMore } = useGetAllPosts(postsSort);

  const headerAction = (post: PostType) => {
    return (
      <>
        <SharedPost post={post} />
        <DeletePost post={post} />
        <EditPost />
      </>
    );
  };

  const footerAction = (post: PostType) => {
    return (
      <>
        <LikePost post={post} />
        <SharedPost post={post} />
      </>
    );
  };

  const nextPage = () => {
    const cursor = data?.posts.pageInfo?.afterCursor;

    fetchMore({
      variables: { afterCursor: cursor },

      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult.posts.data && previousQueryResult.posts.data) {
          fetchMoreResult.posts.data = [
            ...previousQueryResult.posts.data,
            ...fetchMoreResult.posts.data,
          ];
        }
        return fetchMoreResult;
      },
    });
  };

  return (
    <div className={styles["posts-list"]}>
      <div className={styles["posts-list__sort"]}>
        <SortPosts setPostsSort={setPostsSort} />
      </div>

      {isLoading ? (
        <PostSkeleton />
      ) : (
        <div className={styles["posts-list__list"]}>
          <Virtuoso
            data={data?.posts.data || []}
            useWindowScroll
            endReached={nextPage}
            components={{
              List: React.forwardRef<
                HTMLDivElement,
                React.HTMLAttributes<HTMLDivElement>
              >(({ style, children }, ref) => (
                <div
                  ref={ref}
                  style={{
                    ...style,
                    display: "flex",
                    rowGap: "20px",
                    flexDirection: "column",
                  }}
                >
                  {children}
                </div>
              )),
            }}
            itemContent={(index, post) => {
              const isMyPost = userId === post.author.id;

              return (
                <Post
                  mine={isMyPost}
                  post={post}
                  key={post.id + index}
                  headerActionSlot={isMyPost ? headerAction(post) : null}
                  footerActionSlot={!isMyPost ? footerAction(post) : null}
                  handleClickReadMore={setIsOpenPost}
                />
              );
            }}
            style={{
              height: "100vh",
              width: "100%",
              overflow: "auto",
              scrollbarWidth: "none",
            }}
          />
        </div>
      )}

      <PostModal
        isOpen={isOpenModal}
        hanleCloseModal={handleCloseModal}
        id={activePostId}
      />
    </div>
  );
};
