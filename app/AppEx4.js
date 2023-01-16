import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={{marginTop: 64, flex:1, flexDirection: 'row'}}>

        <View style={{ flex: 1, backgroundColor: 'red'}}>
          <Text style={{ textAlign: 'center', alignItems: 'center'}}>Box 1</Text></View>
        <View style={{ flex: 1, backgroundColor: 'green'}}></View>
        <View style={{ flex: 1, backgroundColor: 'yellow'}}></View>

      </View>
    );
  }
}

