import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0) {
      this.setState({ nome: 'Bem Vindo: ' + texto });
    } else {
      this, setState({ nome: '' })
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome!"
          underlineColorAndroid="transparent"
          onChangeText={this.pegaNome}
        />


        <Text style={styles.texto}> {this.state.nome} </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
});

