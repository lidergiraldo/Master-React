//Importar Modulos de React / Dependencias
import React from 'react'

//Función del componente
function MiComponente() {
  let nombre = 'Liderman'
  let apellido = 'Giraldo'

  let equipos = {
    e1: 'Deportivo Cali',
    e2: 'Real Madrid'
  }

  return (
    <div className='MiComponente'>
        <hr/>
        <h2>Componente creado</h2>
        <h3>Datos del usuario</h3>
        <ul>
            <li>Nombre: <strong>{nombre+' '+apellido}</strong></li>
        </ul>
        <h3>Equipos favoritos</h3>
        <ul>
            {/*<li><strong>{JSON.stringify(equipos)}</strong></li>*/}
            <li><strong>{equipos.e1}</strong></li>
            <li><strong>{equipos.e2}</strong></li>
        </ul>
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