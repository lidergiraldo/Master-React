import React from 'react'

export const EventosComponente = () => {

    const handleClick = (e, nombre) => {
        alert('Haz dado click al botón ' + nombre);
    };

    return (
        <div>
            <h1>Eventos en React</h1>

            {/* evento click */}
            <button onClick={e => handleClick(e, "Liderman")}>Dame Click!</button>

        </div>
    )
}
