import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {
    render() {
        return (
            <div>
                <input className="PutData" placeholder="00000000"></input>
            </div>
        )
    }
}