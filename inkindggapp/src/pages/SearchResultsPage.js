import { Row, Col } from "react-bootstrap";
import CardCreator from "../components/OrgCard";
import { organizationArray } from "../ProductStore";

function SearchResults() {
    return (
        <>
            <main>
                <Row xs={1} sm={3} className="g-4">

                    {organizationArray.map((organization) => (
                        <Col key={organization.id} align="center">
                            <CardCreator organization={organization} />
                        </Col>
                    ))}

                </Row>
            </main>
        </>
    )
}

export default SearchResults;