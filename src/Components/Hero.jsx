import { Container, Row, Col } from "react-bootstrap";
import imgSRC from "../assets/banner.jpg";
import React, { useEffect } from "react";
import Stats from "../Global/Stats";


const Hero = () => {

    const statArray = [
        {
            number: 150,
            label: 'Projects Completed'
        },
        {
            number: 95,
            label: 'Client Satisfaction'
        },
        {
            number: 24,
            label: 'Team Members'
        }
    ];

    return (
        <>
            <section id="hero" className="hero section">
                <Container>
                    <Row className="align-items-lg-center">
                        <Col className="hero-content" lg={6} data-aos="fade-right" data-aos-delay="100">
                            <h1 className="hero-title">Transform Your Digital Presence</h1>
                            <p className="hero-text">We create innovative digital solutions that drive growth and elevate your brand. From web development to digital marketing, we're your partners in digital transformation.</p>
                            <div className="hero-buttons">
                                <a href="#" className="btn btn-primary">Get Started</a>
                                <a href="#" className="btn btn-outline">Our Work</a>
                            </div>
                            <div className="stats-card">
                                {
                                    statArray.map((e, index) => (
                                        <Stats key={index} number={e.number} label={e.label} />
                                    ))
                                }
                            </div>
                        </Col>
                        <Col lg={6} data-aos="fade-left" data-aos-delay="200">
                            <div className="hero-image">
                                <img src={imgSRC} alt="Digital Agency Hero" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="hero-bg-elements">
                    <div className="bg-shape shape-1"></div>
                    <div className="bg-shape shape-2"></div>
                    <div className="bg-particles"></div>
                </div>
            </section>
        </>
    )
}

export default Hero;