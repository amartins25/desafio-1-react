import React, { Component } from 'react';
import './Main.css'
import Form from './Components/Form/Form'

export default class Main extends Component {

  render() {

    return (
      <div>
        <div className="App">
          <span className="Cep">CEP:*</span>
          <Form />
          <span className="DataCep">Não sei meu CEP</span>
          <span className="PutCep">Insira o CEP</span>
        </div>
      </div>
    );
  }
}
