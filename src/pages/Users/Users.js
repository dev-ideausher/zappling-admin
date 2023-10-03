import React, { useState } from "react";
import OverviewTab from "./OverviewTab";
import AllUsers from "./AllUsers";
import VerificationTable from "./Verification";
import MostReported from "./MostReported";

const Users = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="col-11">
      <h1 className="font-18">Users</h1>
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
            onClick={() => setSelectedTab("allusers")}
            className={` accordionButton ${
              selectedTab === "allusers" ? "accordionButtonSelected" : ""
            }`}
          >
            All Users
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
            Most reported
          </button>
        </div>
        {selectedTab === "overview" && <OverviewTab />}
        {selectedTab === "allusers" && <AllUsers />}
        {selectedTab === "verification" && <VerificationTable />}
        {selectedTab === "most reported" && <MostReported />}
      </div>
    </div>
  );
};

export default Users;
