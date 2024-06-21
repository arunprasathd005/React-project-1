import React from 'react';
import { Container, Nav, Navbar, Card } from 'react-bootstrap'; // Import necessary components
import './MenuPage.css'; // Import your custom CSS file for additional styling

const menuItems = [
  { id: 1, name: 'Espresso', description: 'Strong black coffee brewed by forcing steam through ground coffee beans.' },
  { id: 2, name: 'Cappuccino', description: 'Espresso mixed with steamed milk foam.' },
  { id: 3, name: 'Latte', description: 'Espresso with steamed milk and a small amount of milk foam.' },
  // Add more items as needed
];

const MenuPage = () => {
  return (
    <div className="menu-page">
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
          <h1 className="heading">Our Menu</h1>
          
          {/* Menu Items Section */}
          <div className="menu-items">
            {menuItems.map(item => (
              <Card key={item.id} className="menu-card">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MenuPage;
