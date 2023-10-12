import React, { useState } from "react";
import pic from "../../../assets/images/avatar.png";
import nftImage from "../../../assets/images/nftImage.png";
import Table from "../../../components/Table template/Table";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

const AllPosts = () => {
  const navigate = useNavigate();
  const dummy = [
    {
      itemImage: nftImage,
      title:
        "Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It seems to be sentient . . . What does it do",
      activityStatus: "Active",
      id: "0x39a02...1e791",
      likes: "23",
      comments: "35",
      ownerPic: pic,
      ownerName: "Henry Flat",
      dateReceived: "Feb 27, 2022, 23:57",
    },

    {
      itemImage: nftImage,
      title:
        "Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It seems to be sentient . . . What does it do",
      activityStatus: "Active",
      id: "0x39a02...1e791",
      likes: "23",
      comments: "35",
      ownerPic: pic,
      ownerName: "Henry Flat",
      dateReceived: "Feb 27, 2022, 23:57",
    },
    {
      itemImage: nftImage,
      title:
        "Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It seems to be sentient . . . What does it do",
      activityStatus: "Active",
      id: "0x39a02...1e791",
      likes: "23",
      comments: "35",
      ownerPic: pic,
      ownerName: "Henry Flat",
      dateReceived: "Feb 27, 2022, 23:57",
    },
    {
      itemImage: nftImage,
      title:
        "Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It seems to be sentient . . . What does it do",
      activityStatus: "Active",
      id: "0x39a02...1e791",
      likes: "23",
      comments: "35",
      ownerPic: pic,
      ownerName: "Henry Flat",
      dateReceived: "Feb 27, 2022, 23:57",
    },
    {
      itemImage: nftImage,
      title:
        "Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It seems to be sentient . . . What does it do",
      activityStatus: "Active",
      id: "0x39a02...1e791",
      likes: "23",
      comments: "35",
      ownerPic: pic,
      ownerName: "Henry Flat",
      dateReceived: "Feb 27, 2022, 23:57",
    },
    {
      itemImage: nftImage,
      title:
        "Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It seems to be sentient . . . What does it do",
      activityStatus: "Active",
      id: "0x39a02...1e791",
      likes: "23",
      comments: "35",
      ownerPic: pic,
      ownerName: "Henry Flat",
      dateReceived: "Feb 27, 2022, 23:57",
    },
    {
      itemImage: nftImage,
      title:
        "Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It seems to be sentient . . . What does it do",
      activityStatus: "Active",
      id: "0x39a02...1e791",
      likes: "23",
      comments: "35",
      ownerPic: pic,
      ownerName: "Henry Flat",
      dateReceived: "Feb 27, 2022, 23:57",
    },
    {
      itemImage: nftImage,
      title:
        "Behold a mysterious MNLTH, etched with Nike & RTFKT markings. It seems to be sentient . . . What does it do",
      activityStatus: "Active",
      id: "0x39a02...1e791",
      likes: "23",
      comments: "35",
      ownerPic: pic,
      ownerName: "Henry Flat",
      dateReceived: "Feb 27, 2022, 23:57",
    },
  ];

  const columnActivityTable = [
    {
      Header: () => <p className="text-left f-400 font-14 ">Post</p>,
      accessor: "title",
      Cell: (tableProps) => (
        <div
          className="d-flex gap-2"
          onClick={() => navigate("/marketPlace/post")}
        >
          <img src={tableProps.row.original.itemImage} />
          <p className="font-14 f-600">{tableProps.row.original.title}</p>
        </div>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">User</p>,

      accessor: "senderName, id",
      Cell: (tableProps) => (
        <div className="d-flex gap-2">
          <img src={tableProps.row.original.ownerPic} alt="userImg" />
          <div className="d-flex d-flex-column">
            <p className=" font-14">{tableProps.row.original.ownerName}</p>
            <p className="text-grey">{tableProps.row.original.id}</p>
          </div>
        </div>
      ),
    },
    {
      Header: () => <p className="text-left f-400 font-14 ">Likes</p>,

      accessor: "likes",
      Cell: (tableProps) => (
        <p className="text-grey f-500 col-4">{tableProps.row.original.likes}</p>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Comments</p>,

      accessor: "comments",
      Cell: (tableProps) => (
        <p className="text-grey f-500"> {tableProps.row.original.comments}</p>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Date created</p>,

      accessor: "dateReceived",
      Cell: (tableProps) => (
        <p className="">{tableProps.row.original.dateReceived}</p>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Activity status</p>,

      accessor: "activityStatus",
      Cell: (tableProps) => (
        <div className="activeStatus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#099C4F" />
          </svg>
          <p className="font-16">{tableProps.row.original.activityStatus}</p>
        </div>
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
              d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
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

export default AllPosts;
