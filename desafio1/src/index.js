import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles.css'
import Form from './Components/Form/Form'
import Button from './Components/Button/Button'

ReactDOM.render(
    <div className="section">
      <h1 className="title">BuscaCEP</h1>
      <div className="box">
          <span className="Cep">CEP:*</span>
          <Form />
          <span className="DataCep">Não sei meu CEP</span>
          <span className="PutCep">Insira o CEP</span>
          <Button />
          <span> Próximo passo: Forma de pagamento</span>
      </div>

      
    </div>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

