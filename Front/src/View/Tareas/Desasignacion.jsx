import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import arrow from "../../assets/left-arrow.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ListaEmpleados from "../Common/ListaEmpleados";
import CardEmpleado from "../Common/CardEmpleado";
import ListaTareas from "../Common/ListaTareas";
import personas from "../../queries/bd";
import Swal from "sweetalert2";

const Desasignacion = () => {
  const [dni, setDni] = useState("");

  const [cambio, setCambio] = useState(false);
  const [empleado, setEmpleado] = useState(null);
  const [tareaSeleccionada, setTareaSeleccionada] = useState("");

  const tareas = ["Tarea Asignada 1", "Tarea Asignada 2", "Tarea Asignada 3", "Tarea Asignada 4"];
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
  const handleSelectTarea = (tarea) => {
    setTareaSeleccionada(tarea);
    console.log(tarea);
  };
  const realizado = () => {
    Swal.fire({
      title: "Confirmacion",
      text: "¿Esta seguro que desea desasignar esta tarea?",
      showCancelButton: true,
      confirmButtonText: "Desasignar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Confirmado!", "Tarea Desasignada", "success");
      } else if (result.isDismissed) {
        Swal.fire("Error", "No se logró desasignar la tarea", "error");
      }
    });
  };
  return (
    <Container>
      <Button as={Link} to="/inicio" type="button" variant="primary" className="mt-5 mb-5">
        <FontAwesomeIcon className="me-2" icon={faArrowLeft}></FontAwesomeIcon>
        Atras
      </Button>
      <h3 className="fw-bold">Desasignacion de tareas</h3>

      <Form>
        <Row className="mt-4">
          <Col className="mt-1 text-center" xs={3}>
            <Form.Label>DNI del empleado</Form.Label>
          </Col>
          <Col xs={3}>
            <Form.Group controlId="dni">
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
            <Col xs={4}>
              <ListaEmpleados></ListaEmpleados>
            </Col>
            <Col xs={4}></Col>
            <Col xs={4}></Col>
          </>
        ) : (
          <>
            <Col xs={4}>
              <ListaEmpleados></ListaEmpleados>
            </Col>
            <Col xs={4} className="mt-4">
              {empleado && <CardEmpleado empleado={empleado}></CardEmpleado>}
            </Col>
            <Col xs={4} className="mt-5 text-center ">
              {empleado && <ListaTareas tareas={tareas} onSelectTarea={handleSelectTarea}></ListaTareas>}
            </Col>
            {empleado && (
              <Row className="mt-5 text-center">
                <Col xs={12}>
                  <Button type="button" onClick={realizado}>
                    Quitar
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

export default Desasignacion;
