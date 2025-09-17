import { Row, Col } from "react-bootstrap";
import OrgCard from "../components/OrgCard";
import { organizationArray } from "../OrganizationStore";
import { useState, useEffect } from "react";



function SearchResults() {

    return (
        <>
            <main>
                <Row xs={1} sm={3} className="g-4">

                    {organizationArray.map((organization) => (
                        <Col key={organization.id} align="center">
                            <OrgCard organization={organization} />
                        </Col>
                    ))}

                </Row>
            </main>
        </>
    )
}

export default SearchResults;