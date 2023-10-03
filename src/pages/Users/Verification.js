import React, { useState } from "react";
import pic from "../../assets/images/avatar.png";
import Table from "../../components/Table template/Table";
import Dropdown from "../../components/Dropdown/Dropdown";
import SuspendUserModal from "./Modal/SuspendUser";

const VerificationTable = () => {
  const dummy = [
    {
      image: pic,
      name: "Henry Flat",
      id: "0x39a02...1e791",
      joiningDate: "Feb 27, 2022, 23:57",
      owned: "12",
      created: "12",
      posts: "12",
      activityStatus: "Active",
      verificationStatus: "Unverified",
    },
    {
      image: pic,
      name: "Henry Flat",
      id: "0x39a02...1e791",
      joiningDate: "Feb 27, 2022, 23:57",
      owned: "12",
      created: "12",
      posts: "12",
      activityStatus: "Active",
      verificationStatus: false,
    },
    {
      image: pic,
      name: "Henry Flat",
      id: "0x39a02...1e791",
      joiningDate: "Feb 27, 2022, 23:57",
      owned: "12",
      created: "12",
      posts: "12",
      activityStatus: "Active",
      verificationStatus: false,
    },
    {
      image: pic,
      name: "Henry Flat",
      id: "0x39a02...1e791",
      joiningDate: "Feb 27, 2022, 23:57",
      owned: "12",
      created: "12",
      posts: "12",
      activityStatus: "Active",
      verificationStatus: false,
    },
    {
      image: pic,
      name: "Henry Flat",
      id: "0x39a02...1e791",
      joiningDate: "Feb 27, 2022, 23:57",
      owned: "12",
      created: "12",
      posts: "12",
      activityStatus: "Active",
      verificationStatus: false,
    },
    {
      image: pic,
      name: "Henry Flat",
      id: "0x39a02...1e791",
      joiningDate: "Feb 27, 2022, 23:57",
      owned: "12",
      created: "12",
      posts: "12",
      activityStatus: "Active",
      verificationStatus: false,
    },
    {
      image: pic,
      name: "Henry Flat",
      id: "0x39a02...1e791",
      joiningDate: "Feb 27, 2022, 23:57",
      owned: "12",
      created: "12",
      posts: "12",
      activityStatus: "Active",
      verificationStatus: true,
    },
    {
      image: pic,
      name: "Henry Flat",
      id: "0x39a02...1e791",
      joiningDate: "Feb 27, 2022, 23:57",
      owned: "12",
      created: "12",
      posts: "12",
      activityStatus: "Active",
      verificationStatus: false,
    },
  ];

  const [openSuspendModal, setOpenSuspendModal] = useState(false);

  const onDeleteClick = () => {
    setOpenSuspendModal(true);
  };

  const columnsVerificationTable = [
    {
      Header: () => <p className="text-left f-400 font-14 ">User</p>,
      accessor: "name",
      Cell: (tableProps) => (
        <div className="d-flex gap-2">
          <img src={tableProps.row.original.image} alt="userImg" />
          <div className="d-flex d-flex-column">
            <p className=" font-14">{tableProps.row.original.name}</p>
            <p className="text-grey">{tableProps.row.original.id}</p>
          </div>
        </div>
      ),
    },
    {
      Header: () => <p className="text-left f-400 font-14 ">Date joined</p>,

      accessor: "joiningDate",
      Cell: (tableProps) => <p>{tableProps.row.original.joiningDate}</p>,
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Owned</p>,

      accessor: "owned",
      Cell: (tableProps) => (
        <p className="font-16">{tableProps.row.original.owned}</p>
      ),
    },
    {
      Header: () => <p className="text-left f-400 font-14 ">Created</p>,
      accessor: "created",
      Cell: (tableProps) => (
        <p className="font-16">{tableProps.row.original.created}</p>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 ">Posts</p>,

      accessor: "posts",
      Cell: (tableProps) => (
        <p className="font-16">{tableProps.row.original.posts}</p>
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
      Header: () => (
        <p className="text-left f-400 font-14 ">Verification status</p>
      ),

      accessor: "verificationStatus",
      Cell: (tableProps) => (
        <>
          {tableProps.row.original.verificationStatus ? (
            <div className="verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.66648 10.1139L12.7947 3.98566L13.7375 4.92846L6.66648 11.9995L2.42383 7.75691L3.36663 6.81411L6.66648 10.1139Z"
                  fill="#296EC7"
                />
              </svg>
              <p className="font-16">Verified</p>
            </div>
          ) : (
            <div className="unverified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 12.6667C8.55227 12.6667 9 13.1144 9 13.6667C9 14.219 8.55227 14.6667 8 14.6667C7.44773 14.6667 7 14.219 7 13.6667C7 13.1144 7.44773 12.6667 8 12.6667ZM8 1.33337C10.2091 1.33337 12 3.12423 12 5.33337C12 6.77644 11.4983 7.52717 10.2173 8.61544C8.9324 9.70697 8.66667 10.198 8.66667 11.3334H7.33333C7.33333 9.68404 7.858 8.87017 9.354 7.59931C10.3653 6.74017 10.6667 6.2892 10.6667 5.33337C10.6667 3.86061 9.47273 2.66671 8 2.66671C6.52724 2.66671 5.33333 3.86061 5.33333 5.33337V6.00004H4V5.33337C4 3.12423 5.79086 1.33337 8 1.33337Z"
                  fill="#E69B23"
                />
              </svg>
              <p className="font-16">To be reviewed</p>
            </div>
          )}
        </>
      ),
    },

    {
      Header: () => <p className="text-left f-400 font-14 "> </p>,
      accessor: "actions",
      Cell: (tableProps) => (
        <div className="actionsCategories">
          <button className="btn-action" onClick={() => onDeleteClick()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.166 4.99996H18.3327V6.66663H16.666V17.5C16.666 17.9602 16.2929 18.3333 15.8327 18.3333H4.16602C3.70578 18.3333 3.33268 17.9602 3.33268 17.5V6.66663H1.66602V4.99996H5.83268V2.49996C5.83268 2.03973 6.20578 1.66663 6.66602 1.66663H13.3327C13.7929 1.66663 14.166 2.03973 14.166 2.49996V4.99996ZM14.9993 6.66663H4.99935V16.6666H14.9993V6.66663ZM7.49935 9.16663H9.16602V14.1666H7.49935V9.16663ZM10.8327 9.16663H12.4993V14.1666H10.8327V9.16663ZM7.49935 3.33329V4.99996H12.4993V3.33329H7.49935Z"
                fill="#E84D3C"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const sortByOptions = [
    { label: "This week", value: "thisWeek" },

    { label: "Last week", value: "lastWeek" },

    { label: "Last month", value: "lastMonth" },

    { label: "Last year", value: "lastYear" },
  ];

  const [sortValue, setSortValue] = React.useState("This week");

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };

  const entiresPerPageOptions = [
    { label: "20", value: "20" },
    { label: "30", value: "30" },
  ];

  const [entriesPerPage, setEntriesPerPage] = useState("20");

  const handleEntryChange = (event) => {
    setEntriesPerPage(event.target.value);
  };
  return (
    <div className="col-12 mt-4">
      <SuspendUserModal
        isOpen={openSuspendModal}
        onClose={() => setOpenSuspendModal(false)}
      />
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
      <Table tableData={dummy} tableColumns={columnsVerificationTable} />
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

export default VerificationTable;
