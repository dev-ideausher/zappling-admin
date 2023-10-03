import React, { useState } from "react";
import graph from "../../assets/images/graph.png";
import graph2 from "../../assets/images/worldMap.png";
import graph3 from "../../assets/images/BarGraph.png";

const OverviewTab = () => {
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
          ACTIVE USERS <p> 24.45K</p>
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
          AVERAGE SESSION DURATION <p> 2.8 mins </p>
        </button>

        <button
          onClick={() => setTab("bounceRate")}
          className={`overViewButton d-flex d-flex-column gap-4 col-2 ${
            tab === "bounceRate" ? "overViewButtonSelected" : ""
          } `}
        >
          BOUNCE RATE <p> 56%</p>
        </button>
      </div>
      {tab === "activeUsers" && (
        <div className="d-flex d-flex-column mt-5">
          <div className="col-12">
            <img className="col-12" src={graph} />
          </div>

          <div className="d-flex gap-3 col-12">
            <div className="col-6 ">
              <img src={graph2} />
            </div>

            <div className="col-5">
              <img src={graph3} />
            </div>
          </div>
        </div>
      )}
      {tab === "all"}
    </div>
  );
};

export default OverviewTab;
