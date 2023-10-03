import React, { useState } from "react";
import pic from "../../../../assets/images/avatar.png";
import itemPic from "../../../../assets/images/itemPic.png";

import Table from "../../../../components/Table template/Table";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

const Activity = () => {
  const navigate = useNavigate();
  const dummy = [
    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.08602 1.75012L17.3356 2.92863L18.5141 11.1782L10.8538 18.8385C10.5284 19.164 10.0008 19.164 9.67527 18.8385L1.42572 10.589C1.10028 10.2635 1.10028 9.73587 1.42572 9.41046L9.08602 1.75012ZM9.67527 3.51789L3.19349 9.99971L10.2645 17.0708L16.7464 10.589L15.8625 4.40177L9.67527 3.51789ZM11.4431 8.82121C10.7922 8.17031 10.7922 7.11504 11.4431 6.46416C12.0939 5.81329 13.1492 5.81329 13.8001 6.46416C14.4509 7.11504 14.4509 8.17031 13.8001 8.82121C13.1492 9.47204 12.0939 9.47204 11.4431 8.82121Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "List",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },
    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.33659 13.3333V3.33329H1.66992V1.66663H4.16992C4.63016 1.66663 5.00326 2.03973 5.00326 2.49996V12.5H15.3686L17.0353 5.83329H6.66992V4.16663H18.1026C18.5629 4.16663 18.9359 4.53973 18.9359 4.99996C18.9359 5.06809 18.9276 5.13598 18.911 5.20208L16.8277 13.5354C16.735 13.9064 16.4017 14.1666 16.0193 14.1666H4.16992C3.70969 14.1666 3.33659 13.7935 3.33659 13.3333ZM5.00326 19.1666C4.08278 19.1666 3.33659 18.4205 3.33659 17.5C3.33659 16.5795 4.08278 15.8333 5.00326 15.8333C5.92373 15.8333 6.66992 16.5795 6.66992 17.5C6.66992 18.4205 5.92373 19.1666 5.00326 19.1666ZM15.0033 19.1666C14.0828 19.1666 13.3366 18.4205 13.3366 17.5C13.3366 16.5795 14.0828 15.8333 15.0033 15.8333C15.9238 15.8333 16.6699 16.5795 16.6699 17.5C16.6699 18.4205 15.9238 19.1666 15.0033 19.1666Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "Sale",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },
    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.08602 1.75012L17.3356 2.92863L18.5141 11.1782L10.8538 18.8385C10.5284 19.164 10.0008 19.164 9.67527 18.8385L1.42572 10.589C1.10028 10.2635 1.10028 9.73587 1.42572 9.41046L9.08602 1.75012ZM9.67527 3.51789L3.19349 9.99971L10.2645 17.0708L16.7464 10.589L15.8625 4.40177L9.67527 3.51789ZM11.4431 8.82121C10.7922 8.17031 10.7922 7.11504 11.4431 6.46416C12.0939 5.81329 13.1492 5.81329 13.8001 6.46416C14.4509 7.11504 14.4509 8.17031 13.8001 8.82121C13.1492 9.47204 12.0939 9.47204 11.4431 8.82121Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "List",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },
    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.08602 1.75012L17.3356 2.92863L18.5141 11.1782L10.8538 18.8385C10.5284 19.164 10.0008 19.164 9.67527 18.8385L1.42572 10.589C1.10028 10.2635 1.10028 9.73587 1.42572 9.41046L9.08602 1.75012ZM9.67527 3.51789L3.19349 9.99971L10.2645 17.0708L16.7464 10.589L15.8625 4.40177L9.67527 3.51789ZM11.4431 8.82121C10.7922 8.17031 10.7922 7.11504 11.4431 6.46416C12.0939 5.81329 13.1492 5.81329 13.8001 6.46416C14.4509 7.11504 14.4509 8.17031 13.8001 8.82121C13.1492 9.47204 12.0939 9.47204 11.4431 8.82121Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "List",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },

    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.08602 1.75012L17.3356 2.92863L18.5141 11.1782L10.8538 18.8385C10.5284 19.164 10.0008 19.164 9.67527 18.8385L1.42572 10.589C1.10028 10.2635 1.10028 9.73587 1.42572 9.41046L9.08602 1.75012ZM9.67527 3.51789L3.19349 9.99971L10.2645 17.0708L16.7464 10.589L15.8625 4.40177L9.67527 3.51789ZM11.4431 8.82121C10.7922 8.17031 10.7922 7.11504 11.4431 6.46416C12.0939 5.81329 13.1492 5.81329 13.8001 6.46416C14.4509 7.11504 14.4509 8.17031 13.8001 8.82121C13.1492 9.47204 12.0939 9.47204 11.4431 8.82121Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "List",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },
    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.08602 1.75012L17.3356 2.92863L18.5141 11.1782L10.8538 18.8385C10.5284 19.164 10.0008 19.164 9.67527 18.8385L1.42572 10.589C1.10028 10.2635 1.10028 9.73587 1.42572 9.41046L9.08602 1.75012ZM9.67527 3.51789L3.19349 9.99971L10.2645 17.0708L16.7464 10.589L15.8625 4.40177L9.67527 3.51789ZM11.4431 8.82121C10.7922 8.17031 10.7922 7.11504 11.4431 6.46416C12.0939 5.81329 13.1492 5.81329 13.8001 6.46416C14.4509 7.11504 14.4509 8.17031 13.8001 8.82121C13.1492 9.47204 12.0939 9.47204 11.4431 8.82121Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "List",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },
    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M13.3752 10.0415L17.5 14.1663L13.3752 18.291L12.1967 17.1125L14.31 14.999L3.33333 14.9996V13.333L14.31 13.3323L12.1967 11.22L13.3752 10.0415ZM6.62479 1.70813L7.8033 2.88665L5.69 4.99896L16.6667 4.99959V6.66625L5.69 6.66563L7.8033 8.77921L6.62479 9.95771L2.5 5.83292L6.62479 1.70813Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "Transfer",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },
    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.7369 12.6665L17.7386 13.2676C17.9359 13.386 17.9999 13.6419 17.8816 13.8393C17.8463 13.8978 17.7972 13.9469 17.7386 13.9822L10.4295 18.3676C10.1656 18.5259 9.8359 18.5259 9.57198 18.3676L2.26291 13.9822C2.06558 13.8638 2.00159 13.6078 2.11999 13.4105C2.15517 13.3518 2.20426 13.3028 2.26291 13.2676L3.26465 12.6665L10.0007 16.7082L16.7369 12.6665ZM16.7369 8.74984L17.7386 9.35092C17.9359 9.46934 17.9999 9.72525 17.8816 9.92259C17.8463 9.98117 17.7972 10.0303 17.7386 10.0655L10.0007 14.7082L2.26291 10.0655C2.06558 9.94709 2.00159 9.69117 2.11999 9.49384C2.15517 9.43517 2.20426 9.38609 2.26291 9.35092L3.26465 8.74984L10.0007 12.7915L16.7369 8.74984ZM10.4295 1.09044L17.7386 5.4759C17.9359 5.59429 17.9999 5.85024 17.8816 6.04756C17.8463 6.10621 17.7972 6.15529 17.7386 6.19048L10.0007 10.8332L2.26291 6.19048C2.06558 6.07209 2.00159 5.81614 2.11999 5.61882C2.15517 5.56017 2.20426 5.51109 2.26291 5.4759L9.57198 1.09044C9.8359 0.932094 10.1656 0.932094 10.4295 1.09044ZM10.0007 2.77684L4.90684 5.83319L10.0007 8.8895L15.0946 5.83319L10.0007 2.77684Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "Coll. Offer",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },
    {
      typeSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.33659 13.3333V3.33329H1.66992V1.66663H4.16992C4.63016 1.66663 5.00326 2.03973 5.00326 2.49996V12.5H15.3686L17.0353 5.83329H6.66992V4.16663H18.1026C18.5629 4.16663 18.9359 4.53973 18.9359 4.99996C18.9359 5.06809 18.9276 5.13598 18.911 5.20208L16.8277 13.5354C16.735 13.9064 16.4017 14.1666 16.0193 14.1666H4.16992C3.70969 14.1666 3.33659 13.7935 3.33659 13.3333ZM5.00326 19.1666C4.08278 19.1666 3.33659 18.4205 3.33659 17.5C3.33659 16.5795 4.08278 15.8333 5.00326 15.8333C5.92373 15.8333 6.66992 16.5795 6.66992 17.5C6.66992 18.4205 5.92373 19.1666 5.00326 19.1666ZM15.0033 19.1666C14.0828 19.1666 13.3366 18.4205 13.3366 17.5C13.3366 16.5795 14.0828 15.8333 15.0033 15.8333C15.9238 15.8333 16.6699 16.5795 16.6699 17.5C16.6699 18.4205 15.9238 19.1666 15.0033 19.1666Z"
            fill="#252322"
          />
        </svg>
      ),
      typeName: "Sale",
      priceEth: "0.0042",
      priceUs: "7.35",
      id: "0x39a02...1e791",
      receiverPic: pic,
      receiverName: "Henry Flat",
      senderName: "Henry Flat",
      senderPic: pic,
      dateReceived: "Feb 27, 2022, 23:57",
      itemPic: itemPic,
      itemName: "Maroon",
      itemCollectionName: "GreyCollection",
      quantity: "12",
    },
  ];

  const columnActivityTable = [
    {
      Header: () => <p className="text-left f-400 font-14 ">Type</p>,
      accessor: "typeName",
      Cell: (tableProps) => (
        <div className="typeTagActivityTable">
          {tableProps.row.original.typeSVG}
          <p className="font-14 f-600">{tableProps.row.original.typeName}</p>
        </div>
      ),
    },
    {
      Header: () => <p className="text-left f-400 font-14 ">Price</p>,

      accessor: "priceUs",
      Cell: (tableProps) => (
        <div className="d-flex d-flex-column">
          <p className="font-14 f-600">
            ETH {tableProps.row.original.priceEth}
          </p>
          <p className="text-grey f-500">$ {tableProps.row.original.priceUs}</p>
        </div>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Quanity</p>,
      accessor: "quantity",
      Cell: (tableProps) => (
        <p className="font-14 f-500">{tableProps.row.original.quantity}</p>
      ),
    },
    {
      Header: () => <p className="text-left f-400 font-14 ">Item</p>,
      accessor: "item",
      Cell: (tableProps) => (
        <div className="d-flex gap-2">
          <img src={tableProps.row.original.itemPic} />
          <div className="d-flex d-flex-column">
            <p className="font-14 f-700">{tableProps.row.original.itemName}</p>
            <p className="font-14 text-grey f-700">
              {tableProps.row.original.itemCollectionName}
            </p>
          </div>
        </div>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Sender</p>,

      accessor: "senderName, id",
      Cell: (tableProps) => (
        <div className="d-flex gap-2" onClick={() => navigate("/users/user")}>
          <img src={tableProps.row.original.senderPic} alt="userImg" />
          <div className="d-flex d-flex-column">
            <p className=" font-14">{tableProps.row.original.senderName}</p>
            <p className="text-grey">{tableProps.row.original.id}</p>
          </div>
        </div>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Receiver</p>,

      accessor: "receiverName, id",
      Cell: (tableProps) => (
        <div className="d-flex gap-2" onClick={() => navigate("/users/user")}>
          <img src={tableProps.row.original.receiverPic} alt="userImg" />
          <div className="d-flex d-flex-column">
            <p className=" font-14">{tableProps.row.original.receiverName}</p>
            <p className="text-grey">{tableProps.row.original.id}</p>
          </div>
        </div>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Date received</p>,

      accessor: "dateReceived",
      Cell: (tableProps) => (
        <p className="">{tableProps.row.original.dateReceived}</p>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 "></p>,

      accessor: "aa",
      Cell: () => (
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
      ),
    },
  ];

  const sortByOptions = [
    { label: "This week", value: "thisWeek" },

    { label: "Last week", value: "lastWeek" },

    { label: "Last month", value: "lastMonth" },

    { label: "Last year", value: "lastYear" },
  ];
  const entiresPerPageOptions = [
    { label: "20", value: "20" },
    { label: "30", value: "30" },
  ];

  const [entriesPerPage, setEntriesPerPage] = useState("20");
  const [sortValue, setSortValue] = React.useState("This week");

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };

  const handleEntryChange = (event) => {
    setEntriesPerPage(event.target.value);
  };

  return (
    <div className="col-12 mt-4">
      <div className="d-flex d-justify-space-between d-align-center mb-4">
        <div className="d-flex gap-5">
          <div className="tableSearch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.0252 13.8475L18.5943 17.4158L17.4152 18.595L13.8469 15.0258C12.5191 16.0901 10.8677 16.669 9.16602 16.6666C5.02602 16.6666 1.66602 13.3066 1.66602 9.16663C1.66602 5.02663 5.02602 1.66663 9.16602 1.66663C13.306 1.66663 16.666 5.02663 16.666 9.16663C16.6684 10.8683 16.0895 12.5197 15.0252 13.8475ZM13.3535 13.2291C14.4111 12.1415 15.0017 10.6837 14.9993 9.16663C14.9993 5.94329 12.3885 3.33329 9.16602 3.33329C5.94268 3.33329 3.33268 5.94329 3.33268 9.16663C3.33268 12.3891 5.94268 15 9.16602 15C10.683 15.0023 12.1409 14.4117 13.2285 13.3541L13.3535 13.2291Z"
                fill="#76716F"
              />
            </svg>

            <input placeholder="Search by username ,address or ID" />
          </div>

          <button className="filterButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33333 15H11.6667V13.3333H8.33333V15ZM2.5 5V6.66667H17.5V5H2.5ZM5 10.8333H15V9.16667H5V10.8333Z"
                fill="#76716F"
              />
            </svg>
            Filters
          </button>
        </div>

        <Dropdown
          label={"Sort by"}
          options={sortByOptions}
          onChange={handleChange}
          value={sortValue}
        />
      </div>
      <Table tableData={dummy} tableColumns={columnActivityTable} />

      <div className="d-flex d-justify-space-between d-align-center mb-4 mt-4">
        <Dropdown
          label={"Entries per page"}
          options={entiresPerPageOptions}
          onChange={handleEntryChange}
          value={entriesPerPage}
        />

        <div className="d-flex gap-3">
          <div className="jumpToPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.52434 9.16658H16.6673V10.8332H6.52434L10.9943 15.3032L9.81582 16.4817L3.33398 9.99992L9.81582 3.51807L10.9943 4.69657L6.52434 9.16658Z"
                fill="#76716F"
              />
            </svg>
          </div>

          <div className="jumpToPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.477 9.16658L9.00698 4.69657L10.1855 3.51807L16.6673 9.99992L10.1855 16.4817L9.00698 15.3032L13.477 10.8332H3.33398V9.16658H13.477Z"
                fill="#76716F"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
