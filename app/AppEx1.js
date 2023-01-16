import React, { Component } from 'react';
import {Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {

    let nome = 'Ronaldo';
    let img= 'https://sujeitoprogramador.com/steve.png'

    return (
      <View>
        
        <Text>Olá Mundo!</Text>
        <Text>Meu Primeiro App!</Text>
        <Text style={{ color: '#ff0000', fontSize: 25, margin: 16 }}>
          Testando Estilos
        </Text>

        <Image 
        source={{uri: img}}
        style={{ width: 300, height: 300, margin: 32}}
        />

        <Text style={{fontSize: 30}}>{nome}</Text>
        
        <Jobs largura={400} altura={200} fulano="Steeve Jobs"/>  

      </View>
    )
  }
}

class Jobs extends Component { // Componente Jobs
  render () {
    let img= 'https://sujeitoprogramador.com/steve.png'
    return (
      <View>
      <Image 
      source={{uri: img}}
      style={{ width: this.props.largura, height: this.props.altura, margin: 0}}
      />
      <Text> {this.props.fulano} </Text>
      </View>
    );
  }
}