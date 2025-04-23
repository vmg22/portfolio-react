import React from 'react';
import "../styles/Header.css";

const Header = () => {
    let Alumno = " Garnica Matias";

    return (
        <div className="header">
            <h1>Portfolio {Alumno}</h1>
            <hr />
        </div>
    );
};

export default Header;