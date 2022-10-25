import React from 'react'

export const SegundoComponente = () => {
  //const series = ['AHS', 'VIKINGS', 'LOS 100']
  const series = []
  
  return (
    <div className='segundo-componente'>
        <h1>Listado de Series</h1>
        {series.length >= 1 ?
            (<ul>
                {
                    series.map((serie, indice) => {
                        return <li key={indice}>{serie}</li>
                    })
                }
            </ul>)
        : (<p>No hay series favoritas</p>)
        }
    </div>
  )
}
