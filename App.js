import React from 'react';
import {Store} from './src/Store';
import MainNavigation from './src/Navigation/MainNavigation';

const App = () => {
   return (
      <Store>
         <MainNavigation />
      </Store>
   );
};

export default App;
