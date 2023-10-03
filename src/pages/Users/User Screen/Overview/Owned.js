import React from "react";
import OwnedCard from "../../../../components/User components/OwnedCard";
import image from "../../../../assets/images/owned1.png";

const OwnedTab = () => {
  return (
    <div className="d-flex d-flex-wrap mt-5 gap-4">
      <OwnedCard img={image} name="Soham" data="2.55" />

      <OwnedCard img={image} name="Soham" data="2.55" />

      <OwnedCard img={image} name="Soham" data="2.55" />

      <OwnedCard img={image} name="Soham" data="2.55" />

      <OwnedCard img={image} name="Soham" data="2.55" />

      <OwnedCard img={image} name="Soham" data="2.55" />
    </div>
  );
};

export default OwnedTab;
