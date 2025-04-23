import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import fotoMia from "../assets/mi_foto.jpg";
import Footer from "../components/Footer";

const Home = () => {
  let Alumno = {
    nombre: "Matias",
    apellido: "Garnica",
    Edad: 33,
    Lenguajes: ["HTML", "CSS", "JavaScript", "c#"],
    mascota: [{ nombre: "JAVA", especie: "Gato", edad: "9 meses" }],
    imagen: fotoMia,
  };

  return (
    <div>
      <Header />
      <Main Alumno={Alumno} />
      <Footer />
    </div>
  );
};

export default Home;
