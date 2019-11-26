import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles.css'
import Form from './Components/Form/Form'

ReactDOM.render(
    <div className="box">
        <h1 className="title">BuscaCEP</h1>
        <span className="Cep">CEP:*</span>
        <Form />
        <span className="DataCep">Não sei meu CEP</span>
        <span className="PutCep">Insira o CEP</span>
        
        
    </div>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

