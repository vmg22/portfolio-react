import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import fotoMia from '../assets/mi_foto.jpg'
import Footer from '../components/Footer'

const Home = () => {

    let Alumno = { 
        nombre: "Matias",
        apellido: "Garnica",
        lenguajes: ["HTML", "CSS", "JavaScript", "c#"],
        mascotas: [
            { nombre: "JAVA",
              tipo: "Gato",
              edad: "9 meses"
            },
        ],
        imagen: fotoMia
        
 
    
    } 

return (
    <div>
        <Header />
        <Main Alumno={Alumno}/>
        <Footer />
    </div>
)
       
}

export default Home
