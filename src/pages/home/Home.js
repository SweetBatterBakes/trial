import React from "react";
import { BsTypeH1 } from "react-icons/bs";
import "./home.css";
import homeCollage from "/Users/zainab/Desktop/trial/src/images/homeCollage2.png";
import InstaL from "/Users/zainab/Desktop/trial/src/images/InstagramLogo.png";
import Insta1 from "/Users/zainab/Desktop/trial/src/images/insta1.png";
import Insta2 from "/Users/zainab/Desktop/trial/src/images/insta2.png";
import Insta3 from "/Users/zainab/Desktop/trial/src/images/insta3.png";
import Insta4 from "/Users/zainab/Desktop/trial/src/images/Insta4.png";
import Insta5 from "/Users/zainab/Desktop/trial/src/images/Insta5.png";
import Insta6 from "/Users/zainab/Desktop/trial/src/images/Insta6.png";
import Insta7 from "/Users/zainab/Desktop/trial/src/images/Insta7.png";
import Insta8 from "/Users/zainab/Desktop/trial/src/images/Insta8.png";
import Insta9 from "/Users/zainab/Desktop/trial/src/images/Insta9.png";
import Insta10 from "/Users/zainab/Desktop/trial/src/images/Insta10.png";
import Cake from "/Users/zainab/Desktop/trial/src/images/cake.png"
import Donut from "/Users/zainab/Desktop/trial/src/images/donut.png"
import Ingredients from "/Users/zainab/Desktop/trial/src/images/ingredients.png"
import companyLogo from "/Users/zainab/Desktop/trial/src/images/SBB_title2.png";

export default function Home(){
    return(
    <div className = "Home_page">
        <div className = "top_collage">
            <div className = "left_welcome">
                <img  className = "collage" src = {homeCollage} alt = "Collage" />
            </div>
            <div className = "right_welcome">
                <img  className = "sbb_title" src = {companyLogo} alt = "Sweet Batter Bakes" />
                
            </div>
        </div>

   
    
        
    <div className = "home_2">
        <h1 className = "heading"> Why Sweet Batter Bakes?</h1>
        <div className = "why_cards">
            
            <div className ="card border-0" >
                <img className ="card-img-top" src= {Cake} alt="Card image cap"/>
                <div className ="card-body">
                    <h5 class="card-title">Delicious Flavours</h5>
                    <p class="card-text"> Many different flavours for every sweet treat including mango, apple cider, and cinnamon sugar</p>
                </div>      
            </div>


            <div class="card border-0">
                <img class="card-img-top" src= {Ingredients} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Fresh Ingredients</h5>
                    <p class="card-text"> Every dessert is artfully crafted with only the freshest ingredients</p>
                </div>      
            </div>

            <div class="card border-0" >
                <img class="card-img-top" src= {Donut} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Perfect For Any Event</h5>
                    <p class="card-text"> We offer many different desserts including but not limited to donuts, cheescakes, and cupcakes </p>
                </div>      
            </div>
        </div>



    </div>






    <div className = "follow_Insta">
        <img className = "InstaL" src = {InstaL} alt = " Follow @sweetbatterbakes "/>
    </div>

    <div className = "Insta_collage">
        <a href = "https://www.instagram.com/p/Ch0GpotAbt9/" target="_blank">
            <img className = "Insta_img" src = {Insta1} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/CfKocyKLaQA/" target="_blank">
            <img className = "Insta_img" src = {Insta2} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/Cd9Y12WLOhW/" target="_blank">
            <img className = "Insta_img" src = {Insta3} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/CWuDRjUrMFY/" target="_blank">
            <img className = "Insta_img" src = {Insta4} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/CZS2l7crOnw/" target="_blank">
            <img className = "Insta_img" src = {Insta5} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
            <img className = "Insta_img" src = {Insta6} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/CV_w_vAr-Sz/" target="_blank">
            <img className = "Insta_img" src = {Insta7} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/CUuvSOwgw_C/" target="_blank">
            <img className = "Insta_img" src = {Insta8} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/CWRaCm7LuY6/" target="_blank">
            <img className = "Insta_img" src = {Insta9} alt = " Follow @sweetbatterbakes "/>
        </a>
        <a href = "https://www.instagram.com/p/CfKocyKLaQA/" target="_blank">
            <img className = "Insta_img" src = {Insta10} alt = " Follow @sweetbatterbakes "/>
        </a>

    </div>
    
    



    </div>
    )
}