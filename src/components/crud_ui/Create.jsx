import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";

import * as crud from "../../provider/crudProvider";

export const CreateCrud = () => {
  const [valuesData, handleInputData] = useForm({
    name: "",
    job: "",
  });

  const { name, job } = valuesData;

  const [datosUser, setDatosUser] = useState({
    nombre: "",
    trabajo: "",
    id: "",
    createdAt: "",
  });

  const { nombre, trabajo, id, createdAt } = datosUser;

  const handleInputSubmit = (e) => {
    e.preventDefault();

    crud
      .createUser({
        name: name,
        job: job,
      })
      .then(({ name, job, id, createdAt }) => {
        setDatosUser({
          nombre: name,
          trabajo: job,
          id: id,
          createdAt: createdAt,
        });
      });

    localStorage.setItem(
      "user",
      JSON.stringify({ nombre, trabajo, id, createdAt })
    );
  };

  return (
    <div>
      <h1 className="text-center">Create</h1>
      <Form className="container" onSubmit={handleInputSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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

      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{trabajo}</td>
            <td>{createdAt}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
