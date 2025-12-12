import React, { useState } from "react";
import { Col, Container, Row} from "react-bootstrap";
import images from "../utils/importImages";
import Icons from "../Global/Icons";
import imgSRC from "../assets/why-us.png";
import Stats from "../Global/Stats";
import SectionTitle from "../Global/SectionTitle";
import CTABanner from "../Global/CTABanner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import imgSRC1 from "../assets/person-1.webp";
import imgSRC2 from "../assets/person-2.webp";
import imgSRC3 from "../assets/person-3.webp";
import imgSRC4 from "../assets/person-4.webp";
import imgSRC5 from "../assets/person-5.webp";


const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const portfolioList = [
        { key: 'all', name: 'All Projects' },
        { key: 'filter-web', name: 'Web Design' },
        { key: 'filter-mobile', name: 'Mobile Apps' },
        { key: 'filter-branding', name: 'Branding' },
        { key: 'filter-ui', name: 'UI/UX' }
    ];

    const portfolioItem = [
        { id: 1, category: "filter-web", img: images["../assets/portfolio-1.jpg"].default, alt: "Digital Innovation Platform", title: 'Digital Innovation Platform', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.', catType: 'Web Design', rating: '4.8', badge: ['React', 'Node.js', 'AWS'] },

        { id: 2, category: "filter-mobile", img: images["../assets/portfolio-2.jpg"].default, alt: "Smart Productivity App", title: 'Smart Productivity App', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', catType: 'Mobile App', rating: '4.9', badge: ['Flutter', 'Firebase', 'AI'] },

        { id: 3, category: "filter-branding", img: images["../assets/portfolio-3.jpg"].default, alt: "Modern Brand Identity", title: 'Modern Brand Identity', description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id.', catType: 'Branding', rating: '5.0', badge: ['Illustrator', 'Figma', 'Brand'] },

        { id: 4, category: "filter-ui", img: images["../assets/portfolio-4.jpg"].default, alt: "SaaS Dashboard Design", title: 'SaaS Dashboard Design', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', catType: 'UI/UX', rating: '4.7', badge: ['Figma', 'Prototyping', 'UX'] },

        { id: 5, category: "filter-web", img: images["../assets/portfolio-5.jpg"].default, alt: "E-commerce Platform", title: 'E-commerce Platform', description: 'Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed.', catType: 'E-commerce', rating: '4.6', badge: ['Shopify', 'React', 'API'] },

        { id: 6, category: "filter-mobile", img: images["../assets/portfolio-6.jpg"].default, alt: "Fintech Mobile Solution", title: 'Fintech Mobile Solution', description: 'Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Sed porttitor lectus nibh.', catType: 'Fintech', rating: '4.8', badge: ['Swift', 'Kotlin', 'Blockchain'] }
    ];


    const filteredProjects =
        activeFilter === "all"
            ? portfolioItem
            : portfolioItem.filter((p) => p.category === activeFilter);
    
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

               const testimonials = [
                    {
                        id: 1,
                        img: `${imgSRC1}`,
                        name: 'Christopher Lee',
                        role: 'VP Engineering',
                        rating: 2,
                        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.',
                        companyName: 'DevStream'
                    },
                    {
                        id: 2,
                        img: `${imgSRC2}`,
                        name: 'Amanda Rodriguez',
                        role: 'UX Researcher',
                        rating: 4,
                        quote: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.',
                        companyName: 'UserFirst'
                    },
                    {
                        id: 3,
                        img: `${imgSRC3}`,
                        name: 'Alexander Chen',
                        role: 'Frontend Engineer',
                        rating: 5,
                        quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
                        companyName: 'InnovateLab'
                    },
                    {
                        id: 4,
                        img: `${imgSRC4}`,
                        name: 'Jennifer Martinez',
                        role: 'Product Designer',
                        rating: 3,
                        quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.',
                        companyName: 'TechCorp'
                    },
                    {
                        id: 5,
                        img: `${imgSRC5}`,
                        name: 'Rachel Taylor',
                        role: 'Marketing Lead',
                        rating: 3,
                        quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
                        companyName: 'GrowthCo'
                    }
                ];


    return (
        <>
            <section id="portfolio" className="portfolio section">
                <Container>
                    <SectionTitle heading='Portfolio' subText='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' dataAos="fade-up" />
                    <div className="wrapper" data-aos="fade-up" data-aos-delay="100">

                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
                            {portfolioList.map(e => {
                                return <li key={e.key} onClick={() => setActiveFilter(e.key)}
                                    className={activeFilter === e.key ? "filter-active" : ""}>{e.name}</li>
                            })}
                        </ul>

                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
                            {filteredProjects.map(e => (
                                <div key={e.id} className={`col-xl-4 col-lg-6 portfolio-item ${e.category}`}>
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-image">
                                            <img src={e.img} alt={e.alt} className="img-fluid" />
                                            <div className="portfolio-hover">
                                                <div className="portfolio-actions">
                                                    <a href={e.img} className="glightbox action-btn preview-btn" title={e.title}>
                                                        <i className="bi bi-eye"></i>
                                                    </a>
                                                    <a href="#" className="action-btn details-btn" title="View Details">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-meta">
                                                <span className="project-type">{e.catType}</span>
                                                <div className="project-rating">
                                                    <i className="bi bi-star-fill"></i>
                                                    <span>{e.rating}</span>
                                                </div>
                                            </div>
                                            <h3>{e.title}</h3>
                                            <p>{e.description}</p>
                                            <div className="portfolio-tech">
                                                {e.badge.map((e,index) => (
                                                    <span className="tech-badge" key={index}>{e}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CTABanner heading = "Ready to start your next project?" text = "Let's work together to bring your digital vision to life" btnPrimaryText= "Start a Project" btnPrimaryHref= "#contact" btnSecondaryText= "View All Work" btnSecondaryHref= "#portfolio" dataAos= "fade-up" data-aos-delay="400"/>
                </Container>
            </section>
            <section id="why-us" className="why-us section">
                <Container>
                <SectionTitle heading='Why Us' subText='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' dataAos="fade-up" />
                    <Row className="g-4" lg={3} md={2} xs={1} data-aos="fade-up" data-aos-delay="200">
                        {
                            whyBox.map((e,index) => (
                                <Col key={index}>
                                    <div className="feature-card">
                                        <div className="icon-wrapper">
                                            <Icons iconName={e.icon} />
                                        </div>
                                        <h4>{e.title}</h4>
                                        <p>{e.description}</p>
                                        <div className="feature-stats stats-card">
                                            <Stats number={e.statNumber} label={e.statLabel} />
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row className="mt-5" lg={2} xs={1}>
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
                                        featureItems.map((e,index) => (
                                            <div className="feature-item" key={index}>
                                                <div className="feature-icon">
                                                    <Icons iconName={e.icon} />
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
            <section id="testimonials" className="testimonials section">
                <Container>
                <SectionTitle heading='Testimonials' subText='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' dataAos="fade-up" />
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        autoplay={{ delay: 4000 }}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed={600}
                        centeredSlides={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}>
                        {
                            testimonials.map(e => (
                                <SwiperSlide key={e.id}>
                                    <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="100">
                                        <div className="testimonial-header">
                                            <div className="user-avatar">
                                                <img src={e.img} />
                                            </div>
                                            <div className="user-info">
                                                <h3>{e.name}</h3>
                                                <span className="user-role">{e.role}</span>
                                                <div className="rating">
                                                    {[...Array(e.rating)].map((_, index) => (
                                                        <Icons key={index} iconName="star-fill" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="quote-mark">
                                                <i className="bi bi-quote"></i>
                                            </div>
                                            <p>{e.quote}</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="company-badge">
                                                <i className="bi bi-building"></i>
                                                <span>{e.companyName}</span>
                                            </div>
                                            <div className="verified-badge">
                                                <i className="bi bi-patch-check-fill"></i>
                                                <span>Verified</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default Portfolio;