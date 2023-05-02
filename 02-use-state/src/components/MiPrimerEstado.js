import React, {useState} from 'react';

export const MiPrimerEstado = () => {

    //Problematica a solucionar
    /* let nombre = 'Liderman';

    const cambiarNombre = e =>{
        nombre = 'Karina';
    }; */

    const [nombre, setNombre] = useState('Karina');

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    };

    return (
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <strong>{ nombre }</strong>
            &nbsp;
            <button onClick={ e => cambiarNombre(e, 'Liderman') }>Cambiar</button>
            &nbsp;
            <input type="text" placeholder='Cambia el nombre' onChange={ e => cambiarNombre(e, e.target.value) }/>
        </div>
    )
}
