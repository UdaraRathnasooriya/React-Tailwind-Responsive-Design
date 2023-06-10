import React, { Fragment } from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <Fragment>
      <div className=" w-[140px]  h-[140px] rounded-full bg-white cursor-pointer p-[2px]">
        <div className="bg-black h-[100%] w-[100%] rounded-full  flex  justify-center items-center flex-col ">
          <div>
            <div className="flex   font-poppins ">
              <p>Get</p>
              <img src={arrowUp} />
            </div>
            <p className="font-poppins">Started</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GetStarted;
