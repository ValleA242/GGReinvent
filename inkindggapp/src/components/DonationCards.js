import { Button, Form, Card } from "react-bootstrap";
import { organizationArray } from "../OrganizationStore";

function DonationCards() {

    return (
        <>
            {organizationArray.map(org => (
                <Card key={org.id} className="cardForDonationModal">
                    <Card.Body>
                        <Card.Title>{org.orgName}</Card.Title>
                        <Card.Text>{org.location}</Card.Text>
                        {org.askAmounts.map(amount => (
                            <Button>{amount}</Button>
                        ))}
                        <Form>
                            <Form.Control placeholder="Custom Amount" />
                        </Form>
                        <Button>Add to Basket</Button>
                        <Button>Check Out</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default DonationCards;