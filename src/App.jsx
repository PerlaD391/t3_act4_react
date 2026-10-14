import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TarjetaPerfil from './components/TarjetaPerfil'
import Contador from './components/Contador'
import ListaTareas from './components/ListaTareas'

function App() {
  // Estado para la lista de tareas
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: true },
    { id: 2, texto: 'Hacer la actividad 4', completada: false },
    { id: 3, texto: 'Desplegar en GitHub Pages', completada: false },
  ])

  // Estado para el input de nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState('')

  // Función para agregar una tarea
  const agregarTarea = (e) => {
    e.preventDefault()
    if (nuevaTarea.trim() === '') return

    const nueva = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    }

    setTareas([...tareas, nueva])
    setNuevaTarea('')
  }

  // Función para marcar como completada
  const toggleTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    )
  }

  // Función para eliminar tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <div className="app">
      <Header titulo="Mi Primera App en React" />

      <section className="seccion">
        <h2>👤 Tarjeta de Perfil</h2>
        <TarjetaPerfil
          nombre="Perla Danae Gallardo Vasquez"
          profesion="Estudiante de Programación Web"
          correo="21160634@itoaxaca.edu.mx"
          habilidades={['HTML', 'CSS', 'JavaScript', 'React']}
        />
      </section>

      <section className="seccion">
        <h2>🔢 Contador</h2>
        <Contador valorInicial={0} />
      </section>

      <section className="seccion">
        <h2>📝 Lista de Tareas</h2>

        <form className="form-tarea" onSubmit={agregarTarea}>
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Escribe una nueva tarea..."
          />
          <button type="submit">Agregar</button>
        </form>

        <ListaTareas
          tareas={tareas}
          onToggle={toggleTarea}
          onEliminar={eliminarTarea}
        />
      </section>
    </div>
  )
}

export default App;