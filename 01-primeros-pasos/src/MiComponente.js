//Importar Modulos de React / Dependencias
import React from 'react'

//Función del componente
function MiComponente() {
  return (
    <div className='MiComponente'>
        <hr/>
        <h2>Componente creado</h2>
        <p>Este es mi primer componente</p>
        <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
        </ul>

        {/* <></> - <fragment><fragment/>*/}
    </div>
  )
}

//Export
export default MiComponente