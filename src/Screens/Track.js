import React, {useState, useContext, useEffect, useRef} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import EventListView from '../Components/EventListView';
import EventGridView from '../Components/EventGridView';

const Track = ({navigation: {navigate}}, props, route) => {
   const {state, dispatch, actions} = useContext(Stores);
   const tracked = state.trackReducer.track;
   const sortToggle = state.trackReducer.sortToggle;
   const sort = state.trackReducer.sort;
   const eventViewList = state.eventViewReducer.eventViewList;

   useEffect(() => {
      dispatch({type: 'SORT_OFF'});
   }, []);

   return (
      <View>
         {sortToggle ? (
            <Button
               onPress={() => dispatch({type: 'SORT_TRACK'})}
               disabled={tracked.length === sort.length ? false : true}
               title={'DONE'}
            />
         ) : (
            <Button
               onPress={() => dispatch({type: 'SORT_TOGGLE'})}
               title={'Sort'}
            />
         )}
         {eventViewList ? (
            <EventListView eventList={tracked} navigate={navigate} track />
         ) : (
            <EventGridView eventList={tracked} navigate={navigate} track />
         )}
      </View>
   );
};

export default Track;
