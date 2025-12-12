import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
 
  const navLink = [
    {
      linkName: "Home",
      hrefVal: "/bootstrap-template/home",
    },
    {
      linkName: "About",
      hrefVal: "/bootstrap-template/about",
    },
    {
      linkName: "Services",
      hrefVal: "/bootstrap-template/services",
    },
    {
     linkName: "Portfolio",
      hrefVal: "/bootstrap-template/portfolio",
    },
    {
      linkName: "Team",
      hrefVal: "/bootstrap-template/team",
    },
    {
      linkName: "Contact",
      hrefVal: "/bootstrap-template/contact",
    }
  ];


  return (
    <Navbar expand="lg"  className="d-flex justify-content-between align-items-center" id="header">
      <Container className="container-fluid container-xl header-container">
        <Navbar.Brand href="/bootstrap-template/home" className="logo d-flex align-items-center me-auto me-lg-0">
          Clarity
        </Navbar.Brand>
        <div className="link-wrap"> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-auto">
              {navLink.map((e, index) => (
                <NavLink key = {index} to={e.hrefVal} className={({isActive}) => isActive ? "active  nav-link" : "nav-link"}>{e.linkName}</NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
        <Navbar.Brand href="#start" className="nav-btn">
          Get Started
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;