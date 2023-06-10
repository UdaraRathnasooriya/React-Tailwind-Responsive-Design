import React, { Fragment } from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <Fragment>
      <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16">
          <p className={`${styles.heading2} `}>
            What people are <br />
            saying about us
          </p>
          <div className="w-full">
            <p className={`${styles.paragraph} mt-5 max-w-[500px] w-full`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              possimus ipsum? Sequi voluptates molestiae reprehenderit
              consequatur earum magni aperiam odio.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:space-x-4  w-full border ">
          {feedback.map((card)=>{
            return(
              <FeedBackCard key={card.id} {...card}/>
            )

          })}

        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
