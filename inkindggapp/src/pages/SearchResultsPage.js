import { Row, Col } from "react-bootstrap";
import { organizationArray } from "../ProductStore";
import CardCreator from "../components/OrgCard";

function SearchResults() {
    return (
        <>
            <Row xs={1} md={3} className="g-4">

                <Col align="center">
                    <CardCreator />
                </Col>


            </Row>
        </>
    )
}

export default SearchResults;