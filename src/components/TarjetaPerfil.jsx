function TarjetaPerfil({ nombre, profesion, correo, habilidades }) {
  return (
    <div className="tarjeta-perfil">
      <div className="avatar">{nombre.charAt(0)}</div>
      <h3>{nombre}</h3>
      <p className="profesion">{profesion}</p>
      <p className="correo">📧 {correo}</p>

      <div className="habilidades">
        <strong>Habilidades:</strong>
        <ul>
          {habilidades.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TarjetaPerfil;