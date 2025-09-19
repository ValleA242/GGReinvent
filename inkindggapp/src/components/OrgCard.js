import { Button, Card } from "react-bootstrap";
import useToggle from "../hooks/Toggler";
import { useNavigate } from "react-router-dom"
import { Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { productArray } from "../ProductStore";
import WishListItemCard from "./WishListItemCard";



function OrgCard({ organization }) {

    const [isMatched, toggleIsMatched] = useToggle();
    const [inKind, toggleInKind] = useToggle();

    const navigate = useNavigate();



    return (

        <Card className="saveMatch">
            <Card.Img className="cardImage" variant="top" src={organization.img} />
            <Card.Body>
                <Card.Title>{organization.orgName}</Card.Title>
                <Card.Text>
                    {organization.location}
                </Card.Text>

                <div className="d-flex flex-row">
                    <Button
                        className="orgCardButton w-100 m-1"
                        onClick={() => window.location.href = "https://give.galapagos.org/a/support"}
                    >
                        View
                    </Button>
                    <Button
                        className="orgCardButton w-100 m-1"
                        onClick={toggleInKind}
                    >
                        Give
                    </Button>
                    {inKind && (
                        <Modal show={inKind} onHide={toggleInKind} className="wishlistModal" >
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                                <>
                                    <main>
                                        <Row xs={1} className="g-4">
                                            {productArray.map((product) => (
                                                <Col key={product.id} align="center">
                                                    <WishListItemCard product={product} />
                                                </Col>
                                            ))}

                                        </Row>
                                    </main>
                                </>
                            </Modal.Body>

                        </Modal>
                    )}


                </div>
            </Card.Body>
        </Card>


    );
}

export default OrgCard;
