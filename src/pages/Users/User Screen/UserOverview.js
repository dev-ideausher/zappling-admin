import React, { useState } from "react";
import cover from "../../../assets/images/coverUser.png";
import userPic from "../../../assets/images/avatar.png";
import OwnedTab from "./Overview/Owned";
import CreatedTab from "./Created/CreatedTab";
import CollectionsTab from "./Collections/CollectionsTab";
import PostsTab from "./Posts/PostsTab";

const UserOverview = () => {
  const [selectedTab, setSelectedTab] = useState("Owned");

  return (
    <div className="d-flex mt-5">
      <div className="col-4 p-relative ">
        <img src={cover} alt="user" />
        <img className="col-2 userPicPlacement p-absolute" src={userPic} />

        <div className="d-flex mt-6 gap-2 d-align-center">
          {" "}
          <p className="f-700 font-18">Alber Flores</p>
          <p className="f-600 text-grey font-14">@goticonoclast</p>
        </div>

        <p className="font-14 f-500 col-11">
          I make art with the simple goal of giving you something pleasing to
          look at for a few seconds.
        </p>

        <div className="d-flex profileID d-align-center gap-2 mt-2">
          <p>0xea674fdde714fd979...ec8</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.83317 5V2.5C5.83317 2.03976 6.20627 1.66666 6.6665 1.66666H16.6665C17.1267 1.66666 17.4998 2.03976 17.4998 2.5V14.1667C17.4998 14.6269 17.1267 15 16.6665 15H14.1665V17.4992C14.1665 17.9599 13.7916 18.3333 13.3275 18.3333H3.33888C2.87549 18.3333 2.5 17.9628 2.5 17.4992L2.50217 5.83406C2.50225 5.37342 2.8772 5 3.34118 5H5.83317ZM4.16868 6.66666L4.16682 16.6667H12.4998V6.66666H4.16868ZM7.49983 5H14.1665V13.3333H15.8332V3.33333H7.49983V5Z"
              fill="#76716F"
            />
          </svg>
        </div>

        <div className="d-flex d-flex-column mt-5">
          <p className="f-600 font-14">USER DETAILS</p>
          <div className="d-flex">
            <div className="col-6 mt-3 ">
              <p className="font-14 f-500 text-grey">User ID</p>
              <p className="f-600">150131</p>
            </div>

            <div className="col-6 mt-3 ">
              <p className="font-14 f-500 text-grey">Activity Status</p>
              <div className="d-flex gap-2 d-align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                >
                  <circle cx="3" cy="3" r="3" fill="#099C4F" />
                </svg>
                <p className="f-600 text-green">Active</p>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div className="col-6 mt-3 ">
              <p className="font-14 f-500 text-grey">Created on</p>
              <p className="f-600">Mar 20, 2019 23:14</p>
            </div>

            <div className="col-6 mt-3 ">
              <p className="font-14 f-500 text-grey">Last active on</p>
              <p className="f-600">Dec 30, 2019 07:52</p>
            </div>
          </div>

          <div className="d-flex ">
            <div className="col-6 mt-3 ">
              <p className="font-14 f-500 text-grey">Verification status</p>
              <p className="f-600">Unverified</p>
            </div>

            <div className="col-6 mt-3 ">
              <p className="font-14 f-500 text-grey">
                Eligible for verification
              </p>
              <p className="f-600">No</p>
            </div>
          </div>
        </div>
      </div>

      <div className="borderRight"></div>
      <div className="col-8 p-10">
        <div className="d-flex gap-4 accordionButtons">
          <button
            onClick={() => setSelectedTab("Owned")}
            className={` accordionButton ${
              selectedTab === "Owned" ? "accordionButtonSelected" : ""
            }`}
          >
            Owned
          </button>

          <button
            onClick={() => setSelectedTab("Created")}
            className={` accordionButton ${
              selectedTab === "Created" ? "accordionButtonSelected" : ""
            }`}
          >
            Created
          </button>

          <button
            onClick={() => setSelectedTab("Collections")}
            className={` accordionButton ${
              selectedTab === "Collections" ? "accordionButtonSelected" : ""
            }`}
          >
            Collections
          </button>
          <button
            onClick={() => setSelectedTab("Posts")}
            className={` accordionButton ${
              selectedTab === "Posts" ? "accordionButtonSelected" : ""
            }`}
          >
            Posts
          </button>
        </div>

        {selectedTab == "Owned" && <OwnedTab />}
        {selectedTab == "Created" && <CreatedTab />}
        {selectedTab == "Collections" && <CollectionsTab />}
        {selectedTab == "Posts" && <PostsTab />}
      </div>
    </div>
  );
};

export default UserOverview;
