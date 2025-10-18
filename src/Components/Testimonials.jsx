import { Container } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import Icons from "../Global/icons";
import imgSRC1 from "../assets/person-1.webp";
import imgSRC2 from "../assets/person-2.webp";
import imgSRC3 from "../assets/person-3.webp";
import imgSRC4 from "../assets/person-4.webp";
import imgSRC5 from "../assets/person-5.webp";

const Testimonials = () => {
    const testimonials = [
        {
            img: `${imgSRC1}`,
            name: 'Christopher Lee',
            role: 'VP Engineering',
            rating: 'star-fill',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.',
            companyName: 'DevStream'
        },
        {
            img: `${imgSRC2}`,
            name: 'Amanda Rodriguez',
            role: 'UX Researcher',
            rating: 'star-fill',
            quote: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.',
            companyName: 'UserFirst'
        },
        {
            img: `${imgSRC3}`,
            name: 'Alexander Chen',
            role: 'Frontend Engineer',
            rating: 'star-fill',
            quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            companyName: 'InnovateLab'
        },
        {
            img: `${imgSRC4}`,
            name: 'Jennifer Martinez',
            role: 'Product Designer',
            rating: 'star-fill',
            quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.',
            companyName: 'TechCorp'
        },
        {
            img: `${imgSRC5}`,
            name: 'Rachel Taylor',
            role: 'Marketing Lead',
            rating: 'star-fill',
            quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
            companyName: 'GrowthCo'
        }
    ];


    return (
        <>
            <section id="testimonials" className="testimonials section">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2>Testimonials</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
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
                                <SwiperSlide>
                                    <div className="testimonial-card aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                        <div className="testimonial-header">
                                            <div className="user-avatar">
                                                <img src={e.img} />
                                            </div>
                                            <div className="user-info">
                                                <h3>{e.name}</h3>
                                                <span className="user-role">{e.role}</span>
                                                <div className="rating">
                                                    <Icons iconName={e.rating} />
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

export default Testimonials;