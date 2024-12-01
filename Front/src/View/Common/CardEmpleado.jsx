import React from "react";
import { Card, Container } from "react-bootstrap";

const CardEmpleado = ({empleado}) => {
  return (
    <Container className="mt-4" style={{ maxWidth: "300px" }}>
      <Card>
        <Card.Img
          variant="top"
          src={empleado.avatar || "https://via.placeholder.com/150"}
          alt="Avatar del empleado"
          style={{ height: "150px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Text>
            <strong>Nombre:</strong> {empleado.nombre || "N/A"} <br />
            <strong>Apellido:</strong> {empleado.apellido || "N/A"} <br />
            <strong>Edad:</strong> {empleado.edad || "N/A"} <br />
            <strong>DNI:</strong> {empleado.dni || "N/A"}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardEmpleado;
