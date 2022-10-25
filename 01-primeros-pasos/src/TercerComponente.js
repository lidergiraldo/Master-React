import React from 'react'

export const TercerComponente = ({nombre, apellido, ficha}) => {
  //console.log(props)
  return (
    <div className='tercer-componente'>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.estado}</li>
        </ul>
    </div>
  )
}
