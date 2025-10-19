import { Col, Container, Row } from "react-bootstrap";
import Icons from "../Global/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import imgSRC1 from "../assets/person-m-6.webp";
import imgSRC2 from "../assets/person-m-4.webp";
import imgSRC3 from "../assets/person-f-8.webp";
import imgSRC4 from "../assets/person-f-3.webp";


const Teams = () => {
    const stats = [
        {
            statNumber: '50+',
            statLabel: 'Team Members'
        },
        {
            statNumber: 8,
            statLabel: 'Departments'
        },
        {
            statNumber: '15+',
            statLabel: 'Countries'
        }
    ];

    const members = [
        {
            name: 'Sarah Chen',
            role: 'Creative Director',
            img: `${imgSRC4}`,
            linkedin: { name: 'linkedin', url: '#' },
            twitter: { name: 'twitter', url: '#' },
            github: { name: '', url: '' },
            instagram: { name: '', url: '' },
            dribbble: { name: '', url: '' },
            behance: { name: '', url: '' }
        },
        {
            name: 'Marcus Johnson',
            role: 'Tech Lead',
            img: `${imgSRC2}`,
            linkedin: { name: 'linkedin', url: '#' },
            twitter: { name: '', url: '' },
            github: { name: 'github', url: '#' },
            instagram: { name: '', url: '' },
            dribbble: { name: '', url: '' },
            behance: { name: '', url: '' }
        },
        {
            name: 'Emma Rodriguez',
            role: 'Product Manager',
            img: `${imgSRC3}`,
            linkedin: { name: '', url: '' },
            twitter: { name: '', url: '' },
            github: { name: '', url: '' },
            instagram: { name: 'instagram', url: '#' },
            dribbble: { name: 'dribbble', url: '#' },
            behance: { name: '', url: '' }
        },
        {
            name: 'David Kim',
            role: 'UX Architect',
            img: `${imgSRC1}`,
            linkedin: { name: 'linkedin', url: '#' },
            twitter: { name: '', url: '' },
            github: { name: '', url: '' },
            instagram: { name: '', url: '' },
            dribbble: { name: '', url: '' },
            behance: { name: 'behance', url: '#' }
        }
    ];

    const lTeam = [
        {
            img: `${imgSRC4}`,
            name: 'Jennifer Walsh',
            role: 'Chief Executive Officer',
            info: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id.',
            mail: { name: 'envelope', url: '#' },
            linkedin: { name: 'linkedin', url: '#' },
            twitter: { name: '', url: '' },
            github: { name: '', url: '' },
            instagram: { name: '', url: '' }
        },
        {
            img: `${imgSRC2}`,
            name: 'Robert Martinez',
            role: 'Chief Technology Officer',
            info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.',
            mail: { name: 'envelope', url: '#' },
            linkedin: { name: '', url: '' },
            twitter: { name: '', url: '' },
            github: { name: 'github', url: '#' },
            instagram: { name: '', url: '' }
        },
        {
            img: `${imgSRC3}`,
            name: 'Lisa Thompson',
            role: 'Head of Operations',
            info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            mail: { name: 'envelope', url: '#' },
            linkedin: { name: '', url: '' },
            twitter: { name: 'twitter', url: '#' },
            github: { name: '', url: '' },
            instagram: { name: '', url: '' }
        },
        {
            img: `${imgSRC1}`,
            name: 'Alex Garcia',
            role: 'VP of Marketing',
            info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
            mail: { name: 'envelope', url: '#' },
            linkedin: { name: '', url: '' },
            twitter: { name: '', url: '' },
            github: { name: '', url: '' },
            instagram: { name: 'instagram', url: '#' }
        }
    ];
    return (
        <>
            <section id="team" className="team section">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2>Team</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <Row className="g-4" lg={2} xs={1}>
                            <Col>
                                <div className="team-intro" data-aos="fade-right" data-aos-delay="150">
                                    <div className="intro-content">
                                        <h3>Meet Our Exceptional Team</h3>
                                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                                        <div className="stats-row">
                                            {
                                                stats.map((e, index) => (
                                                    <div className="stat-item" key={index}>
                                                        <span className="stat-number">{e.statNumber}</span>
                                                        <span className="stat-label">{e.statLabel}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="team-grid" data-aos="fade-left" data-aos-delay="200">
                                    {
                                        members.map((e, index) => (
                                            <div className="member-hexagon" data-aos="zoom-in" data-aos-delay="250" key={index}>
                                                <div className="hexagon-inner">
                                                    <img src={e.img} alt="Team member" />
                                                    <div className="member-overlay">
                                                        <h5>{e.name}</h5>
                                                        <span>{e.role}</span>
                                                        <div className="social-icons">
                                                            {Object.values({
                                                                linkedin: e.linkedin,
                                                                twitter: e.twitter,
                                                                github: e.github,
                                                                instagram: e.instagram,
                                                                dribbble: e.dribbble,
                                                                behance: e.behance
                                                            })
                                                                .filter(social => social.name && social.url)
                                                                .map((social, i) => (
                                                                    <a href={social.url} key={i}>
                                                                        <Icons iconName={social.name} />
                                                                    </a>
                                                                ))}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5" xs={1}>
                            <Col>
                                <div className="team-carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
                                    <h4 className="carousel-title">Leadership Team</h4>
                                    <Swiper className="leadership-slider"
                                        modules={[Pagination, Autoplay]}
                                        autoplay={{ delay: 4000 }}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                        loop={true}
                                        speed={600}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 2
                                            },
                                            1024: {
                                                slidesPerView: 3
                                            },
                                        }}>
                                        {
                                            lTeam.map((e, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="leader-card">
                                                        <div className="leader-image">
                                                            <img src={e.img} alt="Leader" />
                                                        </div>
                                                        <div className="leader-info">
                                                            <h5>{e.name}</h5>
                                                            <span className="position">{e.role}</span>
                                                            <p>{e.info}</p>
                                                            <div className="leader-contact">
                                                                {
                                                                    Object.values({
                                                                        mail: e.mail,
                                                                        linkedin: e.linkedin,
                                                                        twitter: e.twitter,
                                                                        github: e.github,
                                                                        instagram: e.instagram
                                                                    }).filter(social => social.name && social.url).map((social, index) => (<a href={social.url} className="contact-btn">
                                                                        <Icons iconName={social.name} />
                                                                    </a>))
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>

                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col lg = {{span : 8, offset : 2}}>
                                <div className="join-team-cta aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="cta-icon">
                                        <i className="bi bi-rocket-takeoff"></i>
                                    </div>
                                    <div className="cta-content">
                                        <h4>Ready to Join Our Mission?</h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                                        <div className="cta-actions">
                                            <a href="#" className="btn btn-primary">View Open Roles</a>
                                            <a href="#" className="btn btn-outline">Learn Our Culture</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Teams;