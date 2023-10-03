import React from "react";
import profilePic from "../../../../assets/images/avatar.png";

const ReportsTab = () => {
  return (
    <div className="d-flex d-flex-column">
      <div className="d-flex gap-2">
        {" "}
        <p className="f-600 font-14 align-self-end mb-1">TOTAL REPORTS : </p>
        <p className="text-danger font-28 align-self-end">80</p>
      </div>

      <div className="d-flex d-align-center gap-3">
        <div className="reportCard d-flex d-flex-column gap-4 col-2">
          <div className="d-flex d-align-center gap-4">
            <div className="orangeDot" /> <p className="f-600 font-14">Copy</p>
          </div>
          <p className="font-20 f-700">34</p>
        </div>

        <div className="reportCard d-flex d-flex-column gap-4 col-2">
          <div className="d-flex d-align-center gap-4">
            <div className="darkRedDot" /> <p className="f-600 font-14">Spam</p>
          </div>
          <p className="font-20 f-700">23</p>
        </div>

        <div className="reportCard d-flex d-flex-column gap-4 col-2">
          <div className="d-flex d-align-center gap-4">
            <div className="blackDot" />{" "}
            <p className="f-600 font-14">Offensive</p>
          </div>
          <p className="font-20 f-700">17</p>
        </div>

        <div className="reportCard d-flex d-flex-column gap-4 col-2">
          <div className="d-flex d-align-center gap-4">
            <div className="greyDot" /> <p className="f-600 font-14">Others</p>
          </div>
          <p className="font-20 f-700">6</p>
        </div>
      </div>

      <div className="d-flex d-flex-column mt-5">
        <p className=" font-14 f-600">COMMENTS FOR OTHERS</p>

        <div className="d-flex mt-3 gap-2">
          <img className="commentsPic d-align-center" src={profilePic} />
          <p className="f-600">whitegoose497</p>
        </div>

        <div className="d-flex d-justify-space-between d-align-center col-8">
          <p className="f-500  text-grey col-9 mt-2">
            Aliquam porta nisl dolor, molestie pellentesque elit molestie in.
            Morbi metus neque, elementum ullam
          </p>

          <p className="font-14 f-500 text-grey">Jan 1, 2022, 12:59</p>
        </div>

        <div className="d-flex mt-3 gap-2">
          <img className="commentsPic d-align-center" src={profilePic} />
          <p className="f-600">whitegoose497</p>
        </div>

        <div className="d-flex d-justify-space-between d-align-center col-8">
          <p className="f-500  text-grey col-9 mt-2">
            Aliquam porta nisl dolor, molestie pellentesque elit molestie in.
            Morbi metus neque, elementum ullam
          </p>

          <p className="font-14 f-500 text-grey">Jan 1, 2022, 12:59</p>
        </div>

        <div className="d-flex mt-3 gap-2">
          <img className="commentsPic d-align-center" src={profilePic} />
          <p className="f-600">whitegoose497</p>
        </div>

        <div className="d-flex d-justify-space-between d-align-center col-8">
          <p className="f-500  text-grey col-9 mt-2">
            Aliquam porta nisl dolor, molestie pellentesque elit molestie in.
            Morbi metus neque, elementum ullam
          </p>

          <p className="font-14 f-500 text-grey">Jan 1, 2022, 12:59</p>
        </div>
      </div>
    </div>
  );
};

export default ReportsTab;
