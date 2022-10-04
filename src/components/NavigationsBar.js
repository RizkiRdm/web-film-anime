import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

const NavigationsBar = () => {
  return (
    <div>
      <Navbar variant='dark'>
        <Container>
          <NavbarBrand>Ani-Kun</NavbarBrand>
          <Nav>
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>Isekai</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationsBar;
