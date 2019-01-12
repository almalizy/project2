import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import Header from '../src/components/header';
import { Entypo } from '@expo/vector-icons';



export default class HomeScreen  extends Component {
  render() {
    return (
      <View>
        <Header  headerText='HomeScreen '
        handleOnPress = {() =>this.props.navigation.openDrawer()}/>
     
  
      </View>
    )
  }
}


// export default {HomeScreen}