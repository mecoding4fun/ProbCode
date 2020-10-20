import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './CustomSideBarMenu';
import { AppTabNavigator } from './AppTabNavigator'



export const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen : {
    screen : AppTabNavigator,
    },  
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'HomeScreen'
  })
