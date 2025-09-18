import { Button, Card } from "react-bootstrap";

function WishListItemCard({ product }) {
    return (

        <Card style={{ width: '18rem' }} className="saveMatch">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.itemName}</Card.Title>
                <Card.Text>
                    ${product.price}
                </Card.Text>
                <Button>Add to Cart</Button>
            </Card.Body>
        </Card>


    );
}

export default WishListItemCard;