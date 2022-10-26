import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: '1.67cm',
    grupo: 'o-',
    estado: 'Bueno'

  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Master in React
        </p>
        {/*Cargar mi primer componente*/}
        <div className='componentes'>
          <MiComponente/>
          <hr/>
          <SegundoComponente/>
          <hr/>
          <TercerComponente
            nombre = 'Karina'
            apellido = 'Rodriguez'
            ficha = {ficha_medica}
          />
          <hr/>
          <EventosComponente/> 
        </div>
      </header>
    </div>
  );
}

export default App;
