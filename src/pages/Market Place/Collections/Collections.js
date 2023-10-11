import React, { useState } from "react";
import CollectionOverview from "./CollectionOverview";
import AllCollections from "./AllCollections";
import NftVerification from "./CollecitonVerification";
import MostReportedCollections from "./MostReportedCollections";

const Collections = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="col-11">
      <h1 className="font-18">Collections</h1>
      <div className="d-flex d-flex-column">
        <div className="d-flex gap-4 accordionButtons">
          <button
            onClick={() => setSelectedTab("overview")}
            className={` accordionButton ${
              selectedTab === "overview" ? "accordionButtonSelected" : ""
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedTab("allnfts")}
            className={` accordionButton ${
              selectedTab === "allnfts" ? "accordionButtonSelected" : ""
            }`}
          >
            All Collections
          </button>

          <button
            onClick={() => setSelectedTab("verification")}
            className={` accordionButton ${
              selectedTab === "verification" ? "accordionButtonSelected" : ""
            }`}
          >
            Verification
          </button>

          <button
            onClick={() => setSelectedTab("most reported")}
            className={` accordionButton ${
              selectedTab === "most reported" ? "accordionButtonSelected" : ""
            }`}
          >
            Most Reported
          </button>
        </div>
        {selectedTab === "overview" && <CollectionOverview />}
        {selectedTab === "allnfts" && <AllCollections />}
        {selectedTab === "verification" && <NftVerification />}
        {selectedTab === "most reported" && <MostReportedCollections />}
      </div>
    </div>
  );
};

export default Collections;
