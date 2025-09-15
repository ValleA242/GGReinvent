import { Button, Container, Form } from 'react-bootstrap'

function searchContainer() {
    <div className='d-grid gap-2'>
        <h1 align='center'> Find Matches before Giving Tuesday at re:Invent</h1>

        <Form>
            <Form.Group className="mb-2" controlId='keywordSearch'>
                <Form.Label>Search</Form.Label>
                <Form.Control type='search' placeholder='Search (e.g. SPCA, Food Bank)' />
            </Form.Group>

            <Form.Group className="mb-2" controlId='orgLocation'>
                <Form.Label>Location</Form.Label>
                <Form.Control type='search' placeholder='Location (e.g. Ithica, NY)' />
            </Form.Group>

            <Button variant='primary' type='submit' size='lg'>
                Search
            </Button>

            <Button variant='primary' type='submit' size='lg'>
                Show All
            </Button>

        </Form>
    </div>
}