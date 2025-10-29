import { Col, Container, Row } from "react-bootstrap";
import Stats from "../Global/Stats";
import SectionTitle from "../Global/SectionTitle";

const Contact = () => {
    const statArray = [
        {
            number: 24,
            label: 'Average Response',
            postText : 'h'
        },
        {
            number: 98,
            label: 'Client Satisfaction',
            postText : '%'
        },
        {
            number: 150,
            label: 'Projects Delivered',
            postText : '+'
        }
    ];
    return (
        <>
            <section id="contact" className="contact section">
                <Container>
                <SectionTitle heading='Contact' subText='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' dataAos="fade-up" />
                    <Row className="align-items-center" data-aos="fade-up" data-aos-delay="100">
                        <Col lg="5" xs='12' data-aos="fade-right" data-aos-delay="200">
                            <div className="contact-form-card">
                                <div className="form-header">
                                    <div className="header-icon">
                                        <i className="bi bi-chat-dots-fill"></i>
                                    </div>
                                    <h3>Let's Start a Conversation</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.</p>
                                </div>

                                <form action="" method="post" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="email" className="form-control" name="email" placeholder="Email Address" required="" />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="subject" placeholder="What's this about?" required="" />
                                    </div>

                                    <div className="mb-4">
                                        <textarea className="form-control" name="message" rows="4" placeholder="Tell us more about your project..." required=""></textarea>
                                    </div>

                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        <span>Send Message</span>
                                        <i className="bi bi-send-fill"></i>
                                    </button>
                                </form>
                            </div>
                        </Col>
                        <Col lg="7" xs='12' data-aos="fade-left" data-aos-delay="200">
                            <div className="contact-info-area">
                                <div className="info-header">
                                    <h3>Ready to Transform Your Ideas?</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.</p>
                                </div>

                                <div className="contact-methods">
                                    <div className="method-card" data-aos="zoom-in" data-aos-delay="250">
                                        <div className="card-icon">
                                            <i className="bi bi-envelope-at"></i>
                                        </div>
                                        <div className="card-content">
                                            <h5>Email Us</h5>
                                            <p>hello@productdemo.com</p>
                                            <span className="response-time">Response in 2-4 hours</span>
                                        </div>
                                    </div>

                                    <div className="method-card" data-aos="zoom-in" data-aos-delay="300">
                                        <div className="card-icon">
                                            <i className="bi bi-telephone"></i>
                                        </div>
                                        <div className="card-content">
                                            <h5>Call Us</h5>
                                            <p>+1 (555) 987-6543</p>
                                            <span className="response-time">Available 9AM - 6PM EST</span>
                                        </div>
                                    </div>

                                    <div className="method-card" data-aos="zoom-in" data-aos-delay="350">
                                        <div className="card-icon">
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                        <div className="card-content">
                                            <h5>Visit Our Office</h5>
                                            <p>4821 Broadway Street, New York, NY 10013</p>
                                            <span className="response-time">Open Monday - Friday</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="additional-info" data-aos="fade-up" data-aos-delay="400">
                                    <div className="info-stats stats-card">
                                        {
                                            statArray.map((e, index) => (
                                                <Stats key={index} number={e.number} label={e.label} postText={e.postText}/>
                                            ))
                                        }
                                    </div>

                                    <div className="social-connect">
                                        <h6>Connect With Us</h6>
                                        <div className="social-links">
                                            <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                                            <a href="#" className="social-link"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#" className="social-link"><i className="bi bi-github"></i></a>
                                            <a href="#" className="social-link"><i className="bi bi-discord"></i></a>
                                        </div>
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

export default Contact;