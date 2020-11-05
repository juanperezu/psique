import React from "react";
import "./Emociones.css";
import Nav from "/src/Components/Navbar.js";
class App extends React.Component {
  state = {
    curTime: new Date().toLocaleString()
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <header className="color">
          <div className="Titulo">
            <h3>¿Cómo te sientes hoy?</h3>
          </div>
          <div className="titulo2">
            <p> Hoy es: {this.state.curTime}</p>
          </div>
        </header>

        <div className="boton1">
          <button type="button" class="btn btn-light btn-lg btn-block">
            Feliz
          </button>
        </div>

        <img src="muy-feliz (2).png" />

        <div className="boton2">
          <button
            type="button"
            class="btn btn-light btn-lg btn-block"
            height="400%"
          >
            Frustrado
          </button>
        </div>

        <img src="neutral.png" className="img2" alt="." />

        <div className="boton3">
          <button
            type="button"
            class="btn btn-light btn-lg btn-block"
            height="400%"
          >
            Enojado
          </button>
        </div>

        <img src="enojado.png" className="img3" alt="." />

        <div className="boton4">
          <button
            type="button"
            class="btn btn-light btn-lg btn-block"
            height="400%"
          >
            Triste
          </button>
        </div>

        <img src="muy-triste.png" className="img4" alt="." />

        <div className="boton5">
          <button
            type="button"
            class="btn btn-light btn-lg btn-block"
            height="400%"
          >
            Asombrado
          </button>
        </div>

        <img src="asombrado (2).png" className="img5" alt="." />

        <div className="boton6">
          <button
            type="button"
            class="btn btn-light btn-lg btn-block"
            height="400px"
          >
            Entusiasmado
          </button>
        </div>

        <img src="entusiasmado.png" className="img6" alt="." />
      </div>
    );
  }
}

export default App;
