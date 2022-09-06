
import { Button, Container, Nav, Navbar as NavBootstrap } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <NavBootstrap className="bg-white shadow-lg mb-3" sticky="top">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button
                    style={{ width: '4rem', height: '4rem', position: 'relative' }}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    Cart SVG
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: 'white',
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute", 
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)"
                        }}>
                        3
                    </div>
                </Button>
            </Container>
        </NavBootstrap>


    )
}
