import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom"
const MenuInicio = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="fw-bold">Menu Inicio</h1>
      <div>
        <Row>
          <Col lg={12}>
            <Button as={Link} to="/asignacion" type="button" variant="secondary" className=" mt-5 p-3 fs-3 w-50">
              Asignacion de Tareas
            </Button>
          </Col>
          <Col lg={12}>
            <Button as={Link} to="/desasignacion" type="button" variant="secondary" className="mt-5 p-3 fs-3 w-50">
              Desasignacion de Tareas
            </Button>
          </Col>
          <Col lg={12}>
            <Button as={Link} to="/crear" type="button" variant="secondary" className="mt-5 p-3 fs-3 w-50">
              Crear Empleado
            </Button>
          </Col>
          <Col lg={12}>
            <Button as={Link} to="/eliminar" type="button" variant="secondary" className="mt-5 p-3 fs-3 w-50">
              Eliminar Empleado
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MenuInicio;
