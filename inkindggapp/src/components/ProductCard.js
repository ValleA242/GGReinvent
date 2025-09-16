// includes card with image, givingday/org title, location (city, state), and save your match button
import { Button, Card } from "react-bootstrap";


function ProductCard({ product }) {
    return (

        <Card style={{ width: '18rem' }} className="saveMatch">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.itemName}</Card.Title>
                <Card.Text>
                    ${product.price}
                </Card.Text>
                <Button>Remove from cart</Button>
            </Card.Body>
        </Card>


    );
}

export default ProductCard;