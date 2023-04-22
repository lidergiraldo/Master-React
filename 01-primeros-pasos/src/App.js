import logo from './logo.svg';
import './App.css';
import MiComponente  from './MyComponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
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

      </header>
    </div>
  );
}

export default App;
