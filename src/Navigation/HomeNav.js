import React, {useContext, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Track, Detail} from '../Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Stores} from '../Store';

const Tab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();

const HomeNav = () => {
   const {actions} = useContext(Stores);

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      try {
         const track = await AsyncStorage.getItem('track');
         const res = JSON.parse(track);
         if (track != null) {
            return actions.setTrack(res);
         }
      } catch (e) {
         console.log(e);
      }
   };

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
