import React, { Component } from 'react';
import Input from './Components/Form/Form'
import '../src/styles.css'


class App extends Component {
    constructor() {
        super();
        this.state = {
            cep: null,
        }
        this.getZipCode = this.getZipCode.bind(this)
    }
    

    getZipCode() {
        let url = "http://apps.widenet.com.br/busca-cep/api/cep/06233-030.json"
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) =>
        {
            this.setState({
                cep: responseJson
            });
        })
        console.log(this.responseJson)
    }
  
    render(){
       
        return (
            
            <div className="section">
                <h1 className="title">BuscaCEP</h1>
                <div className="box">
                    <span className="Cep">CEP:*</span>
                    <Input
                        onClick={() => this.getZipCode(console.log(1))}
                    />
                    <span className="DataCep">Não sei meu CEP</span>
                    <span className="PutCep">Insira o CEP</span>
                    <button onClick={() => this.getZipCode()} className="button">Search</button>
                    <span className="NextStep"> Próximo passo: Forma de pagamento</span>
                </div>
        
            </div>
            
        );
    }
    
}

export default App;


