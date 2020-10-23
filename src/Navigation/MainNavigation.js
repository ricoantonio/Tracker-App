import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserInputNav from './UserInputNav';
import HomeNav from './HomeNav';
import {Stores} from '../Store';

const MainNavigation = () => {
   const {state, dispatch} = useContext(Stores);
   const user = state.userReducer.user;

   return (
      <NavigationContainer>
         {user ? <HomeNav /> : <UserInputNav />}
      </NavigationContainer>
   );
};

export default MainNavigation;
