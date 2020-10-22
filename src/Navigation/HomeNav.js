import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Track, Detail} from '../Screens';

const Tab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();

const HomeNav = () => {
   function HomeStackScreen() {
      return (
         <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Detail" component={Detail} />
         </HomeStack.Navigator>
      );
   }
   return (
      <Tab.Navigator>
         <Tab.Screen name="Home" component={HomeStackScreen} />
         <Tab.Screen name="Track" component={Track} />
      </Tab.Navigator>
   );
};

export default HomeNav;
