import React, { Fragment } from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return <Fragment>
    <section id="product" className={layout.sectionReverse }>
      <div className={layout.sectionImgReverse}>
        <img src={bill} className="w-[100%] h-[100%]"/>
      </div>
      <div className={layout.sectionInfo}>
        <p className={`${styles.heading2}`}>Easily Control your <br/> billing & invoicing.</p>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus! Quis ipsum quibusdam nesciunt corporis sunt, reprehenderit eius est recusandae dolor ratione magni dolores beatae, eaque earum excepturi debitis eveniet esse exercitationem tempore repellat voluptatibus!</p>

        <div className="flex flex-row mt-4 space-x-4 justify-center  w-full md:justify-start">
          <img src={apple}/>
          <img src={google}/>

        </div>

      </div>
    </section>

  </Fragment>;
};

export default Billing;
