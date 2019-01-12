import React from 'react';
import { createAppContainer, createSwitchNavigator,createDrawerNavigator ,createStackNavigator} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen'

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen'
import ProductsScreen from '../screens/ProductsScreen'

const SplashStack = createStackNavigator({
  Splash: SplashScreen,
});

SplashStack.navigationOptions = {
  headerTitle :'SplashStack',
  tabBarLabel: 'SplashStack',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createAppContainer(createDrawerNavigator({
  Splash:SplashStack,
  Main: MainTabNavigator,
  Products :ProductsScreen ,
  Home:HomeScreen ,
}));