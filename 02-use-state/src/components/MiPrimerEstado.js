import React from 'react'

export const MiPrimerEstado = () => {

    let nombre = 'Liderman';

    const cambiarNombre = e =>{
        nombre = 'Karina';
    };

    return (
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <strong>{ nombre }</strong>
            &nbsp;
            <button onClick={ cambiarNombre }>Cambiar</button>
        </div>
    )
}
