import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import images from "../utils/importImages";
import SectionTitle from "../Global/SectionTitle";
import CTABanner from "../Global/CTABanner";


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
        </>
    )
}

export default Portfolio;