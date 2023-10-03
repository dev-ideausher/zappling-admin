import React from "react";
// import search from "../../../assets/icons/search.png";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <>
      {/* <span>
      Search:{" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span> */}

      <div className="searchContainerQues">
        <div className="magnify">{/* <img src={search} alt="img" /> */}</div>
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search "
        />
      </div>
    </>
  );
};
