import React, { useState } from "react";
import nftImage from "../../../assets/images/nftImageBig.png";
import profilePic from "../../../assets/images/avatar.png";
import avatar from "../../../assets/images/avatar.png";

const PostOverview = () => {
  const [selectedTab, setSelectedTab] = useState("comments");

  return (
    <div className="d-flex col-12">
      <div className="col-4 borderRight">
        <div className="d-flex col-12 d-flex-column gap-2 nftDetailsCol1 d-align-start">
          <img className="col-11" src={nftImage} alt="nftImage" />
          <p className="f-500 font-20 f-700">
            Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It
            seems to be sentient ...
          </p>
          <div className="d-flex d-flex-column d-align-start col-12">
            <p className="f-600 font-14 mb-2">POST DETAILS</p>

            <p className="text-grey font-14 mt-2 f-500">Owner</p>
            <div className="d-flex d-justify-space-between col-12 borderBottom mt-2">
              <div className="d-flex gap-2 mb-2">
                <img src={avatar} alt="collection image" />

                <div className="d-flex d-flex-column">
                  <p>Henry Flat</p>
                  <p className="text-grey font-14 f-500">0x39a02...1e791</p>
                </div>
              </div>

              <button className="redirectButton mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z"
                    fill="#76716F"
                  />
                </svg>
              </button>
            </div>

            <div className="d-flex d-justify-space-between col-12 borderBottom mb-2">
              <div>
                <p className="text-grey font-14 f-500">Created on</p>
                <p className="f-600 font-16">Mar 20, 2019 23:14</p>
              </div>
            </div>

            <div className="d-flex d-justify-space-between col-12 borderBottom mb-2 mt-2">
              <div className="mb-2">
                <p className="text-grey font-14 f-500">Activity Status</p>
                <div className="d-flex d-align-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <circle cx="3" cy="3" r="3" fill="#099C4F" />
                  </svg>{" "}
                  <p className="text-green f-600">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 ">
        <div className="d-flex gap-4 accordionButtons">
          <button
            onClick={() => setSelectedTab("comments")}
            className={` accordionButton ${
              selectedTab === "comments" ? "accordionButtonSelected" : ""
            }`}
          >
            Comments
          </button>

          <button
            onClick={() => setSelectedTab("likes")}
            className={` accordionButton ${
              selectedTab === "likes" ? "accordionButtonSelected" : ""
            }`}
          >
            Likes
          </button>
        </div>

        {selectedTab === "comments" && (
          <div className="d-flex d-flex-column mt-5 col-12">
            <div className="d-flex mt-3 gap-2 col-12">
              <img className="commentsPic d-align-center" src={profilePic} />
              <p className="f-600">whitegoose497</p>
            </div>

            <div className="d-flex d-justify-space-between d-align-center col-12">
              <p className="f-500  text-grey  mt-2 col-10">
                Aliquam porta nisl dolor, molestie pellentesque elit molestie
                in. Morbi metus neque, elementum ullam
              </p>

              <p className="font-14 f-500 text-grey ">Jan 1, 2022, 12:59</p>
            </div>

            <div className="d-flex mt-3 gap-2">
              <img className="commentsPic d-align-center" src={profilePic} />
              <p className="f-600">whitegoose497</p>
            </div>

            <div className="d-flex d-justify-space-between d-align-center col-12">
              <p className="f-500  text-grey col-10 mt-2">
                Aliquam porta nisl dolor, molestie pellentesque elit molestie
                in. Morbi metus neque, elementum ullam
              </p>

              <p className="font-14 f-500 text-grey">Jan 1, 2022, 12:59</p>
            </div>

            <div className="d-flex mt-3 gap-2">
              <img className="commentsPic d-align-center" src={profilePic} />
              <p className="f-600">whitegoose497</p>
            </div>

            <div className="d-flex d-justify-space-between d-align-center col-12">
              <p className="f-500  text-grey col-10 mt-2">
                Aliquam porta nisl dolor, molestie pellentesque elit molestie
                in. Morbi metus neque, elementum ullam
              </p>

              <p className="font-14 f-500 text-grey">Jan 1, 2022, 12:59</p>
            </div>
          </div>
        )}

        {selectedTab === "likes" && (
          <div className="d-flex d-flex-column gap-4 mt-4">
            <div className="d-flex gap-2 mb-2">
              <img src={avatar} alt="collection image" />

              <div className="d-flex d-flex-column">
                <p>Henry Flat</p>
                <p className="text-grey font-14 f-500">0x39a02...1e791</p>
              </div>
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={avatar} alt="collection image" />

              <div className="d-flex d-flex-column">
                <p>Henry Flat</p>
                <p className="text-grey font-14 f-500">0x39a02...1e791</p>
              </div>
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={avatar} alt="collection image" />

              <div className="d-flex d-flex-column">
                <p>Henry Flat</p>
                <p className="text-grey font-14 f-500">0x39a02...1e791</p>
              </div>
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={avatar} alt="collection image" />

              <div className="d-flex d-flex-column">
                <p>Henry Flat</p>
                <p className="text-grey font-14 f-500">0x39a02...1e791</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostOverview;
