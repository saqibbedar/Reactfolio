import React from "react";
import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";

const Services = () => {
  return (
    <div id="Services" className={`${containerStyle}`}>
      <PageTitle title={"Services"} />
    </div>
  );
};

export default Services;
