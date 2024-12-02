import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Form, Row,Col } from "react-bootstrap";
import Swal from "sweetalert2";
import ListaEmpleados from "../Common/ListaEmpleados";
import { Link } from "react-router-dom";
import { faArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CardEmpleado from "../Common/CardEmpleado";
import personas from "../../queries/bd";
const Eliminar = () => {
  const [dni, setDni] = useState("");

  const [cambio, setCambio] = useState(false);
  const [empleado, setEmpleado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const encontrado = personas.find((per) => per.dni === dni);
    if (encontrado) {
      setEmpleado(encontrado);
      Swal.fire({
        icon: "success",
        title: "Empleado encontrado",
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Empleado no encontrado",
        text: "Ingrese otro DNI!",
        showConfirmButton: false,
        timer: 1000,
      });
      setEmpleado(null);
    }
    setCambio(true);
  };

  const realizado = () => {
    Swal.fire({
      title: "Confirmacion",
      text: "¿Esta seguro que desea Eliminar este empleado?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Confirmado!", "Empleado Eliminado", "success");
      } else if (result.isDismissed) {
        Swal.fire("Error", "No se logró eliminar el empleado", "error");
      }
    });
  };
  return (
    <Container>
      <Button as={Link} to="/inicio" type="button" variant="primary" className="mt-5 mb-5">
        <FontAwesomeIcon className="me-2" icon={faArrowLeft}></FontAwesomeIcon>
        Atras
      </Button>
      <h3 className="fw-bold">Eliminar Empleado</h3>

      <Form>
        <Row className="mt-4">
          <Col className="mt-1 text-center" xs={3}>
            <Form.Label>DNI del empleado</Form.Label>
          </Col>
          <Col xs={3}>
            <Form.Group>
              <Form.Control type="number" className=" mr-sm-2" value={dni} onChange={(e) => setDni(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={1}>
            <Button type="submit" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Col>
          <Col xs={5}></Col>
        </Row>
      </Form>
      <Row>
        {cambio === false ? (
          <>
            <Col xs={6}>
              <ListaEmpleados></ListaEmpleados>
            </Col>
            <Col xs={6}></Col>
          </>
        ) : (
          <>
            <Col xs={6}>
              <ListaEmpleados></ListaEmpleados>
            </Col>
            <Col xs={6} className="mt-4">
              {empleado && <CardEmpleado empleado={empleado}></CardEmpleado>}
            </Col>
            {empleado && (
              <Row className="mt-5 text-center">
                <Col xs={12}>
                  <Button type="button" onClick={realizado}>
                    Eliminar
                  </Button>
                </Col>
              </Row>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Eliminar;
