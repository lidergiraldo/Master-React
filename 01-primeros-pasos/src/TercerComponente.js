import React from 'react';
import PropTypes from 'prop-types';

export const TercerComponente = ({nombre="Liderman", apellido="Giraldo", ficha}) => {

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

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object,
}

TercerComponente.defaultProps = {
    nombre: 'Liderman',
    apellido: 'Giraldo'
}