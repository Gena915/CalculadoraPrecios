import React from 'react'
import FormularioPrecio from './componentes/FormularioPrecio.jsx';
import logoReact from './assets/react.svg';

function App() {
  return (
    <div className='min-w-screen min-h-screen bg-gradient-to-r from-blue-500 to-purple-700'>
      <div>
        <img
        src={logoReact}
        />
      </div>
      <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6'>
        <h1 className='text-2xl font-bold mb-4 text-center'>
          Calculadora de Precios
        </h1>
        <FormularioPrecio />
      </div>
    </div>
  );
}

export default App;
