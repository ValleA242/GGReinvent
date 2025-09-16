import { Container, Navbar, Nav, Modal, Row, Col } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { productArray } from "../ProductStore";
import ProductCard from "./ProductCard";




function NavbarComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    return (
        <>
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
                        <Nav.Link onClick={handleShow}>
                            <TiShoppingCart size={25} />
                        </Nav.Link>
                    </div>
                </Container>
            </Navbar>

            {/* shopping cart functionality */}

            <Modal show={show} onHide={handleClose} className="shoppingCartModal" >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <>
                        <main>
                            <Row xs={1} sm={3} className="g-4">

                                {productArray.map((product) => (
                                    <Col key={product.id} align="center">
                                        <ProductCard product={product} />
                                    </Col>
                                ))}

                            </Row>
                        </main>
                    </>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default NavbarComponent;