import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Crear = () => {
const navigate = useNavigate()
const location = useLocation()
const [habilitado, setHabilitado] = useState(false);
useEffect(() => {
    if (location.state?.biometricoConfirmado) {
      setHabilitado(true);
    }
  }, [location.state]);
  const handleEscaneoBiometrico = () => {
    navigate("/", { state: { fromCrear: true } });
  };
const noti=()=>{
    Swal.fire({
        title: "Confirmacion",
        text: "¿Crear Empleado nuevo?",
        showCancelButton: true,
        confirmButtonText: "Crear",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Confirmado!", "Empleado Creado", "success");
          navigate("/inicio")
        } else if (result.isDismissed) {
          Swal.fire("Error", "Formato de los datos incorrectos", "error");
        }
      });
}
  return (
    <Container>
      <Button as={Link} to="/inicio" type="button" variant="primary" className="mt-5 mb-5">
        <FontAwesomeIcon className="me-2" icon={faArrowLeft}></FontAwesomeIcon>
        Atras
      </Button>
      <h3 className="fw-bold">Crear Empleado</h3>
      <Row>
        <Col xs={12} className="text-center mt-4">
          <h3 style={{ textDecoration: "underline" }}>Formulario de alta</h3>
        </Col>
        <Col xs={6}>
          <div className="d-flex mt-3">
            <Form.Label className="mt-2 me-3 fw-bold">Nombre</Form.Label>
            <Form.Group >
              <Form.Control type="text" className=" mr-sm-2" />
            </Form.Group>
          </div>
          <div className="d-flex mt-3">
            <Form.Label className="mt-2 me-3 fw-bold">Apellido</Form.Label>
            <Form.Group >
              <Form.Control type="text" className=" mr-sm-2" />
            </Form.Group>
          </div>
          <div className="d-flex mt-3">
            <Form.Label className="mt-2 me-3 fw-bold">DNI</Form.Label>
            <Form.Group>
              <Form.Control type="number" className=" mr-sm-2" />
            </Form.Group>
          </div>
        </Col>
        <Col xs={6} className="d-flex justify-content-center align-items-center">
          <Button onClick={handleEscaneoBiometrico}>Escaneo Biometrico</Button>
        </Col>
        <Col xs={12} className="text-center mt-4"><Button onClick={noti} disabled={!habilitado}>Crear</Button></Col>
      </Row>
    </Container>
  );
};

export default Crear;
