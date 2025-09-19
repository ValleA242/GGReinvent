import { Row, Col, Form, FormGroup, Button, Container, Offcanvas, Dropdown } from "react-bootstrap";
import OrgCard from "../components/OrgCard";
import { organizationArray } from "../OrganizationStore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useToggle from "../hooks/Toggler";



function SearchResults() {

    // reserving piece of state for offcanvas toggle for filters. Utilizing useToggle custom hook 
    const [drawer, toggleDrawer] = useToggle();

    const handleClose = useToggle(false);
    const handleShow = useToggle(true);


    return (
        <>
            <main className="containerForSearchContent">
                <div className="searchFormCont m-5">
                    <h1 className="searchFormLabel">Search</h1>
                    <Row as={Form} className="align-items-center justify-content-between g-2">
                        <Col xs={20} md={7}>
                            <Form.Group className="searchPageSearchBar mb-0">
                                <Form.Control type="search" placeholder="Search" />
                            </Form.Group>
                        </Col>

                        <Col xs="auto">
                            <Link to="#" className="viewAllOrgs p-0">View All</Link>
                        </Col>

                        <Col xs="auto">
                            <Button variant="link" className="filterModalToggle p-0" onClick={toggleDrawer}>{drawer ? "Hide Filters" : "Show Filters"}</Button>
                        </Col>
                    </Row>

                </div>

                <h1 className="searchResultsHeading">Here are some participating organizations!</h1>

                <div className="orgCards">

                    <Row xs={1} sm={3} className="g-4 m-0">

                        {organizationArray.map((organization) => (
                            <Col key={organization.id} align="center">
                                <OrgCard organization={organization} />
                            </Col>
                        ))}

                    </Row>
                </div>

                {drawer && (
                    <Offcanvas className="sideDrawer" show={drawer} onHide={toggleDrawer}>
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Title className="m-3"> Filters</Offcanvas.Title>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="causeDropdown">
                                Select Cause
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {organizationArray.map((cause) => (
                                    <Dropdown.Item key={cause.id}>{cause.cause}</Dropdown.Item>
                                ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Offcanvas>
                )}


            </main >
        </>
    )
}

export default SearchResults;