function ListaTareas({ tareas, onToggle, onEliminar }) {
  if (tareas.length === 0) {
    return <p className="sin-tareas">No hay tareas pendientes 🎉</p>
  }

  return (
    <ul className="lista-tareas">
      {tareas.map((tarea) => (
        <li
          key={tarea.id}
          className={tarea.completada ? 'tarea completada' : 'tarea'}
        >
          <label>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => onToggle(tarea.id)}
            />
            <span>{tarea.texto}</span>
          </label>

          <button
            className="btn-eliminar"
            onClick={() => onEliminar(tarea.id)}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListaTareas;