import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e, nombre) => {
    alert('Hola ' + nombre + ' Haz dado click al botón')
  } 
  
  function hasdadoDobleClick(e){
    alert('Hola has dado doble click al botón')
  }

  return (
    <div>
        <h1>Eventos en React</h1>
        {/*Evento Click */}
        <button onClick={e => hasDadoClick(e, 'Liderman')}>Click</button>

        {/*Evento doble Click */}
        <button onDoubleClick={hasdadoDobleClick}>Doble Click</button>
    </div>
  )
}
