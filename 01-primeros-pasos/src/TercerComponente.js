import React from 'react'
import PropTypes from 'prop-types'

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

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object
}
