import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";

export default function Services(props) {
  return (
    <>
      <img
        alt="Travel Image"
        src="images/img-10.jpg"
        width="1500px"
        height="500px"
      />
      <Cards />
      <Footer />;
    </>
  );
}
