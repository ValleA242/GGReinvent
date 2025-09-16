// includes card with image, givingday/org title, location (city, state), and save your match button
import { Button, Card } from "react-bootstrap";


function CardCreator({ organization }) {
    return (

        <Card style={{ width: '18rem' }} className="saveMatch">
            <Card.Img variant="top" src={organization.img} />
            <Card.Body>
                <Card.Title>{organization.orgName}</Card.Title>
                <Card.Text>
                    {organization.location}
                </Card.Text>
                <Button> Save Match</Button>
            </Card.Body>
        </Card>


    );
}

export default CardCreator;
