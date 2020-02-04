import React, { Component } from 'react';
import '../src/styles.css'
import axios from 'axios'


class App extends Component {
    constructor() {
        super();
        this.state = {
            cep: null,
        }
        this.getAddress = this.getAddress.bind(this)
    }
    
    handleSubmit = (e) => {

        e.preventDefault(); 
        const cep = e.target.cep.value;
        localStorage.setItem('cep', cep);
        // window.location.reload();
        this.getAddress(cep)
    }

    handleLogout = (cep) => {
        localStorage.removeItem('cep', cep);
        window.location.reload();
        console.log(this.handleLogout)
    }

    componentDidMount() {
        const url ='https://jsonplaceholder.typicode.com/users'
        
        axios.get(url).then(response => {
            const address = response.data
            console.log(address)
        })
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        //   .then(res => {
        //     const cep = res.data;
        //     this.setState({ cep });
        //   })
    }


    getAddress(cep) {
        axios
            .get('http://apps.widenet.com.br/busca-cep/api/cep/cep.json')
            .then(response => (this.info = response.data.bpi))
        // let url = "http://apps.widenet.com.br/busca-cep/api/cep/" + cep + ".json"
        // fetch(url)
        // .then((response) => response.json())
        // .then((responseJson) =>
        // {
        //     this.setState({
        //         cep: responseJson,
        //     });
        // })
        // console.log(this.cep)
    }

    render(){
        const cep = localStorage.getItem('cep/cep');
        if (cep !== null) {
          return (
            <div className="section">
               <div className="box">
                <div>
                    <label>Cep</label>
                    <input>
                    </input>
                </div>
                <div>
                    <label>Endereço</label>
                    <input>
                    </input>
                </div>
                <div>
                    <label>Bairro</label>
                    <input>
                    </input>
                </div>
                <div>
                    <label>Cidade</label>
                    <input>
                    </input>
                </div>
                <div>
                    <label>Estado</label>
                    <input>
                    </input>
                </div>
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
                <ul>
                    {/* { this.state.cep.map(cep => <li>{cep.name}</li>)} */}
                </ul>
            </div>
            
        );
    }
}

export default App;