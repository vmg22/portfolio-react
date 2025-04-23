import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Main.css";

const Main = (props) => {
    return (
        <div className="main-container">
            <Card className="card">
                <Card.Img variant="top" src={props.Alumno.imagen} />
                <Card.Body>
                    <Card.Title className="card-title">
                        {props.Alumno.nombre} {props.Alumno.apellido}
                    </Card.Title>
                    <Card.Text className="card-text">
                        Soy estudiante de la carrera de Programación Universitaria y hasta el momento vimos{" "}
                        {props.Alumno.lenguajes.map((lenguaje, index) => (
                            <span key={index}> {lenguaje}</span>
                        ))}
                        .
                    </Card.Text>
                    Mi Mascota se llama{" "}
                    {props.Alumno.mascotas.map((mascota, index) => (
                        <span key={index}> {mascota.nombre}</span>
                    ))}{" "}
                    y es un{" "}
                    {props.Alumno.mascotas.map((mascota, index) => (
                        <span key={index}> {mascota.tipo}</span>
                    ))}{" "}
                    de{" "}
                    {props.Alumno.mascotas.map((mascota, index) => (
                        <span key={index}> {mascota.edad}</span>
                    ))}
                    .
                </Card.Body>
            </Card>
        </div>
    );
};

export default Main;