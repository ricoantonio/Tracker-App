import React from 'react';
import {UserInput} from '../Screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const UserInputNav = () => {
   return (
      <Stack.Navigator headerMode="none">
         <Stack.Screen name="UserInput" component={UserInput} />
      </Stack.Navigator>
   );
};

export default UserInputNav;
