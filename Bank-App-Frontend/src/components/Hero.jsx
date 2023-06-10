import React, { Fragment } from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <Fragment>
      <section id="home" className="flex  flex-col md:flex-row sm:py-16 py-6">
        <div className="sm:px-16 px-6 flex flex-col justify-center items-start xl:px-0  ">
          <div className="flex flex-row bg-slate-400 items-center rounded-[10px]">
            <img src={discount} className="w-[32px] h-[32px] ml-4" />
            <span className="mx-4">20% Discount For 1 Month Account</span>
          </div>

          <div className="flex  flex-col  w-full">
            <div className=" flex font-poppins font-semibold  ">
              <p className="text-[50px] leading-[75px] ">
                {" "}
                The Next <br />
                Generation <br />
              </p>
              <div className=" invisible ss:visible">
                <GetStarted />
              </div>
            </div>

            <p className="block font-poppins font-semibold text-[50px] leading-[75px]">Payment Method.</p>
            <div className="font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              saepe ad facere optio laudantium minima, voluptatem sunt atque
              dolor incidunt magni ipsum, ullam vel, magnam molestiae
              voluptatibus hic expedita! Officia non officiis iusto doloribus
              praesentium sint beatae nam ex aspernatur blanditiis. Odio vero,
              natus aperiam id deleniti quam nobis dolor!
            </div>
          </div>
        </div>
        <div className="">
          <img  src={robot} className="w-[100%] h-[100%] relative z-[5]"/>
          <div className="absolute w-[60%] h-[60%] top-0 right-0 z-[0] pink__gradient"/>
          {/* <div className="absolute w-[80%] h-[80%] top-0 right-0 pink__gradient"/>
          <div className="absolute w-[100%] h-[100%] top-0 right-0 pink__gradient"/> */}
        </div>
          <div className="ss:hidden justify-center items-center flex">
            <GetStarted />
          </div>

        
      </section>
    </Fragment>
  );
};

export default Hero;
