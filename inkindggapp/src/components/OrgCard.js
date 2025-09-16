import { Button, Card } from "react-bootstrap";


function OrgCard({ organization }) {
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

export default OrgCard;
