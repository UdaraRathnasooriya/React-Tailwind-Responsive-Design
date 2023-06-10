import React, { Fragment } from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <Fragment>
      <section className="flex flex-col sm:flex-row items-center sm:justify-center bg-slate-900 px-12 py-4 m-8 rounded-2xl">
        <div className="flex-1 flex flex-col">
          <p className={`${styles.heading2}`}>Let's try our service now !</p>
          <p className={`${styles.paragraph} mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa quam dolor repellendus accusantium odio totam aliquam quis voluptatum illum, facilis, consequatur temporibus amet omnis saepe voluptate quod veniam ratione!</p>
        </div>
        <div className="flex-1 flex sm:justify-end mt-8">
          <Button />
        </div>
      </section>
    </Fragment>
  );
};

export default CTA;
