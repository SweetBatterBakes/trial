import React from 'react';
import "./aboutus.css";

import SBB_gif from "/Users/zainab/Desktop/trial/src/images/SBB.gif"


export default function AboutUs(){
    return(
    <div className = "About_Us">
        <div className = "our_story">
            <h1 className = "header"> Our Story</h1>
            <p className = "blurb"> Sweet Batter Bakes was founded in 2021 by Abir Khan. She started this business right out her house in Connecticut. She loves to experiment with different flavors and treats which you can check out her instagram @sweetbatterbakes </p>
        </div>

        <div className = "vid_arch">
            <img className = "gif" src = {SBB_gif} />
            
        </div>
    </div>
    )
}