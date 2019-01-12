import React from 'react';
import { View } from '@expo/samples';
import Header from '../src/components/header';

export default class SettingsScreen extends React.Component {


  render() {
    return    <Header  headerText='Settings Screen '
    handleOnPress = {() =>this.props.navigation.openDrawer()}/>;
  }
}
