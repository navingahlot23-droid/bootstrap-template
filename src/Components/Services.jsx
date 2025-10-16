import { Col, Container, Row } from "react-bootstrap";

const Service = () => {
    const serviceBox = [
        {
            badge: 'Most Popular',
            icon: 'palette',
            title: 'Brand Identity Design',
            text: 'Donec vel sapien augue integer urna vel turpis cursus porta aliquam ligula eget ultricies.',
            link: '#'
        },
        {
            badge: '',
            icon: 'layout-text-window-reverse',
            title: 'UI/UX Design',
            text: 'Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus pellentesque eu.',
            link: '#'
        },
        {
            badge: '',
            icon: 'code-slash',
            title: 'Web Development',
            text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
            link: '#'
        },
        {
            badge: '',
            icon: 'phone',
            title: 'Mobile App Design',
            text: 'Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.',
            link: '#'
        },
        {
            badge: 'Most Popular',
            icon: 'megaphone',
            title: 'Digital Marketing',
            text: 'Sed porttitor lectus nibh donec sollicitudin molestie malesuada proin eget tortor risus.',
            link: '#'
        },
        {
            badge: '',
            icon: 'search',
            title: 'SEO Optimization',
            text: 'Curabitur arcu erat accumsan id imperdiet et porttitor at sem pellentesque habitant morbi.',
            link: '#'
        }
    ];

    const CTA = {
        CTATitle : 'Ready to Transform Your Digital Presence?',
        CTAText : 'Let"s discuss your project and create something amazing together',
        CTABtnName : 'Get Started Today'
    };

    return (
        <>
            <section id="services" className="services section">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2>Services</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <Row lg={3} md={2} xs={1} className="gy-4">
                        {
                            serviceBox.map((e, index) => (
                                <Col data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index}>
                                    <div className="service-card">
                                        <div className="service-icon">
                                            <i className={`bi bi-${e.icon}`}></i>
                                        </div>
                                        <h4><a href={e.link}>{e.title}</a></h4>
                                        <p>{e.text}</p>
                                        {e.badge && <div className="service-badge">{e.badge}</div>}
                                        <a href={e.link} className="service-link">
                                            <span>Learn More</span>
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row className="mt-5" xs={1}>
                        <Col className="text-center " data-aos="fade-up" data-aos-delay="400">
                            <div className="services-cta">
                                <h3>{CTA.CTATitle}</h3>
                                <p>{CTA.CTAText}</p>
                                <a href="#" className="btn btn-primary">{CTA.CTABtnName}</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Service;