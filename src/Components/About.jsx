import { Col, Container, Row } from "react-bootstrap"
import imgSRC1 from "../assets/about-1.jpg";
import imgSRC2 from "../assets/about-2.jpg";

const About = () => {
    return (
        <>
            <section id="about" className="about section">
                <Container data-aos="fade-up" data-aos-delay="100">
                    <Row className="gy-5 align-items-lg-center">
                        <Col lg={6} data-aos="fade-right" data-aos-delay="200">
                            <div className="content">
                                <h6 className="subtitle">Discover Our Story</h6>
                                <h2>Innovative Solutions for a Digital-First World</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <ul className="features-list">
                                    <li><i className="bi bi-check-circle-fill"></i><span>Excepteur sint occaecat cupidatat non proident.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i><span>Nemo enim ipsam voluptatem quia voluptas sit.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i><span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                </ul>

                                <a href="#" className="btn btn-primary">Discover More</a>
                            </div>
                        </Col>
                        <Col lg={6} data-aos="fade-left" data-aos-delay="300">
                            <div className="image-composition">
                                <div className="image-main">
                                    <img src={imgSRC1} alt="Modern office with a team working" className="img-fluid" loading="lazy"/>
                                </div>
                                <div className="image-secondary">
                                    <img src={imgSRC2} alt="Collaborative discussion" className="img-fluid" loading="lazy"/>
                                </div>
                                <div className="stats-card">
                                    <div className="stats-item">
                                        <h3>20+</h3>
                                        <p>Years of Expertise</p>
                                    </div>
                                    <div className="stats-item">
                                        <h3>500+</h3>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About;