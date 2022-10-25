import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
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
        </div>
      </header>
    </div>
  );
}

export default App;
