import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import * as crud from "../../provider/crudProvider";

export const ReadCrud = () => {
  //tratamiendo de datos
  const [valuesData, handleInputData] = useForm({
    id: 0,
  });

  const { id } = valuesData;

  //useState para mostrar datos en tabla
  const [datosUser, setDatosUser] = useState({
    _id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const { _id, email, first_name, last_name, avatar } = datosUser;

  const handleInputSubmit = (e) => {
    e.preventDefault();

    crud
      .readUser({
        id,
      })
      .then(({ id, email, first_name, last_name, avatar }) => {
        setDatosUser({
          _id: id,
          email: email,
          first_name: first_name,
          last_name: last_name,
          avatar: avatar,
        });
      });
  };

  return (
    <div>
      <h1 className="text-center">Read</h1>
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

      <hr />

      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{_id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>
              <img src={avatar} alt="" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
