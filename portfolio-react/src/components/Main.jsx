import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.Alumno.imagen} />
        <Card.Body>
          <Card.Title>{props.Alumno.nombre} {props.Alumno.apellido}</Card.Title>
          <Card.Text>
            Soy estudiante de la carrera de Programacion Universitaria y hasta el momentos vimos {props.Alumno.lenguajes.map(lenguajes => <span> {lenguajes}</span>)}.
          </Card.Text>



          Mi Mascota se llama {props.Alumno.mascotas.map(mascota => <span> {mascota.nombre}</span>)} y es un {props.Alumno.mascotas.map(mascota => <span> {mascota.tipo}</span>)} de {props.Alumno.mascotas.map(mascota => <span> {mascota.edad}</span>)}.

          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Main;
