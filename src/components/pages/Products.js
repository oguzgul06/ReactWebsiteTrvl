import React from "react";
import "../../App.css";

import { Button } from "../Button";

export default function Products() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>PRODUCT</h1>
      <p>Do you want produtc?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET PRODUCTS
        </Button>
      </div>
    </div>
  );
}
