import React from "react";
import "../style/button.css"

function Boton({ text, isButtonClick, manejarClic }){
    return (
      <button className={ isButtonClick ? "boton-clic" : "boton-reiniciar" } onClick={manejarClic}>
        { text }
      </button>
    );
}

export default Boton;