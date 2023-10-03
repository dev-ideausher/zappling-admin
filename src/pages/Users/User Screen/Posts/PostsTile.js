import React from "react";

const PostsTile = ({ cover, content }) => {
  return (
    <div className="ownedCard d-flex d-flex-column p-relative col-2">
      <img src={cover} />
      <div className="name">
        {" "}
        <p className="f-600 font-14 mt-4">{content}</p>
      </div>
    </div>
  );
};

export default PostsTile;
