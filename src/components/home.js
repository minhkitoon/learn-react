import React from 'react';
import './home.css';
import logo from '../logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './about';

function Home(props) {
    return (
        <div>
            <section className="home-section" id="home_wrapper">
                <div className="home-section-overlay"></div>
                <Container fluid="md">
                    <Row>
                        <Col md={6} className="padding-top-30 align-self-center color-banner">
                                <h1>Ready To Promote Your New Business With BeSmart?</h1>
                                <p>Curabitur quam etsum lacus etsumis nulatis etsumised vitae nisledita varius loremis sed feugiat ligula aliquam ets vitae dictimus etis netsum ipsum netsum etim quias ligula.</p>
                                <button className="btn-white">Explore Benefits</button>
                        </Col>
                        <Col md={6}>
                            <img src="images/555X510.png" className="" alt=""/>
                        </Col>
                    </Row>
                </Container>   
            </section>

            <div className="section-grey sponsors-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 sponsors">
                            <img src="images/partner2.png" className="sponsor" alt=""/>
                            <img src="images/partner1.png" className="sponsor" alt=""/>
                            <img src="images/partner3.png" className="sponsor" alt=""/>
                            <img src="images/partner4.png" className="sponsor" alt=""/>
                            <img src="images/partner5.png" className="sponsor" alt=""/>
                        </div>
                    </div>
                </div>
            </div>  

            <section className="section-white py-5 " id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center padding-top-20">
                            <h2 className="section-title">How It Works</h2>
                            <p className="section-subtitle">There are many variations of passages of Lorem Ipsum available, but the majority<br/>have suffered alteration, by injected humour, or new randomised words.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="about-box">
                                <i className="pe-7s-note2 hi-icon"></i>
                                <h3>Search Oportunities</h3>
                                <p>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-box">
                                <i className="pe-7s-graph3 hi-icon"></i>
                                <h3>Reach Clients</h3>
                                <p>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-box">
                                <i className="pe-7s-piggy hi-icon"></i>
                                <h3>Get Rewarded</h3>
                                <p>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <About />
        </div>
    );
}

export default Home;