import React from "react";
import profilePic from "../../../assets/images/avatar.png";

const PostReports = () => {
  return (
    <div className="col-12">
      <p className="mt-4 font-14 f-600 ">
        TOTAL REPORTS : <span className="text-danger font-28">80</span>
      </p>

      <div className="d-flex gap-3 col-10">
        <div className="attibuteBox">
          <div className="d-flex d-align-center gap-2">
            <div className="orangeDot" />
            <p className="text-grey font-14 f-600">Copy</p>
          </div>
          <p className="font-20 f-700">34</p>
        </div>

        <div className="attibuteBox">
          <div className="d-flex d-align-center gap-2">
            <div className="darkRedDot" />
            <p className="text-grey font-14 f-600">Span</p>
          </div>
          <p className="font-20 f-700">34</p>
        </div>

        <div className="attibuteBox">
          <div className="d-flex d-align-center gap-2">
            <div className="blackDot" />
            <p className="text-grey font-14 f-600">Offensive</p>
          </div>
          <p className="font-20 f-700">34</p>
        </div>

        <div className="attibuteBox">
          <div className="d-flex d-align-center gap-2">
            <div className="greyDot" />
            <p className="text-grey font-14 f-600">Others</p>
          </div>
          <p className="font-20 f-700">34</p>
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

export default PostReports;
