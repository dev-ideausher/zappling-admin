import React from "react";
import PostsTile from "./PostsTile";
import cover from "../../../../assets/images/Posts.png";

const PostsTab = () => {
  return (
    <div className="d-flex d-flex-wrap mt-5 col-12 gap-4">
      <PostsTile cover={cover} content={"Lords of lords"} />
      <PostsTile cover={cover} content={"Lords of lords"} />

      <PostsTile cover={cover} content={"Lords of lords"} />

      <PostsTile cover={cover} content={"Lords of lords"} />

      <PostsTile cover={cover} content={"Lords of lords"} />
    </div>
  );
};

export default PostsTab;
