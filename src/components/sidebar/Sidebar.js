import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
// import { auth1, logout } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../../store/auth";
import { queries } from "@testing-library/react";
import profileAvatar from "../../assets/images/avatar.svg";

const Sidebar = (props) => {
  const [marketPlace, setOpenMarketPlace] = useState(false);
  const [revenue, setOpenRevenue] = useState(false);
  const [faq, setOpenFaq] = useState(false);

  //   const [user, loading, error] = useAuthState(auth);

  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //   const onLogOut = () => {
  //     logout(auth1);
  //     dispatch(authActions.setAuthentication(false));
  //     dispatch(authActions.loginUser(null));
  //   };

  //   useEffect(() => {
  //     // if (loading) {
  //     //   return;
  //     // }
  //     if (!user) {
  //       navigate("/login");
  //     }
  //   }, [user, loading]);

  return (
    <div className="container">
      <div className="dashboardView">
        <div className={`${styles.sidebar}`}>
          <div className={`${styles.menu}`}>
            <img src={logo} alt="logo" />
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/users"}
              className={styles.link}
              activeclassname="active"
              onClick={() => {
                setOpenMarketPlace(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M1.66602 18.3334C1.66602 14.6515 4.65078 11.6667 8.33268 11.6667C12.0146 11.6667 14.9993 14.6515 14.9993 18.3334H13.3327C13.3327 15.572 11.0941 13.3334 8.33268 13.3334C5.57126 13.3334 3.33268 15.572 3.33268 18.3334H1.66602ZM8.33268 10.8334C5.57018 10.8334 3.33268 8.59587 3.33268 5.83337C3.33268 3.07087 5.57018 0.833374 8.33268 0.833374C11.0952 0.833374 13.3327 3.07087 13.3327 5.83337C13.3327 8.59587 11.0952 10.8334 8.33268 10.8334ZM8.33268 9.16671C10.1743 9.16671 11.666 7.67504 11.666 5.83337C11.666 3.99171 10.1743 2.50004 8.33268 2.50004C6.49102 2.50004 4.99935 3.99171 4.99935 5.83337C4.99935 7.67504 6.49102 9.16671 8.33268 9.16671ZM15.2358 12.2524C17.553 13.2968 19.166 15.6267 19.166 18.3334H17.4993C17.4993 16.3034 16.2896 14.556 14.5517 13.7726L15.2358 12.2524ZM14.6628 2.84438C16.328 3.5309 17.4993 5.16972 17.4993 7.08337C17.4993 9.47521 15.6695 11.4377 13.3327 11.648V9.97054C14.7466 9.76854 15.8327 8.55337 15.8327 7.08337C15.8327 5.93283 15.1673 4.9384 14.2002 4.46367L14.6628 2.84438Z"
                  // fill="#252322"
                  fill={`${
                    location.pathname === "/users" ? "#252322" : "#76716f"
                  }`}
                />
              </svg>{" "}
              Users
            </NavLink>
            <NavLink
              onClick={() => {
                setOpenMarketPlace(!marketPlace);
                setOpenRevenue(false);
                setOpenFaq(false);
              }}
              // style={{ textDecoration: "none" }}
              to={"/marketPlace"}
              className={styles.link}
              activeclassname="active"
            >
              <div className="d-flex d-justify-space-between gap-2 col-12">
                <div className="d-flex gap-2 d-align-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.42057 1.66663H14.5873C14.8495 1.66663 15.0965 1.79012 15.2539 1.99996L17.5039 4.99996V17.5C17.5039 17.9602 17.1308 18.3333 16.6706 18.3333H3.33724C2.87701 18.3333 2.50391 17.9602 2.50391 17.5V4.99996L4.75391 1.99996C4.91129 1.79012 5.15828 1.66663 5.42057 1.66663ZM15.8373 6.66663H4.17057V16.6666H15.8373V6.66663ZM15.4206 4.99996L14.1706 3.33329H5.83724L4.58724 4.99996H15.4206ZM7.50391 8.33329V9.99996C7.50391 11.3807 8.62317 12.5 10.0039 12.5C11.3846 12.5 12.5039 11.3807 12.5039 9.99996V8.33329H14.1706V9.99996C14.1706 12.3011 12.3051 14.1666 10.0039 14.1666C7.70272 14.1666 5.83724 12.3011 5.83724 9.99996V8.33329H7.50391Z"
                      fill={`${
                        location.pathname === "/marketPlace"
                          ? "#252322"
                          : "#76716f"
                      }`}
                    />
                  </svg>{" "}
                  Market Place
                </div>

                <button
                  className="plusButtonSideBar"
                  onClick={() => setOpenMarketPlace(!marketPlace)}
                >
                  {!marketPlace ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="plusIconSideBar"
                    >
                      <path
                        d="M9.16602 9.16663V4.16663H10.8327V9.16663H15.8327V10.8333H10.8327V15.8333H9.16602V10.8333H4.16602V9.16663H9.16602Z"
                        fill="#76716F"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16602 9.1665V10.8332H15.8327V9.1665H4.16602Z"
                        fill="#76716F"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </NavLink>

            {marketPlace && (
              <div className={styles.userSubCategory}>
                <button
                  onClick={() => {
                    navigate("/marketPlace");
                  }}
                  className={`col-12 d-flex d-justify-left ${
                    location.pathname === "/marketPlace"
                      ? // ? location.pathname === "/marketPlace" ||
                        // location.pathname.includes("/marketPlace/nfts")
                        "selectedTab"
                      : "normalTab"
                  }`}
                >
                  NFTs
                </button>

                <button
                  onClick={() => {
                    navigate("/marketPlace/collections");
                  }}
                  className={` col-12 d-flex d-justify-left 
                    ${
                      location.pathname === "/marketPlace/collections" ||
                      location.pathname.includes("/marketPlace/collections")
                        ? "selectedTab"
                        : "normalTab"
                    }`}
                >
                  Collections
                </button>
                <button
                  onClick={() => {
                    navigate("/marketPlace/communityPosts");
                  }}
                  className={`  col-12 d-flex d-justify-left  ${
                    location.pathname === "/marketPlace/communityPosts" ||
                    location.pathname.includes("/marketPlace/communityPosts")
                      ? "selectedTab"
                      : "normalTab"
                  }`}
                >
                  Community posts
                </button>

                <button
                  onClick={() => {
                    navigate("/marketPlace/subscriptions");
                  }}
                  className={`  col-12 d-flex d-justify-left    ${
                    location.pathname === "/marketPlace/subscriptions" ||
                    location.pathname.includes("/marketPlace/subscriptions")
                      ? "selectedTab"
                      : "normalTab"
                  }`}
                >
                  Subscriptions{" "}
                </button>

                <button
                  onClick={() => {
                    navigate("/marketPlace/categories");
                  }}
                  className={`col-12 d-flex d-justify-left ${
                    location.pathname === "/marketPlace/categories" ||
                    location.pathname.includes("/marketPlace/categories")
                      ? "selectedTab"
                      : "normalTab"
                  }`}
                >
                  Categories{" "}
                </button>
              </div>
            )}
            <NavLink
              onClick={() => {
                setOpenMarketPlace(false);
                setOpenRevenue(true);
                setOpenFaq(false);
              }}
              style={{ textDecoration: "none" }}
              to={"/revenue"}
              className={styles.link}
              activeclassname="active"
            >
              <div className="d-flex d-justify-space-between gap-2 col-12">
                <div className="d-flex gap-2 d-align-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M2.49935 2.5H17.4993C17.9596 2.5 18.3327 2.8731 18.3327 3.33333V16.6667C18.3327 17.1269 17.9596 17.5 17.4993 17.5H2.49935C2.03912 17.5 1.66602 17.1269 1.66602 16.6667V3.33333C1.66602 2.8731 2.03912 2.5 2.49935 2.5ZM3.33268 4.16667V15.8333H16.666V4.16667H3.33268ZM5.83268 10.8333H7.49935V14.1667H5.83268V10.8333ZM9.16602 5.83333H10.8327V14.1667H9.16602V5.83333ZM12.4993 8.33333H14.166V14.1667H12.4993V8.33333Z"
                      fill="#76716F"
                    />
                  </svg>{" "}
                  Revenue
                </div>

                <button
                  className="plusButtonSideBar"
                  onClick={() => setOpenRevenue(!revenue)}
                >
                  {!revenue ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="plusIconSideBar"
                    >
                      <path
                        d="M9.16602 9.16663V4.16663H10.8327V9.16663H15.8327V10.8333H10.8327V15.8333H9.16602V10.8333H4.16602V9.16663H9.16602Z"
                        fill="#76716F"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16602 9.1665V10.8332H15.8327V9.1665H4.16602Z"
                        fill="#76716F"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </NavLink>

            {revenue && (
              <div className={styles.userSubCategory}>
                <button
                  onClick={() => {
                    navigate("/revenue");
                  }}
                  className={`col-12 d-flex d-justify-left  ${
                    location.pathname === "/revenue/queries" ||
                    location.pathname === "/revenue"
                      ? "selectedTab"
                      : "normalTab"
                  }`}
                >
                  Queries
                </button>

                <button
                  onClick={() => {
                    navigate("/revenue/commissionStructure");
                  }}
                  className={
                    location.pathname === "/revenue/commissionStructure" ||
                    location.pathname.includes("/revenue/commissionStructure")
                      ? "selectedTab"
                      : "normalTab"
                  }
                >
                  Commission Structure
                </button>

                <button
                  onClick={() => {
                    navigate("/revenue/subscriptionStructure");
                  }}
                  className={`  col-12 d-flex d-justify-left  ${
                    location.pathname === "/revenue/subscriptionStructure" ||
                    location.pathname.includes("/revenue/subscriptionStructure")
                      ? "selectedTab"
                      : "normalTab"
                  }`}
                >
                  Subscription structure
                </button>
              </div>
            )}
            <NavLink
              onClick={() => {
                setOpenMarketPlace(false);
                setOpenRevenue(false);
                setOpenFaq(false);
              }}
              style={{ textDecoration: "none" }}
              to={"/blog"}
              className={styles.link}
              activeclassname={styles.active}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333ZM15.8333 16.6666V3.33329H4.16667V16.6666H15.8333ZM6.66667 7.49996H13.3333V9.16663H6.66667V7.49996ZM6.66667 10.8333H13.3333V12.5H6.66667V10.8333Z"
                  fill="#76716F"
                />
              </svg>
              Blog
            </NavLink>

            <NavLink
              onClick={() => {
                setOpenMarketPlace(false);
                setOpenRevenue(false);
                setOpenFaq(false);
              }}
              style={{ textDecoration: "none" }}
              to={"/notifications"}
              className={styles.link}
              activeclassname={styles.active}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.666 14.1666H18.3327V15.8333H1.66602V14.1666H3.33268V8.33329C3.33268 4.65139 6.31745 1.66663 9.99935 1.66663C13.6813 1.66663 16.666 4.65139 16.666 8.33329V14.1666ZM14.9993 14.1666V8.33329C14.9993 5.57187 12.7608 3.33329 9.99935 3.33329C7.23792 3.33329 4.99935 5.57187 4.99935 8.33329V14.1666H14.9993ZM7.49935 17.5H12.4993V19.1666H7.49935V17.5Z"
                  fill="#76716F"
                />
              </svg>{" "}
              Notifications
            </NavLink>

            <NavLink
              onClick={() => {
                setOpenMarketPlace(false);
                setOpenRevenue(false);
                setOpenFaq(false);
              }}
              style={{ textDecoration: "none" }}
              to={"/supportRequests"}
              className={styles.link}
              activeclassname={styles.active}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.3327 14.1685C18.3319 16.5609 16.6507 18.5605 14.4054 19.0513L13.8737 17.4563C14.877 17.2925 15.7298 16.6809 16.2201 15.8333H14.166C13.2455 15.8333 12.4993 15.0871 12.4993 14.1666V10.8333C12.4993 9.91279 13.2455 9.16663 14.166 9.16663H16.6144C16.2044 5.87803 13.399 3.33329 9.99935 3.33329C6.59967 3.33329 3.79434 5.87803 3.38426 9.16663H5.83268C6.75316 9.16663 7.49935 9.91279 7.49935 10.8333V14.1666C7.49935 15.0871 6.75316 15.8333 5.83268 15.8333H3.33268C2.41221 15.8333 1.66602 15.0871 1.66602 14.1666V9.99996C1.66602 5.39758 5.39697 1.66663 9.99935 1.66663C14.6017 1.66663 18.3327 5.39758 18.3327 9.99996V10.8322V10.8333V14.1666V14.1685ZM16.666 14.1666V10.8333H14.166V14.1666H16.666ZM3.33268 10.8333V14.1666H5.83268V10.8333H3.33268Z"
                  fill="#76716F"
                />
              </svg>{" "}
              Support Requests
            </NavLink>

            <NavLink
              onClick={() => {
                setOpenMarketPlace(false);
                setOpenRevenue(false);
                setOpenFaq(false);
              }}
              style={{ textDecoration: "none" }}
              to={"/faqs"}
              className={styles.link}
              activeclassname="active"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99935 18.3333C5.39697 18.3333 1.66602 14.6023 1.66602 9.99996C1.66602 5.39758 5.39697 1.66663 9.99935 1.66663C14.6017 1.66663 18.3327 5.39758 18.3327 9.99996C18.3327 14.6023 14.6017 18.3333 9.99935 18.3333ZM9.99935 16.6666C13.6813 16.6666 16.666 13.6819 16.666 9.99996C16.666 6.31806 13.6813 3.33329 9.99935 3.33329C6.31745 3.33329 3.33268 6.31806 3.33268 9.99996C3.33268 13.6819 6.31745 16.6666 9.99935 16.6666ZM9.16602 12.5H10.8327V14.1666H9.16602V12.5ZM10.8327 11.1292V11.6666H9.16602V10.4166C9.16602 9.95638 9.5391 9.58329 9.99935 9.58329C10.6897 9.58329 11.2493 9.02363 11.2493 8.33329C11.2493 7.64293 10.6897 7.08329 9.99935 7.08329C9.39293 7.08329 8.88735 7.51515 8.77335 8.0881L7.13877 7.76118C7.40466 6.42428 8.58435 5.41663 9.99935 5.41663C11.6102 5.41663 12.916 6.72246 12.916 8.33329C12.916 9.65454 12.0374 10.7706 10.8327 11.1292Z"
                  fill="#76716F"
                />
              </svg>{" "}
              FAQs
            </NavLink>

            {faq && (
              <div className={styles.userSubCategory}>
                <button
                  onClick={() => {
                    navigate("/faqs");
                  }}
                  className={
                    location.pathname === "/faqs/queries" ||
                    location.pathname === "/faqs" ||
                    location.pathname.includes("/faqs/queries")
                      ? "selectedTab"
                      : "normalTab"
                  }
                >
                  Queries
                </button>

                <button
                  onClick={() => {
                    navigate("/faqs/categories");
                  }}
                  className={
                    location.pathname === "/faqs/categories" ||
                    location.pathname.includes("/faqs/categories")
                      ? "selectedTab"
                      : "normalTab"
                  }
                >
                  Categories
                </button>
              </div>
            )}

            <NavLink
              onClick={() => {
                setOpenMarketPlace(false);
                setOpenRevenue(false);
                setOpenFaq(false);
              }}
              style={{ textDecoration: "none" }}
              to={"/feedback"}
              className={styles.link}
              activeclassname="active"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.37814 15.8333L1.66602 18.75V3.33333C1.66602 2.8731 2.03912 2.5 2.49935 2.5H17.4993C17.9596 2.5 18.3327 2.8731 18.3327 3.33333V15C18.3327 15.4602 17.9596 15.8333 17.4993 15.8333H5.37814ZM3.33268 15.3209L4.8017 14.1667H16.666V4.16667H3.33268V15.3209ZM9.16602 10.8333H10.8327V12.5H9.16602V10.8333ZM9.16602 5.83333H10.8327V10H9.16602V5.83333Z"
                  fill="#76716F"
                />
              </svg>{" "}
              Feedback
            </NavLink>

            <div className="sideBarProfile">
              <div className="d-flex d-align-center gap-2">
                <img src={profileAvatar} alt="Avatar"></img>
                <p>Cristine</p>
              </div>
              {/* 
              <option
                value={"Settings"}
                className="d-flex d-justify-space-between"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M1.66699 9.99983C1.66699 9.27942 1.75841 8.58033 1.93028 7.91359C2.83884 7.96069 3.74073 7.50846 4.22683 6.66652C4.71255 5.82521 4.65371 4.81892 4.15967 4.05584C5.15328 3.07941 6.39059 2.35018 7.77202 1.96777C8.18549 2.77821 9.02808 3.33318 10.0003 3.33318C10.9726 3.33318 11.8152 2.77821 12.2287 1.96777C13.6101 2.35018 14.8474 3.07941 15.841 4.05584C15.3469 4.81892 15.2881 5.82521 15.7738 6.66652C16.2599 7.50846 17.1618 7.96069 18.0704 7.91359C18.2422 8.58033 18.3337 9.27942 18.3337 9.99983C18.3337 10.7202 18.2422 11.4193 18.0704 12.0861C17.1618 12.039 16.2599 12.4912 15.7738 13.3332C15.2881 14.1745 15.3469 15.1807 15.841 15.9438C14.8474 16.9202 13.6101 17.6495 12.2287 18.0319C11.8152 17.2215 10.9726 16.6665 10.0003 16.6665C9.02808 16.6665 8.18549 17.2215 7.77202 18.0319C6.39059 17.6495 5.15328 16.9202 4.15967 15.9438C4.65371 15.1807 4.71255 14.1745 4.22683 13.3332C3.74073 12.4912 2.83884 12.039 1.93028 12.0861C1.75841 11.4193 1.66699 10.7202 1.66699 9.99983ZM5.6702 12.4998C6.19528 13.4093 6.34581 14.4549 6.14048 15.4363C6.4803 15.6782 6.84203 15.8877 7.22107 16.0617C7.96846 15.3927 8.94966 14.9998 10.0003 14.9998C11.051 14.9998 12.0322 15.3927 12.7796 16.0617C13.1586 15.8877 13.5203 15.6782 13.8602 15.4363C13.6548 14.4549 13.8053 13.4093 14.3305 12.4998C14.8555 11.5904 15.6857 10.9373 16.6382 10.6244C16.6573 10.4179 16.667 10.2097 16.667 9.99983C16.667 9.79008 16.6573 9.58175 16.6382 9.37533C15.6857 9.06242 14.8555 8.40933 14.3305 7.49985C13.8053 6.59037 13.6548 5.54482 13.8602 4.56337C13.5203 4.32157 13.1586 4.11206 12.7796 3.93793C12.0322 4.60703 11.051 4.99985 10.0003 4.99985C8.94966 4.99985 7.96846 4.60703 7.22107 3.93793C6.84203 4.11206 6.4803 4.32157 6.14048 4.56337C6.34581 5.54482 6.19528 6.59037 5.6702 7.49985C5.14513 8.40933 4.31494 9.06242 3.36242 9.37533C3.3433 9.58175 3.33366 9.79008 3.33366 9.99983C3.33366 10.2097 3.3433 10.4179 3.36242 10.6244C4.31494 10.9373 5.14513 11.5904 5.6702 12.4998ZM10.0003 12.4998C8.61958 12.4998 7.50033 11.3806 7.50033 9.99983C7.50033 8.61916 8.61958 7.49985 10.0003 7.49985C11.3811 7.49985 12.5003 8.61916 12.5003 9.99983C12.5003 11.3806 11.3811 12.4998 10.0003 12.4998ZM10.0003 10.8332C10.4606 10.8332 10.8337 10.4601 10.8337 9.99983C10.8337 9.53958 10.4606 9.1665 10.0003 9.1665C9.54008 9.1665 9.16699 9.53958 9.16699 9.99983C9.16699 10.4601 9.54008 10.8332 10.0003 10.8332Z"
                    fill="#252322"
                  />
                </svg>
                Settings
              </option>
              <option
                className="d-flex d-justify-space-between"
                value={"Log out"}
              >
                Log out{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0003 9.1665V6.6665L13.3337 9.99984L10.0003 13.3332V10.8332H6.66699V9.1665H10.0003ZM10.0003 1.6665C14.6003 1.6665 18.3337 5.39984 18.3337 9.99984C18.3337 14.5998 14.6003 18.3332 10.0003 18.3332C5.40033 18.3332 1.66699 14.5998 1.66699 9.99984C1.66699 5.39984 5.40033 1.6665 10.0003 1.6665ZM10.0003 16.6665C13.6837 16.6665 16.667 13.6832 16.667 9.99984C16.667 6.3165 13.6837 3.33317 10.0003 3.33317C6.31699 3.33317 3.33366 6.3165 3.33366 9.99984C3.33366 13.6832 6.31699 16.6665 10.0003 16.6665Z"
                    fill="#E84D3C"
                  />
                </svg>
              </option> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                  fill="#76716F"
                />
              </svg>
            </div>
          </div>
        </div>
        <main className={styles.rightSide}>{props.children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
