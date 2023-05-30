import React from "react";
import katie from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

export default function Card (){
    return(
        <div className="card">
                <div className="availability">SOLD OUT</div>
                <img className="card--photo" src={katie}></img>            
                <div className="card--rating">
                <img className="card--star" src ={star}/>
                <div className="card--rating"><span className ="bold">5.0</span>(6)-USA</div>
            </div>
            <div className="card--description">Life lessons with Kate Zaferes</div>
            <div className="card--price">
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </div>
    )
}