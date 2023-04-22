import React from 'react'

export const SegundoComponente = () => {

    const libros = ['Harry Potter', 'Juego de tronos', 'Clean Code'];


    return (
        <div className='segundo-componente'>
            <h1>Listado de Libros</h1>
            {libros.length >= 1 ? 
                (<ul>
                    {
                        libros.map((libro,i) => {
                            return <li key={i}> {libro} </li>
                        })
                    }
                </ul>)
                :
                (<p>No hay libros</p>)
            }
        </div>
    )
}
