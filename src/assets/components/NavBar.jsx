import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Search, BellFill } from "react-bootstrap-icons";
import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import { Link } from "react-router-dom"; //  --> chiede di installare npm install react-router-dom
const NavBar = () => {
  return (
    <Navbar expand="lg" className="border-body" bg="dark" variant="dark">
      <Container fluid className="d-flex mx-4">
        <Navbar.Brand>
          <img src={logo} className="logo" alt="Netflix Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/TvShows" className="nav-link">
                Tv Shows
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Recently Added</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>My List</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="d-flex align-items-center gap-4">
            <Button variant="link" className="text-light">
              <Search />
            </Button>
            <Button className="text-light border-0 bg-dark">KIDS</Button>
            <Button variant="link" className="text-light">
              <BellFill />
            </Button>
            <NavDropdown
              title={
                <img src={avatar} alt="User Icon" className="imgProfile" />
              }
              id="navDropdown"
              className="text-light bg-dark "
              align="end"
            >
              <NavDropdown.Item href="#" className="bg-dark text-light ">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="bg-dark text-light">
                Settings
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
