import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer position-relative dark-background">
                <Container>
                    <div className="footer-top">
                        <Row className="gy-4">
                            <Col md='6' lg='4' xs='12' className="footer-about">
                                <a href="index.html" className="logo d-flex align-items-center">
                                    <span className="sitename">Clarity</span>
                                </a>
                                <div className="footer-contact pt-3">
                                    <p>A108 Adam Street</p>
                                    <p>New York, NY 535022</p>
                                    <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                                    <p><strong>Email:</strong> <span>info@example.com</span></p>
                                </div>
                                <div className="social-links d-flex mt-4">
                                    <a href=""><i className="bi bi-twitter-x"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </Col>
                            <Col lg='2' md='3' xs='12' className="footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </Col>
                            <Col lg='2' md='3' xs='12' className="footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">Product Management</a></li>
                                    <li><a href="#">Marketing</a></li>
                                    <li><a href="#">Graphic Design</a></li>
                                </ul>
                            </Col>
                            <Col lg='2' md='3' xs='12' className="footer-links">
                                <h4>Hic solutasetp</h4>
                                <ul>
                                    <li><a href="#">Molestiae accusamus iure</a></li>
                                    <li><a href="#">Excepturi dignissimos</a></li>
                                    <li><a href="#">Suscipit distinctio</a></li>
                                    <li><a href="#">Dilecta</a></li>
                                    <li><a href="#">Sit quas consectetur</a></li>
                                </ul>
                            </Col>
                            <Col lg='2' md='3' xs='12' className="footer-links">
                                <h4>Nobis illum</h4>
                                <ul>
                                    <li><a href="#">Ipsam</a></li>
                                    <li><a href="#">Laudantium dolorum</a></li>
                                    <li><a href="#">Dinera</a></li>
                                    <li><a href="#">Trodelas</a></li>
                                    <li><a href="#">Flexo</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className="copyright text-center mt-4">
                        <p>© <span>Copyright</span> <strong className="px-1 sitename">Clarity</strong> <span>All Rights Reserved</span></p>
                        <div className="credits">
                            {/* <!-- All the links in the footer should remain intact. -->
                            <!-- You can delete the links only if you've purchased the pro version. -->
                            <!-- Licensing information: https://bootstrapmade.com/license/ -->
                            <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
                           
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;