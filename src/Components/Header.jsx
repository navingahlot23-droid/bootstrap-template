import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const navLink = [
    {
      linkName: "Home",
      hrefVal: "#hero",
    },
    {
      linkName: "About",
      hrefVal: "#about",
    },
    {
      linkName: "Services",
      hrefVal: "#services",
    },
    {
     linkName: "Portfolio",
      hrefVal: "#portfolio",
    },
    {
      linkName: "Team",
      hrefVal: "#team",
    },
    {
      linkName: "Contact",
      hrefVal: "#contact",
    }
  ];

  const dropdownLink = [
    {
      dropdownLink: "Action",
      dropdownHref: "#action/3.1",
    },
    {
         dropdownLink: "Another action",
        dropdownHref: "#action/3.2",
      },
      {
        dropdownLink: "Something",
        dropdownHref: "#action/3.3",
      },
      {
         dropdownLink: "Separated link",
        dropdownHref: "#action/3.4",
      }
  ];

  return (
    <Navbar expand="lg"  className="d-flex justify-content-between align-items-center" id="header">
      <Container className="container-fluid container-xl header-container">
        <Navbar.Brand href="#home" className="logo d-flex align-items-center me-auto me-lg-0">
          Clarity
        </Navbar.Brand>
        <div className="link-wrap"> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-auto">
              {navLink.map((e,index) => (
                <Nav.Link key={index} href={e.hrefVal} className={activeIndex === index ? "active" : ""} onClick={() => {setActiveIndex(index);}}>{e.linkName}</Nav.Link>
              ))}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {
                    dropdownLink.map((e,index )=> (
                        <NavDropdown.Item key={index} href={e.dropdownHref}>{e.dropdownLink}</NavDropdown.Item>
                    ))
                }
              </NavDropdown>
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
