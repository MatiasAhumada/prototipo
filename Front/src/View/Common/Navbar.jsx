import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navb = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark" >
      <Container className="justify-content-center">
        <Navbar.Brand as={Link} to="/" className="text-white fs-3">
        Sistema de Asistencias
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navb;
