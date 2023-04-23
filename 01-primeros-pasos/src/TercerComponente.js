import React from 'react'

export const TercerComponente = ({nombre, apellido, ficha}) => {

    /* console.log(props); */

    return (
        <div>
            <h1>Comunicación entre Componentes</h1>
            <ul>
                <li> {nombre} </li>
                <li> {apellido} </li>
                <li> {ficha.altura} </li>
            </ul>
        </div>
    )
}
