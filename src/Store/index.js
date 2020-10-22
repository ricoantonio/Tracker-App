import React, {createContext, useReducer, useMemo} from 'react';

import {userReducer, defaultUser} from './reducers/user';
import {events} from './reducers/events';
import {eventViewReducer, defaultEventView} from './reducers/eventView';
import {trackReducer, defaultTrack} from './reducers/track';

import addTrack from './actions/addTrack';
import addSort from './actions/addSort';
import newUser from './actions/newUser';
import removeTrack from './actions/removeTrack';
import removeSort from './actions/removeSort';

const Stores = createContext();

const Store = ({children}) => {
   const [state, dispatch] = useReducer(
      (prevState, action) => {
         return {
            events,
            userReducer: userReducer(prevState.userReducer, action),
            eventViewReducer: eventViewReducer(
               prevState.eventViewReducer,
               action,
            ),
            trackReducer: trackReducer(prevState.trackReducer, action),
         };
      },
      {
         events,
         userReducer: defaultUser,
         eventViewReducer: defaultEventView,
         trackReducer: defaultTrack,
      },
   );

   const actions = useMemo(
      () => ({
         ...newUser(dispatch),
         ...addSort(dispatch),
         ...addTrack(dispatch),
         ...removeTrack(dispatch),
         ...removeSort(dispatch),
      }),
      [],
   );

   return (
      <Stores.Provider value={{state, dispatch, actions}}>
         {children}
      </Stores.Provider>
   );
};

export {Stores, Store};
