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

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo)
  }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>{nombre}</strong>
        <br/>
        <button onClick={e => cambiarNombre(e, 'Cristiano Ronaldo')}>Cambiar</button>
        <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'/>
    </div>
  )
}
