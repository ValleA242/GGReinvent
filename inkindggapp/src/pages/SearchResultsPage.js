import { Row, Col } from "react-bootstrap";
import { organizationArray } from "../ProductStore";

function SearchResults() {
    <>
        <Row xs={1} md={3} className="g-4">
            {organizationArray.map((organization, idx) => (
                <Col align="center" key={idx}>
                    <h1>{organization.orgName}</h1>
                </Col>
            ))}

        </Row>
    </>
}

export default SearchResults;