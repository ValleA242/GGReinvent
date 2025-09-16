// includes card with image, givingday/org title, location (city, state), and save your match button
import { Card } from "react-bootstrap";
import { organizationArray } from "../ProductStore";


function CardCreator() {
    return (
        organizationArray.map((organization, idx) => (
            <Card style={{ width: '18rem' }} key={idx}>
                <Card.Img variant="top" src={organization.img} />
                <Card.Body>
                    <Card.Title>{organization.orgName}</Card.Title>
                    <Card.Text>
                        {organization.location}
                    </Card.Text>
                </Card.Body>
            </Card>
        ))

    );
}

export default CardCreator;
