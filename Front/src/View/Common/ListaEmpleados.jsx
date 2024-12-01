import React from "react";
import { ListGroup, Container } from "react-bootstrap";
import personas from "../../queries/bd";
const ListaEmpleados = () => {
 

  return (
    <Container className="mt-5" style={{ maxWidth: "300px" }}>
      <div
        style={{
          maxHeight: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <ListGroup>
          {personas.map((persona, index) => (
            <ListGroup.Item key={index}>{persona.nombre +" "+ persona.apellido}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default ListaEmpleados;