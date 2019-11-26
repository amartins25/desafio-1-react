import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <span className="Cep">CEP:*</span>
      <input className="PutData"></input>
      <span className="DataCep">Não sei meu CEP</span>
      <span className="PutCep">Insira o CEP</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);