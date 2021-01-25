

import React, { Component } from 'react'

import {Navbar,Nav, Form, FormControl, Button} from 'react-bootstrap'

class navbar extends Component {
    render() {
        return (
            <div>

                <Navbar bg="lightCoral" variant="dark">
                    <Navbar.Brand href="#home text-dark ">STATE</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Songs</Nav.Link>
                    <Nav.Link href="#features">Books</Nav.Link>
                    <Nav.Link href="#pricing">Cities</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>

  
            </div>
        )
    }
}
export default navbar;