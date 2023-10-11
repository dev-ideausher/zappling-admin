import React, { useState } from "react";
import nftImage from "../../../assets/images/nftImageBig.png";

import nftImageSmall from "../../../assets/images/nftImage.png";
import avatar from "../../../assets/images/avatar.png";

const NftOverview = () => {
  const [selectedTab, setSelectedTab] = useState("metadata");

  return (
    <div className="d-flex col-12">
      <div className="col-4 borderRight">
        <div className="d-flex col-12 d-flex-column gap-2 nftDetailsCol1 d-align-start">
          <img className="col-11" src={nftImage} alt="nftImage" />
          <p className="font-20 f-700">Multiverse #2</p>
          <p className="f-500 font-14">
            Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It
            seems to be sentient ...
          </p>
          <button className="moreButton mb-4"> + MORE</button>
          <div className="d-flex d-flex-column d-align-start col-12">
            <p className="f-600 font-14 mb-2">NFT DETAILS</p>
            <p className="text-grey font-14 mb-2">Collection</p>
            <div className="d-flex d-justify-space-between col-12 borderBottom">
              <div className="d-flex gap-2 mb-2">
                <img className="" src={nftImageSmall} alt="collection image" />
                <div className="d-flex d-flex-column">
                  <p>Maroon Paradise</p>
                  <p className="text-grey mb-2">35 NFTs</p>
                </div>
              </div>

              <button className="redirectButton">
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
            <div className="d-flex d-justify-space-between col-12 borderBottom mb-2 mt-2">
              <div>
                <p className="text-grey font-14 f-500">NFT ID</p>
                <p className="f-600 font-16">150131</p>
              </div>

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
            <div className="d-flex d-justify-space-between col-12 borderBottom mb-2">
              <div>
                <p className="text-grey font-14 f-500">Created on</p>
                <p className="f-600 font-16">Mar 20, 2019 23:14</p>
              </div>

              <div className="mb-2">
                <p className="text-grey font-14 f-500">Last active on</p>
                <p className="f-600 font-16">Dec 30, 2019 07:52</p>
              </div>
            </div>
            <div className="d-flex d-justify-space-between col-12 borderBottom mt-2">
              <div>
                <p className="text-grey font-14 f-500">Collection status</p>
                <div className="d-flex d-align-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z"
                      fill="#76716F"
                    />
                  </svg>{" "}
                  <p className="text-grey f-600">Unverified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-7 ">
        <div className="d-flex gap-4 accordionButtons">
          <button
            onClick={() => setSelectedTab("metadata")}
            className={` accordionButton ${
              selectedTab === "metadata" ? "accordionButtonSelected" : ""
            }`}
          >
            Metadata
          </button>

          <button
            onClick={() => setSelectedTab("attributes")}
            className={` accordionButton ${
              selectedTab === "attributes" ? "accordionButtonSelected" : ""
            }`}
          >
            Attributes
          </button>
        </div>

        {selectedTab === "metadata" && (
          <>
            <div className="d-flex d-flex-column mt-4">
              <p className="f-700 font-14">NFT DATA</p>

              <div className="d-flex d-justify-space-between d-align-left">
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Current Price</p>
                  <p className="font-14 f-600">12.7 Matic</p>
                </div>
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Sales end on</p>
                  <p className="font-14 f-600">Feb 28, 2022, 6:10 EST</p>
                </div>
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Highest bid</p>
                  <p className="font-14 f-600">14.6 MATIC</p>
                </div>
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Creator royalty</p>
                  <p className="font-14 f-600">5%</p>
                </div>
              </div>

              <div className="mt-2">
                <p className="font-14 f-600 text-grey">Favorited</p>
                <p className="font-14 f-600">238</p>
              </div>
            </div>

            <div className="d-flex d-flex-column mt-4">
              <p className="f-700 font-14">FRACTIONAL DATA</p>

              <div className="d-flex d-justify-space-between d-align-left">
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Total Fratctions</p>
                  <p className="font-14 f-600">16,969,696,969 SRC</p>
                </div>
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Unique owners</p>
                  <p className="font-14 f-600">11,953</p>
                </div>
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Collectable supply</p>
                  <p className="font-14 f-600">14.6%</p>
                  <p className="font-14 f-600 text-grey">
                    (2,351,656,054.16 MATIC)
                  </p>
                </div>
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Implied valuation</p>
                  <p className="font-14 f-600">12.7 MATIC</p>
                  <p className="font-14 f-600 text-grey">($12.5M)</p>
                </div>
              </div>
            </div>

            <div className="d-flex d-flex-column mt-4">
              <p className="f-700 font-14">ASSET DATA</p>

              <div className="d-flex d-justify-space-between d-align-left">
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Size</p>
                  <p className="font-14 f-600">1.24 MB</p>
                </div>
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Dimension</p>
                  <p className="font-14 f-600">2000*2000 px</p>
                </div>
                <div className="mt-2">
                  <p className="font-14 f-600 text-grey">Format</p>
                  <p className="font-14 f-600">JPG</p>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedTab === "attributes" && (
          <>
            <div className="d-flex d-flex-column mt-4 col-12">
              <p className="font-14 f-600 mb-2">PROPERTIES</p>

              <div className="d-flex gap-3">
                <div className="attibuteBox">
                  <p className="text-orange font-14 f-600">MOVE</p>
                  <p className="font-14 f-600">Blackmail</p>
                  <p className="text-grey font-14 f-500">2% have this trait</p>
                </div>

                <div className="attibuteBox">
                  <p className="text-green font-14 f-600">MOVE</p>
                  <p className="font-14 f-600">Blackmail</p>
                  <p className="text-grey font-14 f-500">2% have this trait</p>
                </div>

                <div className="attibuteBox">
                  <p className="text-grey font-14 f-600">MOVE</p>
                  <p className="font-14 f-600">Blackmail</p>
                  <p className="text-grey font-14 f-500">2% have this trait</p>
                </div>
              </div>

              <p className="font-14 f-600 mb-2 mt-4 mb-4">STATS</p>

              <div className="d-flex gap-3">
                <div className="attibuteBox">
                  <p className="text-orange font-14 f-600">
                    All Parts Total Points
                  </p>
                  <div className="progressBarRed"></div>
                  <p className="text-grey font-14 f-500">459 of 480</p>
                </div>

                <div className="attibuteBox">
                  <p className="text-green font-14 f-600">MOVE</p>
                  <div className="progressBarBlue"></div>
                  <p className="text-grey font-14 f-500">459 of 480</p>
                </div>

                <div className="attibuteBox">
                  <p className="text-grey font-14 f-600">MOVE</p>
                  <div className="progressBarGreen"></div>
                  <p className="text-grey font-14 f-500">459 of 480</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NftOverview;
