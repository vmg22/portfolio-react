import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Main.css'

const Main = (props) => {
  return (
    <div className="main-container">
      <main>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.Alumno.imagen} />
      <Card.Body>
        <Card.Title>{props.Alumno.nombre} {props.Alumno.apellido}</Card.Title>
        <Card.Text>
          Estudio en UTN-FRT la tecnicatura universitaria en programacion donde me enseñaron lenguajes como
          {props.Alumno.Lenguajes.map(Lenguajes => <span> {Lenguajes } </span>)}
          Tengo {props.Alumno.Edad} años y tengo una mascota que se llama {props.Alumno.mascota[0].nombre} y es un {props.Alumno.mascota[0].especie} de {props.Alumno.mascota[0].edad}.
        </Card.Text>
    
      </Card.Body>
    </Card>
    <br />
    <br />
    <br />
      </main>
    
    
    </div>
  )
}

export default Main