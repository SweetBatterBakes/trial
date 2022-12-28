import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/aboutus/AboutUs.js";
import Home from "./pages/home/Home.js";
import Products from "./pages/products/Products";
import './App.css';
import {Container, Navbar, Nav} from "react-bootstrap"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import companyLogo from "/Users/zainab/Desktop/trial/src/images/sbb_sqlogoclear.png";
import { BsInstagram } from "react-icons/bs";
function App() {
  return (
    <BrowserRouter basename = "/trial">
      <Navbar className="top" expand = "lg" bg-abwhite>
      <Container>
        <Navbar.Brand href="/">
            <img className = "app-logo" src = {companyLogo} alt = " Sweet Batter Bakes"  />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className = "dropDown">
          <Nav className="me-auto justify-content-between w-25 ">
            <Nav.Link href="/" className = "nav-item" class = "nav-item nav-link ">HOME</Nav.Link>
            <Nav.Link href="/about" className = "nav-item" class = "nav-item nav-link " >ABOUT </Nav.Link>
           
            <Nav.Link href="/contact"  className = "nav-item" class = "nav-item nav-link" >CONTACT</Nav.Link>
            <Nav.Link href="/products" className = "nav-item" class = "nav-item nav-link " >PRODUCTS</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        <a class="link d-none d-lg-block" href="https://www.instagram.com/sweetbatterbakes/" >
        <BsInstagram/>
        </a>
        
      </Container>
      
      </Navbar>
      <Routes>

        <Route exact path = "/trial" element = {<Home />}/>
        <Route path = "/about" element = {<AboutUs />}/>
        <Route path = "/contact" element = {<ContactUs />}/>
        <Route path = "/products" element = {<Products />}/>
        
       
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
