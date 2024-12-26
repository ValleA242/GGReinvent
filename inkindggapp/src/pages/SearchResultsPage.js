import { Row, Col, Form, Button, Modal, Offcanvas, Dropdown } from "react-bootstrap";
import OrgCard from "../components/OrgCard";
import { organizationArray } from "../OrganizationStore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useToggle from "../hooks/Toggler";
import DonationCards from "../components/DonationCards";



function SearchResults() {

    // reserving piece of state for offcanvas toggle for filters. Utilizing useToggle custom hook stored in the hooks folder.
    const [drawer, toggleDrawer] = useToggle();

    // Sets selected org in state determined by click event for donate button on OrgCard component.
    const [selectOrg, setSelectOrg] = useState(null);

    //Saving below for later use 
    //const handleClose = useToggle(false);
    // const handleShow = useToggle(true);


    return (
        <>

            {/* Class names switch to drawer styling based on state. See App.css for styling. */}
            <main className={`containerForSearchContent ${drawer ? "shifted" : ''}`}>

                {/* Structure for search functionality on top of page */}
                <div className="searchFormCont m-5">
                    <h1 className="searchFormLabel">Search</h1>
                    <Row as={Form} className="align-items-center justify-content-between g-2">
                        <Col xs={20} md={7}>
                            <Form.Group className="mb-0">
                                <Form.Control className="searchPageSearchBar" type="search" placeholder="Enter keyword or state here" />
                            </Form.Group>
                        </Col>

                        <Col xs="auto">
                            <Link to="#" className="viewAllOrgs searchBarLinks p-0">View All</Link>
                        </Col>

                        {/* Drawer toggle */}
                        <Col xs="auto">
                            <Button variant="link" className="filterModalToggle searchBarLinks p-0" onClick={toggleDrawer}>{drawer ? "Hide Filters" : "Show Filters"}</Button>
                        </Col>
                    </Row>

                </div>

                <h1 className="searchResultsHeading">Here are some participating organizations!</h1>

                <div className="orgCards">

                    <Row xs={1} sm={3} className="g-4 m-0">

                        {/* Populates OrgCard Components to search results page */}
                        {organizationArray.map((organization) => (
                            <Col key={organization.id} align="center">
                                <OrgCard
                                    organization={organization}
                                    onDonate={setSelectOrg} // Passes selected org to org card for click event
                                />
                            </Col>
                        ))}

                    </Row>

                    <Modal
                        show={!!selectOrg} //Force selectOrg into boolean
                        onHide={() => setSelectOrg(null)}
                        className="donorModal"
                    >
                        <Modal.Header closeButton />
                        <Modal.Body>
                            <DonationCards
                                selectedOrg={selectOrg}
                            />
                        </Modal.Body>

                    </Modal>
                </div>

                {drawer && (
                    <Offcanvas
                        className="sideDrawer bg-body-tertiary"
                        show={drawer}
                        onHide={toggleDrawer}
                        placement="end"
                        backdrop
                        scroll="false"
                        style={{ width: "25vw", minWidth: 280, maxWidth: 480 }}

                    >
                        <Offcanvas.Header></Offcanvas.Header>
                        <Offcanvas.Title className="m-3"> Filters</Offcanvas.Title>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="causeDropdown">
                                Select Cause
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* Maps out causes for drop down. Causes are located in OrganizationStore file. We will be populating this info from a Give Gab object  */}
                                {organizationArray.map((cause) => (
                                    <Dropdown.Item key={cause.id}>{cause.cause}</Dropdown.Item>
                                ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form className="drawerCitySearch m-3">
                            <Form.Group>
                                <Form.Control type="search" placeholder="Filter by City"></Form.Control>
                            </Form.Group>
                        </Form>
                    </Offcanvas>
                )}


            </main >
        </>
    )
}

export default SearchResults;