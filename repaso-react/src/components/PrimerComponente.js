import React, {useState} from 'react'

export const PrimerComponente = () => {

  //let nombre = 'Liderman'
  let apellido = 'Giraldo' 

  const [nombre, setNombre] = useState('Liderman')

  let lenguajes = [
    'Javascript',
    'Java',
    'PHP',
    'Pythn'
  ]

  const cambiarNombre = nuevoNombre => {
    setNombre(nuevoNombre)
  }

  return (
    <div>
        <h1>Primer Componente</h1>
        <p>Hola <strong className={nombre.length >= 5 ? 'verde' : 'rojo'}>{nombre+' '+apellido}</strong> bienvenido!</p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='Escribe aquí'/>
        <button onClick={e => cambiarNombre('Cristiano Ronaldo')}>Cambiar Nombre</button>

        <h2>Lenguajes de programación</h2>
        <ul>
            {
                lenguajes.map((lenguaje, i) => {
                    return (<li key={i}>{lenguaje}</li>)
                })
            }
        </ul>
    </div>
  )
}
