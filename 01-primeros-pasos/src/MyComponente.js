//Importar modulos de react / dependencias
import React from "react";

//Funcion del componente
const MiComponente = () => {

    let nombre = 'Liderman';
    let apellido = 'Giraldo';

    let usuario = {
        nombre: 'Karina',
        apellidos: 'Rodriguez',
        apodo: 'Bichota'
    };

    return(
        <>
            <h2>Componente creado</h2>
            <p>Este es mi primer componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
            <h3>Creado por: <strong>{nombre} {apellido}</strong> </h3>
            <h3>{usuario.nombre} / {usuario.apellidos} / {usuario.apodo}</h3>
        </>
    );
}

//Export
export default MiComponente;