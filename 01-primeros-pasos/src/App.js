import logo from './logo.svg';
import './App.css';
import MiComponente  from './MyComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {

  const ficha_medica = {
    altura: "1.77",
    grupo: "O+",
    estado: "BUENO",
    alergias: "NINGUNA"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Master en React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Cargar mi primer componente */}
        <MiComponente/>
        <hr/>
        <SegundoComponente/>
        <hr/>
        <TercerComponente 
          nombre="Liderman" 
          apellido="Giraldo"
          ficha= { ficha_medica }
        />

      </header>
    </div>
  );
}

export default App;
