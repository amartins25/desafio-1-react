import React, { Component } from 'react';
import '../src/styles.css'


class App extends Component {
    constructor() {
        super();
        this.state = {
            cep: null,
        }
        this.getZipCode = this.getZipCode.bind(this)
    }
    
    handleSubmit = (e) => {
        // let url = "http://apps.widenet.com.br/busca-cep/api/cep/cep.json"
        // fetch(url)
        // .then((response) => response.json())
        // .then((responseJson) =>
        // {
        //     this.setState({
        //         cep: responseJson,
        //     });
        // })

        e.preventDefault(); 
        const cep = e.target.elements.cep.value;
        localStorage.setItem('cep', cep);
        window.location.reload();
    }

    handleLogout = () => {
        localStorage.removeItem('cep/cep');
        window.location.reload();
        console.log(this.handleLogout)
    }

    getZipCode() {
        let url = "http://apps.widenet.com.br/busca-cep/api/cep/cep.json"
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) =>
        {
            this.setState({
                cep: responseJson,
            });
        })
        console.log(this.responseJson)
    }

    render(){
        const cep = localStorage.getItem('cep/cep');
        if (cep !== null) {
          return (
            <div className="section">
               <div className="box"> 
                <p className="DataCep">{cep}</p>
                <button className="button" onClick={this.handleLogout}>Sair</button>
              </div>
            </div>
          );
        }
        return (
            <div className="section">
                <h1 className="title">SearchCEP</h1>
                <div className="box">
                    
                    <form className="PutCep" onSubmit={this.handleSubmit}>
                            <label className="Cep">CEP*</label>
                            <input className="PutData" type="text" name="cep"  required />
                            <span className="PutCep">Insira o CEP</span>
                            <span className="DataCep">Não sei meu CEP</span>
                            <button className="button" type="submit">Entrar</button>
                            <span className="NextStep"> Próximo passo: Forma de pagamento</span>
                    </form>
                </div>
            </div>
            // <div className="section">
            //     <h1 className="title">SearchCEP</h1>
            //     <div className="box">
            //         <span className="Cep">CEP:*</span>
            //         <Input
            //         />
            //         <span className="DataCep">Não sei meu CEP</span>
            //         <span className="PutCep">Insira o CEP</span>
            //         <button onClick={() => this.getZipCode()} className="button">Search</button>
            //         <span className="NextStep"> Próximo passo: Forma de pagamento</span>
            //     </div>
        
            // </div>
            
        );
    }
    
}

export default App;


