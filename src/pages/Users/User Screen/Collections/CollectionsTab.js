import React from "react";
import cover from "../../../../assets/images/collectionCover.png";
import profilePic from "../../../../assets/images/collectionProfile.png";
import CollectionTile from "../../CollectionTile";

const CollectionsTab = () => {
  return (
    <div className="d-flex d-flex-wrap mt-5 gap-4">
      <CollectionTile cover={cover} profile={profilePic} name="Otherdeed" />

      <CollectionTile cover={cover} profile={profilePic} name="Otherdeed" />

      <CollectionTile cover={cover} profile={profilePic} name="Otherdeed" />

      <CollectionTile cover={cover} profile={profilePic} name="Otherdeed" />

      <CollectionTile cover={cover} profile={profilePic} name="Otherdeed" />

      <CollectionTile cover={cover} profile={profilePic} name="Otherdeed" />

      <CollectionTile cover={cover} profile={profilePic} name="Otherdeed" />
    </div>
  );
};

export default CollectionsTab;
