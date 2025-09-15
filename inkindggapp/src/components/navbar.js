import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { GoSearch } from "react-icons/go";



function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-flex align-items-center">
                    <Nav.Link href="https://www.google.com" className="me-3">
                        <GoSearch size={25} />
                    </Nav.Link>
                    <Nav.Link href="https://www.amazon.com">
                        <TiShoppingCart size={25} />
                    </Nav.Link>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;