import { Button, Card } from "react-bootstrap";
import useToggle from "./hooks/Toggler";
import { useState } from "react";



function OrgCard({ organization }) {

    const [isMatched, toggleIsMatched] = useToggle();

    return (

        <Card style={{ width: '18rem' }} className="saveMatch">
            <Card.Img variant="top" src={organization.img} />
            <Card.Body>
                <Card.Title>{organization.orgName}</Card.Title>
                <Card.Text>
                    {organization.location}
                </Card.Text>
                <Button onClick={toggleIsMatched}>
                    {isMatched ? "Matched" : "Click to Match"}
                </Button>
                {isMatched && (
                    <div className="d-flex flex-row">
                        <Button variant="success" className="w-50 m-1">
                            Donate
                        </Button>
                        <Button variant="success" className="w-50 m-1">
                            In-Kind Gift
                        </Button>
                    </div>
                )}
            </Card.Body>
        </Card>


    );
}

export default OrgCard;
