import React, { Component } from 'react';
import './styles.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phraseText: ''
    };

    this.breakFortuneCookie = this.breakFortuneCookie.bind(this);

    this.phrases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];

  }

  breakFortuneCookie() {
    let state = this.state; // Acessar as states
    let randomNumber = Math.floor(Math.random() * this.phrases.length)
    state.phraseText = '"' + this.phrases[randomNumber] + '"';
    this.setState(state)
  }

  render() {
    return (
      <div className='container'>
        <img className='img' src={require('../assets/fortunecookie.png')} />
        <Button name='Abrir o Biscoito' actionBtn={this.breakFortuneCookie}/>
        <h3 className='phraseText'>{this.state.phraseText}</h3>
      </div>
    );
  }
}

class Button extends Component {

  render() {
    return (
      <button onClick={this.props.actionBtn} >{this.props.name}</button>
    )
  }

}

export default App