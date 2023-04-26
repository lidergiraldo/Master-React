import React, {useState} from 'react';

export const MiPrimerEstado = () => {

    //Problematica a solucionar
    /* let nombre = 'Liderman';

    const cambiarNombre = e =>{
        nombre = 'Karina';
    }; */

    const [nombre, setNombre] = useState('Karina');

    const cambiarNombre = () => {
        setNombre('Liderman');
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
