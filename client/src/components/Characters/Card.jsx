import React from "react";
// import {Link}from "react-router-dom"
export default function Card({id,name, image, nickname}){


    return (
        <div>
             {/* <Link to={`/characters/${id}`}/> */}
            <h2>{name}</h2>
            <h3>{nickname}</h3>
            <img src={image} alt="Not found" width="200px" height="250px"/>
        </div>
    )
}