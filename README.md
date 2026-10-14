# 🚀 Mi Primera App en React - Actividad 4

**Autor:** Perla Danae Gallardo Vasquez
**Materia:** Programación Web

**Repositorio:** https://github.com/PerlaD391/t3_act4_react
**Demo en vivo:** https://PerlaD391.github.io/t3_act4_react/

---

## 📋 Descripción del Proyecto

Mini aplicación construida con **React + Vite** que demuestra los conceptos fundamentales del framework:

- **Componente funcional simple:** `Header.jsx`
- **Componente con props:** `TarjetaPerfil.jsx` (recibe nombre, profesión, correo y habilidades)
- **Componente con estado:** `Contador.jsx` (usa `useState` para incrementar, decrementar y resetear)
- **Lista renderizada dinámicamente:** `ListaTareas.jsx` (usa `.map()` con `key` para renderizar tareas)

---

## 🧩 Componentes del Proyecto

### 1. `Header.jsx` - Componente simple

```jsx
function Header({ titulo }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <p>Actividad 4 - Introducción a React</p>
    </header>
  )
}
```

### 2. `TarjetaPerfil.jsx` - Componente con props

```jsx
function TarjetaPerfil({ nombre, profesion, correo, habilidades }) {
  return (
    <div className="tarjeta-perfil">
      <div className="avatar">{nombre.charAt(0)}</div>
      <h3>{nombre}</h3>
      <p>{profesion}</p>
      <p>📧 {correo}</p>
      <ul>
        {habilidades.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
  )
}
```

### 3. `Contador.jsx` - Componente con useState

```jsx
import { useState } from 'react'

function Contador({ valorInicial = 0 }) {
  const [contador, setContador] = useState(valorInicial)
  const [mostrarInfo, setMostrarInfo] = useState(true)

  return (
    <div>
      <h3>Contador: {contador}</h3>
      <button onClick={() => setContador(contador - 1)}>−</button>
      <button onClick={() => setContador(valorInicial)}>Reset</button>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? 'Ocultar' : 'Mostrar'} info
      </button>
      {mostrarInfo && <p>El contador usa useState</p>}
    </div>
  )
}
```

### 4. `ListaTareas.jsx` - Lista con .map() y keys

```jsx
function ListaTareas({ tareas, onToggle, onEliminar }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => onToggle(tarea.id)}
          />
          <span>{tarea.texto}</span>
          <button onClick={() => onEliminar(tarea.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}
```

---

## ❓ Cuestionario de React

### a) ¿Qué diferencia hay entre props y state en React?

**Props** son datos que se **pasan desde el componente padre** al hijo, como si fueran parámetros de una función. Son **inmutables** (no se pueden modificar dentro del componente que las recibe)[reference:0].

**State** es un dato que **se gestiona dentro del propio componente**. Es **mutable** y cuando cambia, React **re-renderiza** el componente automáticamente[reference:1].

| Aspecto | Props | State |
|:---|:---|:---|
| **Origen** | Del componente padre | Del propio componente |
| **Mutabilidad** | Inmutable | Mutable con `setState` |
| **Ejemplo** | `<TarjetaPerfil nombre="Luis" />` | `const [contador, setContador] = useState(0)` |

### b) ¿Por qué es importante usar una `key` al renderizar una lista de elementos?

Las **keys** ayudan a React a **identificar qué elementos de la lista han cambiado, se han agregado o eliminado**[reference:2]. Sin keys, React no puede saber qué elemento es cuál, lo que puede causar:

- **Re-renderizados innecesarios** (mal rendimiento)
- **Pérdida de estado** en los componentes hijos
- **Errores visuales** al actualizar la lista

React recomienda usar **identificadores únicos y estables** (como `tarea.id`) en lugar de índices de array, porque los índices cambian cuando se reordena o elimina un elemento[reference:3].

### c) Explica con tus propias palabras qué hace la función `useState` y da un ejemplo de dónde la usaste.

`useState` es un **Hook de React** que permite agregar **estado** a un componente funcional. Devuelve un **array con dos valores**:

1. El **valor actual** del estado
2. Una **función** para actualizarlo

Cuando llamas a esa función, React **re-renderiza el componente** con el nuevo valor[reference:4].

**Ejemplo de mi aplicación** (en `Contador.jsx`):

```jsx
const [contador, setContador] = useState(0)

// Al hacer clic en "+":
setContador(contador + 1)  // El componente se re-renderiza mostrando el nuevo valor
```

También lo usé en `App.jsx` para manejar la lista de tareas:

```jsx
const [tareas, setTareas] = useState([...])
```

### d) Enlace del repositorio de GitHub

🔗 **https://github.com/PerlaD391/t3_act4_react**

### e) Enlace del proyecto desplegado en GitHub Pages

🔗 **https://PerlaD391.github.io/t3_act4_react/**

---

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **Vite** (build tool)
- **JavaScript (ES6+)**
- **CSS3**
- **gh-pages** (despliegue)

---

## 📦 Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/t3_act4_react.git
cd t3_act4_react

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Desplegar en GitHub Pages
npm run deploy
```

---

## 📁 Estructura del Proyecto

```
t3_act4_react/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TarjetaPerfil.jsx
│   │   ├── Contador.jsx
│   │   └── ListaTareas.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📜 Licencia

Uso libre para fines académicos.
