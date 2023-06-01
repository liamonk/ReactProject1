import React from "react";
import katie from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

export default function Card (props){
    return(
        <div className="card">
                <img className="card--photo" src={katie}></img>            
                <div className="card--rating">
                <img className="card--star" src ={star}/>
                <div className="card--rating">
                    <span className ="bold">{props.rating}</span>
                    ({props.reviewCount})
                    -
                    {props.country}
                </div>
            </div>
            <div className="card--description">{props.title}</div>
            <div className="card--price">
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}