import React, { useState } from 'react';
import Resultado from './Resultado.jsx';

function FormularioPrecio() {
    
    // Input
    const[input, setInput] = useState({
        materiaPrima: '',
        produccion: '',
        gastosFijos: '',
        ganancia: '',
    }); 

    const [precioFinal, setPrecioFinal] = useState(null);

    // Actualiza
    const manejarCambio = (e) => { 
        const { name, value } = e.target;   
        setInput({
            ...input,
            [name]: value
        });   
    };

    // Click enviar Formulario
    const manejarEnvio = (e) => {
        e.preventDefault();

        const matP = parseFloat(input.materiaPrima) || 0;
        const prod = parseFloat(input.produccion) || 0;
        const fijos = parseFloat(input.gastosFijos) || 0;
        const ganancia = parseFloat(input.ganancia) || 0;

        const costoTotal = matP + prod + fijos;
        const precio = costoTotal * (1 + ganancia / 100);

        setPrecioFinal(precio.toFixed(2));
    };

    return (
        <form
            onSubmit={manejarEnvio}
            className='max-w-md mx-auto bg-white border-1 p-6 rounded-xl shadow-md space-y-4'
        >
            {/* Campo: materia prima */}
            <div>
                <label className='block text-sm font-medium text-gray-600'>
                    Materia Prima ($)
                </label>
                <input
                    type='number'
                    name='materiaPrima'
                    value={input.materiaPrima}
                    onChange={manejarCambio}
                    className='w-full p-2 border rounded-lg'
                />
            </div>

            {/* Campo: Produccion */}
            <div>
                <label className='block text-sm font-medium text-gray-600'> 
                    Produccion ($)
                </label>
                <input
                    type='number'
                    name='produccion'
                    value={input.produccion}
                    onChange={manejarCambio}
                    className='w-full p-2 border rounded-lg'
                />
            </div>

            {/* Campo: Gastos Fijos */}
            <div>
                <label className='block text-sm font-medium text-gray-600'>
                    Gastos Fijos ($)
                </label>
                <input
                    type='number'
                    name='gastosFijos'
                    value={input.gastosFijos}
                    onChange={manejarCambio}
                    className='w-full p-2 border rounded-lg'
                />
            </div>

             {/* Campo: Porcentaje de ganancia */}
            <div>
                <label className="block text-sm font-medium text-gray-600">
                    Ganancia (%)
                </label>
                <input
                    type="number"
                    name="ganancia"
                    value={input.ganancia}
                    onChange={manejarCambio}
                    className="w-full p-2 border rounded-lg"
                />
            </div>

            {/* Boton para calcular */}
            <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg 
                hover:bg-blue-800 transition'
            >
                Calcular Precio    
            </button>

            {precioFinal !== null && <Resultado precio={precioFinal} />}
        </form>
    );
}

export default FormularioPrecio;

