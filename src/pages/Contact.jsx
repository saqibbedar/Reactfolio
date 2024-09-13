import React from "react";
import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";

const Contact = () => {
  return (
    <div id="#Contact" className={`${containerStyle}`}>
      <PageTitle title={"Contact"} />
    </div>
  );
};

export default Contact;
