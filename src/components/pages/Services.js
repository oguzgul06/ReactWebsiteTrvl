import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";
import { Button } from "../Button";

export default function Services(props) {
  return (
    <>
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>SERVICE</h1>
        <p>What kind of services?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET SERVICES
          </Button>
        </div>
      </div>
      <Cards />
      <Footer />;
    </>
  );
}
