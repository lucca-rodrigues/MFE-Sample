import React, { lazy } from "react";
import ReactDOM from "react-dom";

// import "./index.css";

// Importe o módulo 'placeCards' diretamente do remoto 'finances'
import Home from "./Pages/Home";

const App = () => (
  <>
    <div>
      <Home />
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
