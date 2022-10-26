import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e, nombre) => {
    alert(`Hola ${nombre} Haz dado click al botón`)
  } 
  
  function hasdadoDobleClick(e){
    alert('Hola has dado doble click al botón')
  }

  const hasEntrado = (e) => {
    alert('Has entrado a la caja')
  }

  const hasSalido = (e) => {
    alert('Has salido a la caja')
  }

  return (
    <div>
        <h1>Eventos en React</h1>
        {/*Evento Click */}
        <button onClick={e => hasDadoClick(e, 'Liderman')}>Click</button>

        {/*Evento doble Click */}
        <button onDoubleClick={hasdadoDobleClick}>Doble Click</button>

        {/*Evento onMouseClick onMouseLeave*/}
        <div id='caja' onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>
            Pasa por encima!
        </div>
    </div>
  )
}
