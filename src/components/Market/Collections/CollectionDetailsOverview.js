import React from "react";
import nftImage from "../../../assets/images/nftImageBig.png";
import nftImageSmall from "../../../assets/images/nftImage.png";
import avatar from "../../../assets/images/avatar.png";

const CollectionOverview = () => {
  return (
    <div className="d-flex col-12">
      <div className="col-4 borderRight">
        <div className="d-flex col-12 d-flex-column gap-2 nftDetailsCol1 d-align-start">
          <img className="col-11" src={nftImage} alt="nftImage" />
          <p className="font-20 f-700">Otherdeed Sinners</p>
          <p className="f-500 font-14">
            I make art with the simple goal of giving you something pleasing to
            look at for a few seconds.
          </p>
          <div className="d-flex d-align-center gap-4">
            <button className="socialMedia">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17 5.625 21.125 10.375 21.875V14.875H7.875V12H10.375V9.75C10.375 7.25 11.875 5.875 14.125 5.875C15.25 5.875 16.375 6.125 16.375 6.125V8.625H15.125C13.875 8.625 13.5 9.375 13.5 10.125V12H16.25L15.75 14.875H13.375V22C18.375 21.25 22 17 22 12Z"
                  fill="#242424"
                />
              </svg>
            </button>
            <button className="socialMedia">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 5.875C21.25 6.25 20.5 6.375 19.625 6.5C20.5 6 21.125 5.25 21.375 4.25C20.625 4.75 19.75 5 18.75 5.25C18 4.5 16.875 4 15.75 4C13.125 4 11.125 6.5 11.75 9C8.375 8.875 5.375 7.25 3.25 4.75C2.125 6.625 2.75 9 4.5 10.25C3.875 10.25 3.25 10 2.625 9.75C2.625 11.625 4 13.375 5.875 13.875C5.25 14 4.625 14.125 4 14C4.5 15.625 6 16.875 7.875 16.875C6.375 18 4.125 18.625 2 18.375C3.875 19.5 6 20.25 8.25 20.25C15.875 20.25 20.125 13.875 19.875 8C20.75 7.5 21.5 6.75 22 5.875Z"
                  fill="#242424"
                />
              </svg>
            </button>
            <button className="socialMedia">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM9.71 19.667C8.72341 17.5743 8.15187 15.3102 8.027 13H4.062C4.25659 14.5389 4.89392 15.9882 5.89657 17.1717C6.89922 18.3552 8.22401 19.2221 9.71 19.667ZM10.03 13C10.181 15.439 10.878 17.73 12 19.752C13.1523 17.6766 13.8254 15.3695 13.97 13H10.03ZM19.938 13H15.973C15.8481 15.3102 15.2766 17.5743 14.29 19.667C15.776 19.2221 17.1008 18.3552 18.1034 17.1717C19.1061 15.9882 19.7434 14.5389 19.938 13ZM4.062 11H8.027C8.15187 8.68979 8.72341 6.42569 9.71 4.333C8.22401 4.77788 6.89922 5.64475 5.89657 6.8283C4.89392 8.01184 4.25659 9.4611 4.062 11ZM10.031 11H13.969C13.8248 8.6306 13.152 6.32353 12 4.248C10.8477 6.32345 10.1746 8.63052 10.03 11H10.031ZM14.29 4.333C15.2766 6.42569 15.8481 8.68979 15.973 11H19.938C19.7434 9.4611 19.1061 8.01184 18.1034 6.8283C17.1008 5.64475 15.776 4.77788 14.29 4.333Z"
                  fill="#242424"
                />
              </svg>
            </button>
            <button className="socialMedia">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                  fill="#242424"
                />
              </svg>
            </button>
          </div>
          <div className="d-flex d-flex-column d-align-start col-12">
            <p className="f-600 font-14 mb-2"> COLLECTION DETAILS</p>
            <p className="text-grey font-14 mb-2">Creator</p>
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
                <p className="text-grey font-14 f-500">Collection ID</p>
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

              <div>
                <p className="text-grey font-14 f-500">
                  Eligible for verification
                </p>
                <div className="d-flex d-align-center gap-2 mb-2">
                  <p className="text-grey f-600">No</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-7 ">
        <div className="d-flex d-flex-column mt-4">
          <p className="f-700 font-14">ITEMS</p>

          <div className="d-flex d-justify-space-between d-align-left">
            <div className="mt-2">
              <p className="font-14 f-600 text-grey">Items</p>
              <p className="font-14 f-600">10</p>
            </div>
            <div className="mt-2">
              <p className="font-14 f-600 text-grey">Owners</p>
              <p className="font-14 f-600">7</p>
            </div>
            <div className="mt-2">
              <p className="font-14 f-600 text-grey">Total Volume</p>
              <p className="font-14 f-600">325.4K ETH</p>
            </div>
            <div className="mt-2">
              <p className="font-14 f-600 text-grey">Floor price</p>
              <p className="font-14 f-600">2.55 ETH</p>
            </div>
          </div>

          <div className="d-flex mt-4 gap-5">
            <div className="mt-2">
              <p className="font-14 f-600 text-grey">Best offer</p>
              <p className="font-14 f-600">2.38 ETH</p>
            </div>
            <div className="mt-2">
              <p className="font-14 f-600 text-grey">Favorited</p>
              <p className="font-14 f-600">238</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionOverview;
