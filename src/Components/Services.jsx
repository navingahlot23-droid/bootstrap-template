import { Col, Container, Row } from "react-bootstrap";
import Icons from "../Global/Icons"
import SectionTitle from "../Global/SectionTitle";
import CTABanner from "../Global/CTABanner";

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


    return (
        <>
            <section id="services" className="services section">
                <Container>
                    <SectionTitle heading='Services'  subText='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'  dataAos="fade-up"/>
                    <Row lg={3} md={2} xs={1} className="gy-4">
                        {
                            serviceBox.map((e, index) => (
                                <Col data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index}>
                                    <div className="service-card">
                                        <div className="service-icon">
                                            <Icons iconName = {e.icon}/>
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
                        <Col>
                            <CTABanner heading = "Ready to Transform Your Digital Presence?" text = "Let's discuss your project and create something amazing together" btnPrimaryText= "Get Started Today" btnPrimaryHref= "#" dataAos= "fade-up" data-aos-delay="400"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Service;