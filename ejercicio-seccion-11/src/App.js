import logo from './logo.svg';
import './App.css';
import { EjercicioSeccion11 } from './components/EjercicioSeccion11';

function App() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <EjercicioSeccion11 year={ year } />

      </header>
    </div>
  );
}

export default App;
