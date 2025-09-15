import { Button, Container, Form } from 'react-bootstrap'

function SearchComponent() {
    return (
        <Container className='d-grid gap-2 pt-3 text-white' style={{ backgroundColor: "#e78e4c" }}>

            <h1 align='center' className='text-bold'> Find Matches before Giving Tuesday at re:Invent</h1>

            <Form>
                <Form.Group className="mb-3" controlId='keywordSearch'>
                    <Form.Label>Search</Form.Label>
                    <Form.Control type='search' placeholder='Search (e.g. SPCA, Food Bank)' />
                </Form.Group>

                <Form.Group className="mb-3" controlId='orgLocation'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='search' placeholder='Location (e.g. Ithica, NY)' />
                </Form.Group>

                <div className="d-grid">
                    <Button variant='primary' type='submit' size='lg' className='mb-3' style={{ backgroundColor: "#a2bba8", borderColor: "#a2bba8" }}>
                        Search
                    </Button>

                    <Button variant='primary' type='submit' size='lg' className='mb-3' style={{ backgroundColor: "#a2bba8", borderColor: "#a2bba8" }}>
                        View All
                    </Button>
                </div>

            </Form>
        </Container>
    )
}

export default SearchComponent;