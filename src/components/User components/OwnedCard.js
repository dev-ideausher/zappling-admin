import React from "react";

const OwnedCard = ({ img, name, data }) => {
  return (
    <div className="ownedCard d-flex d-flex-column col-2">
      <img src={img} />
      <div className="d-flex d-justify-space-between ownedCardInfo">
        <p className="font-14 f-600">{name}</p>
        <p className="font-14 text-grey">{data}</p>
      </div>
    </div>
  );
};

export default OwnedCard;
