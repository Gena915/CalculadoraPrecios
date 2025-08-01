import React from 'react'
import FormularioPrecio from './componentes/FormularioPrecio.jsx';
import { BiSolidCalculator } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import calImg from'./assets/calculator.svg';
import entPrImg from'./assets/enterprise.svg';
import operImg from'./assets/operation.svg';




function App() {
  return (
    <div className='flex flex-col max-h-screen bg-cover' style={{ backgroundImage: "url('../public/bg.jpg')"}}>

      <header className='flex justify-between max-w-screen min-h-22 bg-gray-800 backdrop-blur-sm p-4'>
        <div className='bg-blue-100 w-fit p-3 rounded'>
          <h1 className='text-xl font-bold font-poppins text-purple-700'>
            Precio Justo
          </h1>
        </div>
        <BiSolidCalculator className='self-center w-auto h-10 mr-20 text-purple-800'/>
      </header>

      <div className='max-w-screen max-h-screen mb-31 relative w-full column items-center justify-between'>
          
        <div className='pointer-events-none select-none z-0'>

          <img
            src={calImg} 
            alt='Decorativa'
            className='absolute top-30 left-20 w-20 opacity-80' />

          <img
            src={operImg} 
            alt='Decorativa'
            className='absolute top-15 right-50 w-20 opacity-70' />

          <img
            src={entPrImg} 
            alt='Decorativa'
            className='absolute top-150 left-40 w-20 opacity-80' />

            

        </div>
          
        <section className='relative z-10'>
          

          <p className='text-blue-800 text-center font-poppins text-2xl pt-15 pb-10 font-bold'>
            Cargá tus costos y Descubrí el valor real
          </p>
        </section>

        <section>
          <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-md p-2.5'>
            <section className='flex justify-center gap-1.5'>
              <BsCurrencyDollar className='w-6 text-purple-800 h-9 mb-2.5'/>
              <h2 className='text-2xl font-bold mb-4'>
                Calculadora de Precios
              </h2>
            </section>  
            <FormularioPrecio />
            <p className='text-center text-gray-700 font-semibold text-sm'>
            Calculadora orientativa. No reemplaza asesoramiento profesional.
          </p>
          </div>
        </section>

      </div>

      <p className=' absolute text-center right-0 bottom-27 font-medium text-gray-600 text-sm bg-white rounded-l-full inline-block shadow-md pl-9 pr-3 pt-4 pb-5'>
          <span
            className='block text-purple-600 font-poppins text-2xl font-bold'>
            +500 
          </span>
          <span className='block'> 
            personas
          </span>
          <span className='block'>
            ya calcularon 
          </span>
          <span className='block'>
            su
          </span>
          <span 
            className='block text-purple-600 text-l font-poppins font-bold'>
            Precio Justo
          </span>
        </p>

      <footer className='flex-col text-center bg-gray-800 text-gray-500 py-2'>  
        <section className='flex gap-2 justify-center text-gray-300'> 
          <a href="https://github.com/Gena915/CalculadoraPrecios" target='blank' rel='noopener noreferrer'>
            <FaGithub className='w-8 h-auto hover:text-purple-100'/>
          </a>
          <a href="https://www.linkedin.com/in/genaro-garcia-46b36b331/" target='blank' rel='noopener noreferrer'>
            <FaLinkedin className='w-8 h-auto hover:text-purple-100'/>
          </a>
        </section>
        <p> Politica de Privacidad </p>
        <p>&copy; Creado por GenaroGarcia </p>
      </footer>

    </div>

    
  );
}

export default App;
