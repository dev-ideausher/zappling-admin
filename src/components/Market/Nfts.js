import React, { useState } from "react";
import Overview from "../../pages/Market Place/NFTs/Overview";
import MostReportedNfts from "../../pages/Market Place/NFTs/MostReportedNfts";
import AllNfts from "../../pages/Market Place/NFTs/AllNfts";
import NftVerification from "../../pages/Market Place/Collections/CollecitonVerification";

const Users = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="col-11">
      <h1 className="font-18">NFTs</h1>
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
            All NFTs
          </button>

          <button
            onClick={() => setSelectedTab("most reported")}
            className={` accordionButton ${
              selectedTab === "most reported" ? "accordionButtonSelected" : ""
            }`}
          >
            Most reported
          </button>
        </div>
        {selectedTab === "overview" && <Overview />}
        {selectedTab === "allnfts" && <AllNfts />}
        {selectedTab === "most reported" && <MostReportedNfts />}
        {selectedTab === "verification" && <NftVerification />}
      </div>
    </div>
  );
};

export default Users;
