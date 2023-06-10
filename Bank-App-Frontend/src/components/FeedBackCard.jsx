import React, { Fragment } from "react";
import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <Fragment>
      <div className="flex justify-between flex-col px-10 py-12 rounded-2xl max-w-[370px]  my-5 space-y-7 border">
        <img src={quotes} className="w-12" />
        <p className="font-poppins text-[16px]">{content}</p>
        <div className="flex flex-row">
          <img src={img} className="w-12" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-xl">{name}</p>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FeedBackCard;
