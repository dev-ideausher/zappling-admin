import React, { useState } from "react";
import AllPosts from "../../pages/Market Place/Posts/AllPosts";
import MostReportedPosts from "../../pages/Market Place/Posts/MostReportedPosts";

const CommunityPosts = () => {
  const [selectedTab, setSelectedTab] = useState("allposts");

  return (
    <div className="col-11">
      <h1 className="font-18">Posts</h1>
      <div className="d-flex d-flex-column">
        <div className="d-flex gap-4 accordionButtons">
          <button
            onClick={() => setSelectedTab("allposts")}
            className={` accordionButton ${
              selectedTab === "allposts" ? "accordionButtonSelected" : ""
            }`}
          >
            All Posts
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

        {selectedTab === "allposts" && <AllPosts />}
        {selectedTab === "most reported" && <MostReportedPosts />}
      </div>
    </div>
  );
};

export default CommunityPosts;
