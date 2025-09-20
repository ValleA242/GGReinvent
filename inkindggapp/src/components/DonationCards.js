import { Button, Form, Card } from "react-bootstrap";
import { organizationArray } from "../OrganizationStore";

function DonationCards({ selectedOrg }) {
    if (!selectedOrg) return null;

    return (
        <>
            <Card key={selectedOrg.id} className="cardForDonationModal">
                <Card.Body>
                    <Card.Title>{selectedOrg.orgName}</Card.Title>
                    <Card.Text>{selectedOrg.location}</Card.Text>
                    {selectedOrg.askAmounts?.map(amount => (
                        <Button key={`${selectedOrg.id}-${amount}`}>${amount}</Button>
                    ))}
                    <Form>
                        <Form.Control placeholder="Custom Amount" />
                    </Form>
                    <Button>Add to Basket</Button>
                    <Button>Check Out</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default DonationCards;