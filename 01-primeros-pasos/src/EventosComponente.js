import React from 'react'

export const EventosComponente = () => {

    const handleClick = (e, nombre) => {
        alert('Haz dado click al botón ' + nombre);
    };

    const handleDoubleClick = (e) => {
        alert('Haz dado doble click al botón ');
    };

    const handleHazEntrado = (e, accion) => {
        alert(`Haz ${accion} a la caja`);
    };

    return (
        <div>
            <h1>Eventos en React</h1>

            {/* evento click */}
            <button onClick={e => handleClick(e, "Liderman")}>Dame Click!</button>

            {/* Evento doble click */}
            <button onDoubleClick={ handleDoubleClick }>Dame doble Click!</button>

            {/* Evento OnMousEnter onMouseLeave */}
            <div id='caja' onMouseEnter={e => handleHazEntrado(e, 'entrado')}
                           onMouseLeave={e => handleHazEntrado(e, 'salido') }>
                Pasa por encima
            </div>


        </div>
    )
}
