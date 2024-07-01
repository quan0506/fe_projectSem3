// import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './footer.css';
import 'boxicons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col className="text-center">
            <p>Get connected with us on social networks:</p>
            <div className="social-icons">
              <Link to='/shop'><box-icon type='logo' name='facebook'></box-icon></Link>
              <Link to='#' ><box-icon name='twitter' type='logo' ></box-icon></Link>
              <Link to='#' ><box-icon name='google' type='logo' ></box-icon></Link>
              <Link to='#' ><box-icon name='instagram' type='logo' ></box-icon></Link>
              <Link to='#' ><box-icon name='linkedin-square' type='logo' ></box-icon></Link>
              <Link to='#' ><box-icon name='github' type='logo' ></box-icon></Link>
            </div>
          </Col>
        </Row>
        <Row className="footer-content">
          <Col md={3}>
            <h5 className="title">COMPANY NAME</h5>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Col>
          <Col md={3}>
            <h5 className="title">ABOUT US</h5>
            <ListGroup variant="flush">
              <ListGroup.Item as={Link} to='/'>Home</ListGroup.Item>
              <ListGroup.Item>Shop</ListGroup.Item>
              <ListGroup.Item>Category</ListGroup.Item>
              <ListGroup.Item as={Link} to='/aboutcontact'>Contact Us</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h5 className="title">CONTACT US</h5>
            <ListGroup variant="flush">
              <ListGroup.Item><box-icon name='home' type='solid' ></box-icon> New York, NY 10012, US</ListGroup.Item>
              <ListGroup.Item><box-icon name='envelope' type='solid' ></box-icon> info@example.com</ListGroup.Item>
              <ListGroup.Item><box-icon name='phone-call' ></box-icon> + 01 234 567 88</ListGroup.Item>
              <ListGroup.Item><box-icon type='solid' name='phone-incoming'></box-icon> + 01 234 567 89</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className='footer-bottom'>
          <Col className="text-center-bottom py-3">
            <p>&copy; 2024 Copyright by Team2.T2301E</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
