import { useState } from 'react';
import './App.css'

function App() {
  const [varsta, setvarsta] = useState(0);

  const IncreaseVarsta = () => {
    setvarsta(varsta + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="HelloWorldStyle">
          HelloWorld
        </p>
        <h1>Varsta este : {varsta}</h1>

        <button onClick={IncreaseVarsta}>
          N. mihhai
        </button>
      </header>
    </div>
  );
}

export default App;