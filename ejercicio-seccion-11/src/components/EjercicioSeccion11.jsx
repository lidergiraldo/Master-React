import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const EjercicioSeccion11 = ({ year }) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = (e) => {
        setYearNow(yearNow + 1);
    }

    const anterior = (e) => {
        setYearNow(yearNow - 1);
    }

    const changeYear = (e) => {
        let valueInput = parseInt(e.target.value);

        if(Number.isInteger(valueInput)){
            setYearNow(valueInput);
        }else{
            setYearNow(year);
        }
    }

    return (
        <div>
            <h2>Ejercicio con Eventos y UseState</h2>
            <button onClick={ anterior }>Ir al anterior</button>
            &nbsp;
            <strong className='label label-green'>
                { yearNow }
            </strong>
            &nbsp;
            <button onClick={ siguiente }>Ir al siguiente</button>
            <p>Cambiar año: 
                <input 
                    type="text" 
                    placeholder='cambiar año'
                    onChange={ changeYear }/>
            </p>
        </div>
  )
}

EjercicioSeccion11.propTypes = {
    year: PropTypes.number.isRequired,
}
