import { Container } from "react-bootstrap";
import "./products.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Banana from "/Users/zainab/Desktop/trial/src/images/flavor_preview/banana_bread.png";
import Donut from "/Users/zainab/Desktop/trial/src/images/flavor_preview/donuts.png";
import Madeline from "/Users/zainab/Desktop/trial/src/images/flavor_preview/madeline.png";
import Brownie from "/Users/zainab/Desktop/trial/src/images/flavor_preview/brownies.png"
import Cupcake from "/Users/zainab/Desktop/trial/src/images/flavor_preview/cupcake.png"
import Roll from "/Users/zainab/Desktop/trial/src/images/flavor_preview/rollcake.png"
import Turnover from "/Users/zainab/Desktop/trial/src/images/flavor_preview/turnovers.png"
import Stuffed from "/Users/zainab/Desktop/trial/src/images/flavor_preview/stuffed_c.png"
import Cake from "/Users/zainab/Desktop/trial/src/images/Insta10.png"
import Cheese from "/Users/zainab/Desktop/trial/src/images/insta2.png"
import Cookie from "/Users/zainab/Desktop/trial/src/images/flavor_preview/classic_cookie.png"

export default function Products(){
    return(
        <div className = "products"> 
            <h1 className = "head bgH display-5 ">
                Flavor Preview
            </h1>  

            <div className = "product_grid">

                <div class="p_cards">
                    <img class="p_img" src= {Stuffed} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Stuffed Cookies</h5>
                        <p class="card-text">Dozen/Half Dozen</p>
                        <DropdownButton className = "dropdown-button" id="dropdown-basic-button" title="Flavors">
                            <Dropdown.Item as="button">Brownie Batter Stuffed</Dropdown.Item>
                            <Dropdown.Item as="button">Red Velvet</Dropdown.Item>
                            <Dropdown.Item as="button">Hazelnut Churro</Dropdown.Item>
                            
                        </DropdownButton>
                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Cookie} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">O.G. Cookies</h5>
                        <DropdownButton className = "dropdown-button" id="dropdown-basic-button" title="Flavors">
                            <Dropdown.Item as="button">Choc Chip Walnut</Dropdown.Item>
                            <Dropdown.Item as="button">Double Choc Chip</Dropdown.Item>
                            <Dropdown.Item as="button">Peanut Butter Choc Chip</Dropdown.Item>
                            <Dropdown.Item as="button">White Choc Raspberry </Dropdown.Item>
                            <Dropdown.Item as="button">Snickerdoodle</Dropdown.Item>
                            <Dropdown.Item as="button">Pumpkin White Choc Chip</Dropdown.Item>
                            <Dropdown.Item as="button">Custom Sugar Cookies</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Cheese} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Cheesecakes</h5>
                        <p class="card-text">1 Large/12 Mini</p>
                        <DropdownButton className = "dropdown-button" id="dropdown-basic-button" title="Flavors">
                            <Dropdown.Item as="button">New York Style</Dropdown.Item>
                            <Dropdown.Item as="button">Mango</Dropdown.Item>
                            <Dropdown.Item as="button">Biscoff</Dropdown.Item>
                            <Dropdown.Item as="button">Banana Cream </Dropdown.Item>
                            <Dropdown.Item as="button">Pumpkin</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Cupcake} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Cupcakes</h5>
                        <p class="card-text">Dozen/Half Dozen</p>
                        <DropdownButton className = "dropdown-button" id="dropdown-basic-button" title="Flavors">
                            <Dropdown.Item as="button">Vanilla</Dropdown.Item>
                            <Dropdown.Item as="button">Chocolate</Dropdown.Item>
                            <Dropdown.Item as="button">Red Velvet</Dropdown.Item>
                            <Dropdown.Item as="button">Carrot Cake</Dropdown.Item>
                            <Dropdown.Item as="button">Strawberry</Dropdown.Item>
                            <Dropdown.Item as="button">Cookies N Cream</Dropdown.Item>
                            <Dropdown.Item as="button">Pumpking Spice</Dropdown.Item>
                            <Dropdown.Item as="button">Custom Cupcakes</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>


                <div class="p_cards">
                    <img class="p_img" src= {Roll} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Swiss Roll Cake</h5>
                        <p class="card-text">1 large roll sliced</p>
                        <DropdownButton className = "dropdown-button" id="dropdown-basic-button" title="Flavors">
                            <Dropdown.Item as="button">Pumpkin</Dropdown.Item>
                            <Dropdown.Item as="button">Chocolate</Dropdown.Item>
                            <Dropdown.Item as="button">Strawberries N Cream</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Brownie} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Layered Brownies</h5>
                        <p class="card-text">12 piece</p>
                        <DropdownButton className = "dropdown-button" id="dropdown-basic-button" title="Flavors">
                            <Dropdown.Item as="button">Cheesecake Brownies</Dropdown.Item>
                            <Dropdown.Item as="button">Twix Brownies</Dropdown.Item>
                            <Dropdown.Item as="button">Cookie Brownies</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Donut} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Baked donuts</h5>
                        <p class="card-text">12 mini donuts</p>
                        <DropdownButton className = "dropdown-button" id="dropdown-basic-button" title="Flavors">
                            <Dropdown.Item as="button">Glazes</Dropdown.Item>
                            <Dropdown.Item as="button">Cinnamon Sugar</Dropdown.Item>
                            <Dropdown.Item as="button">Pumpkin</Dropdown.Item>
                            <Dropdown.Item as="button">Apple Cider</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Cake} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Cakes</h5>
                        <DropdownButton className = "dropdown-button" id="dropdown-basic-button" title="Flavors">
                            <Dropdown.Item as="button">Custom Cakes</Dropdown.Item>
                            <Dropdown.Item as="button">Wedding and Birthday</Dropdown.Item>
                            <Dropdown.Item as="button">Smash Heart Cakes</Dropdown.Item>
                            <Dropdown.Item as="button">Tres Leches Cakes</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Banana} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Banana Bread</h5>
                        <p class="card-text">1 Loaf Sliced</p>
                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Turnover} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Turnovers</h5>
                        
                    </div>
                </div>

                <div class="p_cards">
                    <img class="p_img" src= {Madeline} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Madelines</h5>
                        <p class="card-text">16 Madelines</p>
                    </div>
                </div>



            </div>
            
        </div>
    )
}

                            