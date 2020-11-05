import React from 'react';
import './Registro.css';

function App() {
  document.body.style = "background: #B7F4FF;";

  return (
    <div className="App">
      
      <div className='titulo'>
<h4>Registrarse</h4>
      </div>

      <div className='logo'>
<img src='logo psique.png' width='200px' height='200px'></img>
      </div>

      <div className='campo'>
      <label>
    <input type="text" name="name"/>
  </label>
      </div>

      <div className='campo2'>
      <label>

    <input type="mail" name="name" />
  </label>
      </div>

      <div className='campo3'>
      <label>

    <input type="password" name="name" />
  </label>
      </div>

      <div className='boton'>

      <button type="button" class="btn btn-danger btn-lg">Crear cuenta</button>

    </div>
    <div className="Usuario">
  <h5> Usuario</h5>
      
    </div>
    <div className="Correo">
  <h5> Correo</h5>
      
    </div>
    <div className="Contraseña">
  <h5> Contraseña</h5>
      
    </div>
    </div>
    
  );
}

export default App;
