import React, { Fragment } from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <Fragment>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <p className={`${styles.heading2}`}>
            Find a better card deal <br />
            in few easy steps.
          </p>
          <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, iusto
            cupiditate. Debitis consequuntur, natus temporibus possimus, quos
            corrupti sequi vitae minima quibusdam dolore magnam quas doloremque
            illo quod sint ab totam. Veniam totam iusto cumque veritatis quia
            laboriosam tempora quaerat.
          </p>
          <Button styles={"mt-4"} />
        </div>
        <div className={layout.sectionImg}>
          <img src={card} />
        </div>
      </section>
    </Fragment>
  );
};

export default CardDeal;
