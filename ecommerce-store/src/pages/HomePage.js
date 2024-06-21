import React from 'react';
import './HomePage.css'; // Import your custom CSS file for additional styling
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import coffeeImage1 from '../Assets/coffee1.jpg'; // Import coffee shop images
import coffeeImage2 from '../Assets/coffee2.jpg';
import coffeeImage3 from '../Assets/coffee3.webp';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar Section */}
      <div className="navbar-section">
        <Navbar bg="dark" expand="lg" className="navbar-container">
          <Container>
            <Navbar.Brand href="/" style={{ color: '#ffffff' }}>Coffee Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" style={{ color: '#ffffff' }}>Home</Nav.Link>
                <Nav.Link href="/menu" style={{ color: '#ffffff' }}>Menu</Nav.Link>
                <Nav.Link href="/about" style={{ color: '#ffffff' }}>About Us</Nav.Link>
                <Nav.Link href="/contact" style={{ color: '#ffffff' }}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <Container className="mt-1">
          <h1 className="heading">Welcome to Our Coffee Shop</h1>
          <p className="heading">
            Indulge in the aroma and flavors of our carefully crafted coffees and treats. 
            Whether you're a coffee aficionado or exploring new flavors, we have something 
            special for everyone.
          </p>
          
          {/* Carousel Section */}
          <div className="carousel-section">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={coffeeImage1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Enjoy Our Freshly Brewed Coffee</h3>
                  <p>Savor the rich flavors and aromatic delights of our premium coffee beans.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={coffeeImage2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Relax in Our Cozy Ambiance</h3>
                  <p>Experience the warmth and comfort of our inviting coffee shop atmosphere.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={coffeeImage3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Discover Our Speciality Treats</h3>
                  <p>Delight in our delectable pastries and desserts, perfect companions to your coffee.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
