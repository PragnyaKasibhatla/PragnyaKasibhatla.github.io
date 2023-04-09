import React, { useEffect } from "react";
import './index.css';
import { btsImages } from "./data";
function Wallpapers(){
    useEffect(()=>{
        document.body.style.backgroundImage = "";
        document.body.style.backgroundColor ="black";
    });

    return <>
            <div className="heading">
            <h1 style={{position:"relative",top:"100px"}}>BTS HD Wallpapers</h1>
            </div>
            <img className="btslogo" alt="btslogo" src="../assets/BTS/BTS_Logo.jpg"></img>
            <div className="wallpapers">
                {btsImages.map((image, index) => (
                    <div key={index}  className="wallpaper">
                        <a href={image} download="new-filename">
                            <img className="download" src="../assets/arrows/d1.svg" alt="download"></img>
                        </a>
                        <img src={image} alt="BTS" style={{width:"500px",height:"300px"}}/>
                    </div>
                ))}
            </div>
            <img className="armylogo" alt="armylogo" src="../assets/BTS/army.jpg"></img>
            </> 

}
export default Wallpapers;