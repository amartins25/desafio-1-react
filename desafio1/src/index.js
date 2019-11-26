import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main/Main'

import '../src/styles.css'

ReactDOM.render(
    <div className="box">
        <h1 className="title">BuscaCEP</h1>
        <Main />
        <Form />
        
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

