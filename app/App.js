import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Ronaldo'
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    this.setState ({
      nome: 'José'
    })
  }

  render() {
    return (
      <View style={{ marginTop: 64 }}>

        <Text>Olá Mundo!</Text>
        <Text>Meu Primeiro App!</Text>

        <Button title="Entrar" onPress={this.entrar}/>
        <Text style={{ fontSize: 32, color: 'red', textAlign: 'center' }}>
          {this.state.nome}
        </Text>

        <Text style={{ color: '#ff0000', fontSize: 25, margin: 16 }}>
          Testando Estilos
        </Text>

      </View>
    )
  }
}
