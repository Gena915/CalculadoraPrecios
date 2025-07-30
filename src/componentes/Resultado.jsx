import React from "react";

function Resultado({ precio }) {
    return (
        <div className='bg-green-500 flex text-lg p-2 gap-3'>
            <h3> Precio de Venta: </h3>
            <p className='text-xl'> ${precio} </p>
        </div>
    );
}

export default Resultado;