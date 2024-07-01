import {Stack, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Stack direction="horizontal" gap={3} className='support-header'>
        <div className="p-2">
          <box-icon name='calendar' type='solid' ></box-icon>
          9.00 AM - 9.00 PM
        </div>
        <div className="p-2">
          <box-icon name='headphone' ></box-icon>
          1800 80 80 88
        </div>
        <Link className="p-2 ms-auto" to='/cart'>
          <box-icon name='cart' ></box-icon>
          My Cart
        </Link>
        {/* <div className="vr" /> */}
        <Link className="p-2" to='/login'>
          <box-icon name='user-circle' ></box-icon>
          My Account
        </Link>
      </Stack>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className='container-header'>
          <Navbar.Brand to="#" className='logo'>
            {/* <img src="../../../public/assets/logoprjsem3.png" className='logo-img'/>  */}
            <p className='logo-brand'>YGJ</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/' className="custom-link">Home</Nav.Link>
              <Nav.Link as={Link} to='/shop' className="custom-link">Shop</Nav.Link>
              <NavDropdown as={Link} title="Category" id="navbarScrollingDropdown" className="custom-link">
                <NavDropdown.Item as={Link} to="#" className="custom-link">Ring</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#" className="custom-link">Bracelets</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#" className="custom-link">Necklace</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#" className="custom-link">Earrings</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Nav.Link as={Link} to='/aboutcontact' className="custom-link">About & Contact Us</Nav.Link>
            </Nav>
            <Form className="d-flex search-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
              />
              <box-icon name='search' class="search-icon"></box-icon>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

