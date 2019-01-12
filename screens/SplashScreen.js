import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import Button from '../src/components/Button'

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={{justifyContent:'center' , alignItems:'center' }}> 
          <TouchableOpacity 
          style={styles.buttonStyle}
          onPress = {() => this.props.navigation.navigate('Main')}>
            <Text> Push here</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

styles = { 
    buttonStyle: {
          backgroundColor: "red",
          alignSelf: "center",
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          padding:10,
          marginBottom:3,
          borderRadius:0,
          shadowColor:'blue',
          shadowOffset:{width: 0, height: 5},
          shadowOpacity:0.35,
        },
}