import React, {useContext, useEffect} from 'react';
import {UserInput} from '../Screens';
import {createStackNavigator} from '@react-navigation/stack';
import {Stores} from '../Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const UserInputNav = () => {
   const {state, dispatch} = useContext(Stores);
   const user = state.userReducer.user;

   return (
      <Stack.Navigator headerMode="none">
         <Stack.Screen name="UserInput" component={UserInput} />
      </Stack.Navigator>
   );
};

export default UserInputNav;
