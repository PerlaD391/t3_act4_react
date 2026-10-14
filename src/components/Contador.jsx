import { useState } from 'react'

function Contador({ valorInicial = 0 }) {
  const [contador, setContador] = useState(valorInicial)
  const [mostrarInfo, setMostrarInfo] = useState(true)

  return (
    <div className="contador">
      <h3>Contador: {contador}</h3>

      <div className="botones">
        <button onClick={() => setContador(contador - 1)}>−</button>
        <button onClick={() => setContador(valorInicial)}>Reset</button>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </div>

      <button
        className="btn-toggle"
        onClick={() => setMostrarInfo(!mostrarInfo)}
      >
        {mostrarInfo ? 'Ocultar' : 'Mostrar'} información
      </button>

      {mostrarInfo && (
        <p className="info">
          El contador usa <strong>useState</strong> para actualizar el valor.
        </p>
      )}
    </div>
  )
}

export default Contador