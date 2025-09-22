import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function SearchPage() {

    const navigate = useNavigate();
    return (
        <>
            <main>
                <Container className='d-grid gap-2 text-white pt-3' style={{ backgroundColor: "#e78e4c" }}>

                    <h1 align='center' className='text-bold'> Find Matches before Giving Tuesday at re:Invent</h1>

                    <Form>
                        <Form.Group className="mb-3" controlId='keywordSearch'>
                            <Form.Label>Cause</Form.Label>
                            <Form.Control type='search' placeholder='Search by Cause (e.g. Education, Foster Care)' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId='orgLocation'>
                            <Form.Label>Location</Form.Label>
                            <Form.Control type='search' placeholder='Location (e.g. Ithica, NY)' />
                        </Form.Group>

                        <div className="d-grid">
                            <Button
                                variant='primary'
                                type='submit'
                                size='lg'
                                className='mb-3'
                                style={{ backgroundColor: "#a2bba8", borderColor: "#a2bba8" }}
                                onClick={() => navigate("/searchresults")}
                            >
                                Search
                            </Button>

                            <Button variant='primary' type='submit' size='lg' className='mb-3' style={{ backgroundColor: "#a2bba8", borderColor: "#a2bba8" }}>
                                View All
                            </Button>
                        </div>

                    </Form>
                </Container>


                <Container className='d-grid gap-2 text-white p-4 savedMatchCont' align='center' style={{ backgroundColor: "#1b0047" }}>

                    <h1 className='text-bold'> Saved Matches</h1>
                    {/* if match array.length = 0 show this h2 otherwise show the objects in the array */}
                    <h4>You currently have no saved matches</h4>
                    <Button className="seeMatchesButton">
                        See Matches
                    </Button>


                </Container>
            </main>
        </>

    )
}

export default SearchPage;