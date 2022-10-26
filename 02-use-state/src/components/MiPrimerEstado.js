import React from 'react'

export const MiPrimerEstado = () => {

  let nombre = 'Liderman Giraldo Escobar'  

  const cambiarNombre = e => {
    nombre = 'Cristiano Ronaldo'
  }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>{nombre}</strong>
        <br/>
        <button onClick={cambiarNombre}>Cambiar</button>
    </div>
  )
}
