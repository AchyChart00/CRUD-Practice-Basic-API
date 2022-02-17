import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import * as crud from "../../provider/crudProvider";

export const DeleteCrud = () => {
  //tratamiendo de datos
  const [valuesData, handleInputData] = useForm({
    id: 0,
  });

  const { id } = valuesData;

  //useState para mostrar datos en tabla
  const [datosUser, setDatosUser] = useState({
    resp: "",
  });

  const { resp } = datosUser;

  const handleInputSubmit = (e) => {
    e.preventDefault();

    crud
      .deleteUser({
        id,
      })
      .then((resp) => {
        setDatosUser({ resp });
      });
  };

  return (
    <div>
      <h1 className="text-center">Delete</h1>
      <Form className="container" onSubmit={handleInputSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="number"
            placeholder="id"
            name="id"
            value={id}
            onChange={handleInputData}
          />
          <Form.Text className="text-muted">
            Introduce el id del usuario que deseas borrar
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <div className="container">
        <span>{resp}</span>
      </div>
    </div>
  );
};
