import React, { Component } from "react";

import "./style.css";

export default class DollarNow extends Component {
  constructor() {
    super();

    this.state = {
      dolarNow: "0"
    };
  }

  componentDidMount() {
    this.converter();
  }

  converter = () => {
    let url = `https://economia.awesomeapi.com.br/all/USD-BRL`;

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        let value = parseFloat(json.USD.high);
        this.setState({ dolarNow: value.toFixed(2) });
      });
  };

  render() {
    return (
      <div className="dollarApp">
        <h1>Dollar Now</h1>
        <small>Valor do dólar comercial hoje:</small>
        <h1>R$ {this.state.dolarNow}</h1>
        <input
          type="button"
          value="Verificar Atualização"
          onClick={this.converter}
        />
        <small className="fonte">Fonte: https://docs.awesomeapi.com.br/</small>
      </div>
    );
  }
}
