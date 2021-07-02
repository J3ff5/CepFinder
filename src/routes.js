import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home'
import Map from './Map'

const Drawer = createDrawerNavigator()

export default function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name='Home' component={Home}/>
          <Drawer.Screen name='Map' component={Map}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }