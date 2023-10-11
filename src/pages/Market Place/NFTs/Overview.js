import React, { useState } from "react";
import graph from "../../../assets/images/graph.png";
import graph2 from "../../../assets/images/worldMap.png";
import graph3 from "../../../assets/images/BarGraph.png";

const Overview = () => {
  const [tab, setTab] = useState("activeUsers");

  return (
    <div className="overviewTab">
      <div className="d-flex">
        <button
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "activeUsers" ? "overViewButtonSelected" : ""
          } `}
          onClick={() => setTab("activeUsers")}
        >
          TOTAL NFTS <p> 4.45K</p>
        </button>
        <button
          onClick={() => setTab("sessions")}
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "sessions" ? "overViewButtonSelected" : ""
          } `}
        >
          SESSION 24.45K <p> 24.45K</p>
        </button>

        <button
          onClick={() => setTab("averageSession")}
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "averageSession" ? "overViewButtonSelected" : ""
          } `}
        >
          TOTAL NFTS PER COLLECTION<p> 208</p>
        </button>

        <button
          onClick={() => setTab("bounceRate")}
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "bounceRate" ? "overViewButtonSelected" : ""
          } `}
        >
          AVERAGE SALE PRICE <p> $12.8</p>
        </button>

        <button
          onClick={() => setTab("uniqueOwners")}
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "uniqueOwners" ? "overViewButtonSelected" : ""
          } `}
        >
          UNIQUE OWNERS <p> 56 %</p>
        </button>
      </div>
      {tab === "activeUsers" && (
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

export default Overview;
