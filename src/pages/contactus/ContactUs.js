import "./contactus.css";
import {Container, Row, Col} from "react-bootstrap";
import React, { useRef } from "react"

export default function ContactUs(){
    return(
        <Container className = "contactUs">
                <Row className = "mb-5 mt-3">
                    <Col Lg = '8'>
                        <h1 className = "bgH display-4 ">
                            Contact Us
                        </h1>
                    </Col>
                </Row>

                <Row className ="sec-sp">
                    <Col lg = '5'className = "mb-5">
                        <address> 
                            <strong> Email: sweetbatterbakesct@gmail.com</strong>
                            <br />
                            <br />
                            <p>
                                <strong> Instagram: @sweetbatterbakes </strong>
                                
                            </p>

                        </address>
                        <p>
                            Please DM @sweetbatterbakes on Instagram to place an order!
                        </p>
                    </Col>
                    <Col lg = "7" className = "d0flex aligh-items-center">
                        {/* <form ref = {form} className = "contact__form w=100"  onSubmit={sendEmail}> */}
                            <Row>
                                <Col lg = '6' className = "form-group">
                                    <input
                                        className = "form-control"
                                        id = "name"
                                        name = "name"
                                        placeholder = "Name"
                                        type = "text"
                                    />
                                </Col>

                                <Col lg = '6' className = "form-group">
                                    <input
                                        className = "form-control"
                                        id = "email"
                                        name = "email"
                                        placeholder = "Email"
                                        type = "enail"
                                    />
                                </Col>
                            
                            </Row>
                            <br/>
                            <textarea className = "form-control" id= "message"
                                            name = "message"
                                            placeholder = "Message"
                                            rows = '5'
                            ></textarea>

                            <br />
                            <Row>
                                <Col lg = '12' className = "form-group"> 
                                    <button className = "btn1 ac_btn" type = "submit"> Send</button>
                                
                                </Col>
                            </Row>
                        {/* </form> */}
                    </Col>
                </Row>
            

        </Container>
    )
}