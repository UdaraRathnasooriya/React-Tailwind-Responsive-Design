import React, { Fragment } from "react";
import style from "./style";
import {
  NavBar,
  Testimonials,
  Billing,
  Business,
  Hero,
  Footer,
  CTA,
  CardDeal,
  Clients,
  Stats,
} from "./components";

const App = () => {
  return (
    <Fragment>
      {/* Full Page*/}
      <div className="bg-primary w-full overflow-hidden text-white">
        {/* Navbar Section */}
        <div className="sm:px-16 px-6 flex justify-center  items-center ">
          <div className="xl:max-w-[1280px] w-full ">
            <NavBar />
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex justify-center items-start ">
          <div className="xl:max-w-[1280px] w-full ">
            <Hero />
          </div>
        </div>

        {/* Other All Components */}
        <div className="flex justify-center items-start sm:px-16 px-6 ">
          <div className="xl:max-w-[1280px] w-full ">
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
