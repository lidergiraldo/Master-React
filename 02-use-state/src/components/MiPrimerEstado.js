import React, {useState} from 'react'

export const MiPrimerEstado = () => {

  /*
  ¡Problematica que no funciona!

  let nombre = 'Liderman Giraldo Escobar'  

  const cambiarNombre = e => {
    nombre = 'Cristiano Ronaldo'
  }
  */

  const [nombre, setNombre] = useState('Liderman Giraldo')

  const cambiarNombre = e => {
    setNombre('Cristiano Ronaldo')
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
