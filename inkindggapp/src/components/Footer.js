import { Container, Navbar, Nav } from "react-bootstrap";
import { BsFillChatFill } from "react-icons/bs";





function FooterComponent() {
    return (
        <Navbar expand="lg" className="footer">
            <Container className="d-flex justify-content-end">
                <Nav.Link href='#'>
                    <BsFillChatFill className="chatBubble" size={25} />
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default FooterComponent;