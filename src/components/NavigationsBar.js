import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

const NavigationsBar = () => {
  return (
    <div>
      <Navbar variant='dark'>
        <Container>
          <NavbarBrand href='/'>Ani-Kun</NavbarBrand>
          <Nav>
            <Nav.Link href='#trending'>Trending</Nav.Link>
            <Nav.Link href='#isekai'>Isekai</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationsBar;
