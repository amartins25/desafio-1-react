import React, { Component } from 'react';
import Input from './Components/Form/Form'
import Button from './Components/Button/Button'
import '../src/styles.css'

class App extends Component {
    state = {
        cep: null,
    }

    componentDidMount() {
        const url = 'http://apps.widenet.com.br/busca-cep/api/cep.json';
        
        fetch(url)
            .then(response =>{
                console.log(response)
                const data = response.json();
                console.log(data);
                return data
            })
            .then(data => {
                console.log(data)
                this.setState({cep:data})
            })  
         
    }
  
    render(){
       
    return (
        <div className="section">
            <h1 className="title">BuscaCEP</h1>
            <div className="box">
                <span className="Cep">CEP:*</span>
                <Input
                onClick={() => this.value()}
                />
                <span className="DataCep">Não sei meu CEP</span>
                <span className="PutCep">Insira o CEP</span>
                <Button />
                <span className="NextStep"> Próximo passo: Forma de pagamento</span>
            </div>
    
        </div>
        
    )}
}

export default App;


