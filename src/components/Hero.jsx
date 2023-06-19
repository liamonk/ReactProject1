import React from "react";
import photoGrid from "/images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero--photoGrid" src={photoGrid} />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--blurb">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
