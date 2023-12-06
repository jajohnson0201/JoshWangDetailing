import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({currentPage, handlePageChange}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Brand href="#AboutMe" onClick={() => handlePageChange("AboutMe")}
                        className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
          <h1>Josh Wang Detailing</h1>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Gallery" onClick={() => handlePageChange("Gallery")}
                        className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}>
              <h2>
                Gallery
              </h2>
              </Nav.Link>
            <Nav.Link href="#Location" onClick={() => handlePageChange("Location")}
                        className={currentPage === 'Location' ? 'nav-link active' : 'nav-link'}>
              <h2>
              Location
              </h2>
              </Nav.Link>
              <Nav.Link href="#Review" onClick={() => handlePageChange("Review")}
                        className={currentPage === 'Review' ? 'nav-link active' : 'nav-link'}>
              <h2>
              Review
              </h2>
              </Nav.Link>


            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;