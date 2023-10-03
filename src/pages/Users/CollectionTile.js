import React from "react";

const CollectionTile = ({ cover, profile, name }) => {
  return (
    <div className="ownedCard d-flex d-flex-column p-relative col-3">
      <img src={cover} />
      <img src={profile} className="p-absolute profilePicCollection" />
      <div className="name">
        {" "}
        <p className="f-600 font-14 mt-4">{name}</p>
      </div>
    </div>
  );
};

export default CollectionTile;
