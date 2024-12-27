import { Button, Form, Card } from "react-bootstrap";



// selectedOrg prop sent from SearchResultsPage. References object from the OrganizationStore file.  
function DonationCards({ selectedOrg }) {

    // Do not populate if there is no selected org in state
    if (!selectedOrg) return null;

    return (
        <>
            <Card key={selectedOrg.id} className="cardForDonationModal">
                <Card.Body>
                    <Card.Title>{selectedOrg.orgName}</Card.Title>
                    <Card.Text>{selectedOrg.location}</Card.Text>


                    {/* populate ask amount array buttons. Using chaining operator to prevent crash */}
                    {selectedOrg.askAmounts?.map(amount => (
                        <Button className="askAmmountButtons" key={`${selectedOrg.id}-${amount}`}>${amount}</Button>
                    ))}

                    <Form>
                        <Form.Control className="customAmmountField" placeholder="Custom Amount" />
                    </Form>

                    {/* Cart functionality not written yet. Waiting on local storage details from givegab repo */}
                    <Button className="askAmmountButtons">Add to Basket</Button>
                    <Button className="askAmmountButtons">Check Out</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default DonationCards;