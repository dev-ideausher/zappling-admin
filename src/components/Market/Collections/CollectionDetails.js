import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import CollectionVerification from "./CollectionVerification";
import CollectionReports from "./CollectionReports";
import CollectionActivity from "./CollectionActivity";
import CollectionOverview from "./CollectionDetailsOverview";

const CollectionDetails = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const navigate = useNavigate();

  return (
    <div className="d-flex d-flex-column gap-2">
      <div className="d-flex gap-3 d-align-center">
        <button className="filterButton" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.2183 7.33327H13.3327V8.6666H5.2183L8.79428 12.2425L7.85148 13.1853L2.66602 7.99993L7.85148 2.81445L8.79428 3.75726L5.2183 7.33327Z"
              fill="#252322"
            />
          </svg>
          Back{" "}
        </button>

        <p className="f-700 font-18">Collection details</p>
      </div>

      <div className="d-flex d-align-center gap-2">
        <p className="text-grey">Collection</p>
        <p className="f-500">/ 0xea674fdde714fd979de3edf0f56aa9716b898ec8 </p>
      </div>

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
          onClick={() => setSelectedTab("verification")}
          className={` accordionButton ${
            selectedTab === "verification" ? "accordionButtonSelected" : ""
          }`}
        >
          Verification
        </button>

        <button
          onClick={() => setSelectedTab("reports")}
          className={` accordionButton ${
            selectedTab === "reports" ? "accordionButtonSelected" : ""
          }`}
        >
          Reports
        </button>
        <button
          onClick={() => setSelectedTab("activity")}
          className={` accordionButton ${
            selectedTab === "activity" ? "accordionButtonSelected" : ""
          }`}
        >
          Activity
        </button>
      </div>

      {selectedTab === "overview" && <CollectionOverview />}
      {selectedTab === "verification" && <CollectionVerification />}
      {selectedTab === "reports" && <CollectionReports />}
      {selectedTab === "activity" && <CollectionActivity />}
    </div>
  );
};

export default CollectionDetails;
