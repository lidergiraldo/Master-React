import React, { useState } from 'react'

export const PrimerComponente = () => {

    const [nombre, setNombre] = useState('Liderman');
    let apellido = 'Giraldo';

    let conocimientos = [
        'HTML',
        'CSS',
        'Javascript'
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    return (
        <div>
            <h1>Primer Componente</h1>
            <p>Texto del componente 1</p>
            <p><strong className={ nombre.length >= 4 ? 'verde' : 'rojo' }>{ nombre }</strong> { apellido }</p>

            <input type="text" placeholder='cambiar nombre' onChange={ e => cambiarNombre(e.target.value) }/>
            <button onClick={ e => cambiarNombre('Karina') }>cambiar</button>

            <ul>
                {
                    conocimientos.map( (c, i)  => {
                        return(
                            <li key={i}>{ c }</li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
