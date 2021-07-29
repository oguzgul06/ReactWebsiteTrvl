import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";

export default function Products() {
  return (
    <>
      <img
        alt="Travel Image"
        src="images/img-11.jpg"
        width="1500"
        height="300"
      />
      <Cards />
      <Footer />;
    </>
  );
}
