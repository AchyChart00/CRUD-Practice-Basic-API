import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import * as crud from "../../provider/crudProvider";

export const UpdateCrud = () => {
  const [valuesData, handleInputData] = useForm({
    id: "",
    name: "",
    job: "",
  });

  const { id, name, job } = valuesData;

  const [datosUser, setDatosUser] = useState({
    updatedAt: "",
  });

  const { updatedAt } = datosUser;

  const handleInputSubmit = (e) => {
    e.preventDefault();

    crud
      .updateUser({
        id,
        name,
        job,
      })
      .then(({updatedAt}) => {
      
        setDatosUser({updatedAt});
      });
  };

  return (
    <div>
      <h1 className="text-center">Update</h1>
      <Form className="container" onSubmit={handleInputSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>id</Form.Label>
          <Form.Control
            type="number"
            placeholder="id"
            name="id"
            value={id}
            onChange={handleInputData}
          />
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={handleInputData}
          />
          <Form.Text className="text-muted">
            Introduce tú nombre completo
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Trabajo</Form.Label>
          <Form.Control
            type="job"
            placeholder="trabajo"
            name="job"
            value={job}
            onChange={handleInputData}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <hr />

      <div>
      {updatedAt}
      </div>
    </div>
  );
};
