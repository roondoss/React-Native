import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.area}>

        <Text style={[ styles.textoPrincipal, styles.alinhaTexto ]}>Texto 1</Text>
        <Text style={styles.alinhaTexto} >Texto 2</Text>
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create ({
area:{
  marginTop: 64
},
textoPrincipal:{
  fontSize: 32,
  color: 'red'
},
alinhaTexto:{
  textAlign: 'center'
}
});
