import React from "react";
import "../style/counter.css"

function Counter({ numberClics }){
  return(
    <div className="counter">
      { numberClics }
    </div>
  )
}

export default Counter;