import { Col, Container, Row } from "react-bootstrap";
import Icons from "../Global/icons";
import imgSRC from "../assets/why-us.png";

const WhyUs = () => {
    const whyBox = [
        {
            icon: 'palette-fill',
            title: 'Creative Excellence',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
            statNumber: 95,
            statLabel: '% Client Satisfaction'
        },
        {
            icon: 'graph-up-arrow',
            title: 'Proven Results',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
            statNumber: 200,
            statLabel: '% ROI Increase'
        },
        {
            icon: 'award-fill',
            title: 'Expert Team',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.',
            statNumber: 50,
            statLabel: '+ Awards Won'
        },
    ];

    const featureItems = [
        {
            icon: 'check-circle-fill',
            title: 'Strategic Thinking',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.'
        },
        {
            icon: 'check-circle-fill',
            title: 'Data-Driven Approach',
            description: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
        },
        {
            icon: 'check-circle-fill',
            title: '24/7 Support',
            description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.'
        }
    ];

    return (
        <>
            <section id="why-us" className="why-us section">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2>Why Us</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <Row className="g-4" lg={3} md={2} xs={1} data-aos="fade-up" data-aos-delay="200">
                        {
                            whyBox.map(e => (
                                <Col>
                                    <div className="feature-card">
                                        <div className="icon-wrapper">
                                            <Icons iconName={e.icon} />
                                        </div>
                                        <h4>{e.title}</h4>
                                        <p>{e.description}</p>
                                        <div className="feature-stats">
                                            <span className="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="95" data-purecounter-duration="2">{e.statNumber}</span>
                                            <span className="stat-label">{e.statLabel}</span>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row className="mt-5" lg={2}  xs={1}>
                        <Col data-aos="fade-right" data-aos-delay="200">
                            <div className="feature-showcase">
                                <img src={imgSRC} alt="Creative Process" className="img-fluid" />
                            </div>
                        </Col>
                        <Col data-aos="fade-left" data-aos-delay="300">
                            <div className="feature-content">
                                <h3>Why Leading Brands Choose Us</h3>
                                <p className="lead">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>

                                <div className="feature-list">
                                    {
                                        featureItems.map(e => (
                                            <div className="feature-item">
                                                <div className="feature-icon">
                                                    <Icons iconName={e.icon}/>
                                                </div>
                                                <div className="feature-text">
                                                    <h5>{e.title}</h5>
                                                    <p>{e.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="cta-wrapper">
                                    <a href="#" className="btn btn-primary">Start Your Project</a>
                                    <a href="#" className="btn btn-outline">View Portfolio</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default WhyUs;