import React from "react";
import { Form } from "react-bootstrap";

const ListaTareas = ({ tareas, onSelectTarea }) => {
  return (
    <Form.Group controlId="listaTareas" className="mt-4">
      <Form.Label className="fw-bold">Tareas</Form.Label>
      <Form.Select onChange={(e) => onSelectTarea(e.target.value)}>
        <option value="">Seleccione una tarea</option>
        {tareas.map((tarea, index) => (
          <option key={index} value={tarea}>
            {tarea}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default ListaTareas;

