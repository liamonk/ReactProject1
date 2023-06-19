import React from "react";
import katie from "/images/katie-zaferes.png";
import star from "/images/star.png";

export default function Card(props) {
  let badgeText = "";
  if (props.cardData.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.cardData.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText !== "" && <div className="card--badge">{badgeText}</div>}
      <img
        className="card--photo"
        src={`/images/${props.cardData.coverImg}`}
      ></img>
      <div className="card--rating">
        <img className="card--star" src={star} />
        <div className="card--rating">
          <span className="bold">{props.cardData.stats.rating}</span>(
          {props.cardData.stats.reviewCount}) -{props.cardData.location}
        </div>
      </div>
      <div className="card--description">{props.cardData.title}</div>
      <div className="card--price">
        <p>
          <span className="bold">From ${props.cardData.price}</span> / person
        </p>
      </div>
    </div>
  );
}
