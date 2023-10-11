import React, { useState } from "react";
import graph from "../../../assets/images/graph.png";

const CollectionOverview = () => {
  const [tab, setTab] = useState("totalCollection");

  return (
    <div className="overviewTab">
      <div className="d-flex">
        <button
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "totalCollection" ? "overViewButtonSelected" : ""
          } `}
          onClick={() => setTab("totalCollection")}
        >
          TOTAL COLLECTIONS <p> 24.45K</p>
        </button>
        <button
          onClick={() => setTab("totalNftperCollection")}
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "totalNftperCollection" ? "overViewButtonSelected" : ""
          } `}
        >
          TOTAL NFT PER COLLECTION <p> 24.45K</p>
        </button>

        <button
          onClick={() => setTab("averageSalePrice")}
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "averageSalePrice" ? "overViewButtonSelected" : ""
          } `}
        >
          AVERAGE SALE PRICE <p> 2.8 mins </p>
        </button>

        <button
          onClick={() => setTab("uniqueOwners")}
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "uniqueOwners" ? "overViewButtonSelected" : ""
          } `}
        >
          UNIQUE OWNERS <p> 56%</p>
        </button>
      </div>
      {tab === "totalCollection" && (
        <div className="d-flex d-flex-column mt-5">
          <div className="col-12">
            <img className="col-12" src={graph} />
          </div>
        </div>
      )}
      {tab === "all"}
    </div>
  );
};

export default CollectionOverview;
