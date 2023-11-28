import './App.css';
import Boton from './components/button'
import logoReact from './image/logo512.png'
import Counter from './components/counter'
import { useState } from 'react';


function App() {

  const [numberClics, setNumberClics] = useState(0);  

  const manejarClic = () =>{
    setNumberClics(numberClics + 1);
  }

  const disminuirContador = () => {
    setNumberClics(numberClics - 1);
  }

  const reiniciarContador = () =>{
    setNumberClics(0);
  }
  
  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img 
        src={logoReact} 
        className='react-logo' 
        alt='Logo de React' />
      </div>
      <div className='contenedor-principal'>
        <Counter 
        numberClics={numberClics}
        />
        <Boton 
        text='Contar'
        isButtonClick={true}
        manejarClic={manejarClic}
        />

        <Boton 
        text='Disminuir'
        isButtonClick={false}
        manejarClic={disminuirContador}
        />

        <Boton 
        text='Reiniciar'
        isButtonClick={false}
        manejarClic={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
