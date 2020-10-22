import React, {useState, useContext, useEffect, useRef} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import EventListView from '../Components/EventListView';
import EventGridView from '../Components/EventGridView';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
         <View
            style={{
               flexDirection: 'row',
               alignItems: 'center',
               height: 50,
               marginHorizontal: 10,
               marginVertical: 10,
            }}>
            <View style={{width: '50%'}}>
               <Text>
                  {tracked.length !== sort.length && sortToggle
                     ? 'Please complete your order'
                     : null}
               </Text>
            </View>
            <View
               style={{
                  width: '50%',
                  alignItems: 'flex-end',
               }}>
               {sortToggle ? (
                  <TouchableOpacity
                     onPress={
                        tracked.length === sort.length
                           ? () => dispatch({type: 'SORT_TRACK'})
                           : null
                     }>
                     <Text
                        style={[
                           {
                              fontSize: 20,
                              borderWidth: 1,
                              height: 50,
                              width: 100,
                              borderRadius: 50,
                              textAlign: 'center',
                              textAlignVertical: 'center',
                           },
                           tracked.length === sort.length
                              ? {color: 'black', borderColor: 'black'}
                              : {color: 'gray', borderColor: 'gray'},
                        ]}>
                        Done
                     </Text>
                  </TouchableOpacity>
               ) : (
                  <TouchableOpacity
                     onPress={
                        tracked.length < 2
                           ? null
                           : () => dispatch({type: 'SORT_TOGGLE'})
                     }>
                     <Text
                        style={[
                           {
                              fontSize: 20,
                              borderWidth: 1,
                              height: 50,
                              width: 100,
                              borderRadius: 50,
                              textAlign: 'center',
                              textAlignVertical: 'center',
                           },
                           tracked.length < 2
                              ? {color: 'gray', borderColor: 'gray'}
                              : {color: 'black', borderColor: 'black'},
                        ]}>
                        Sort
                     </Text>
                  </TouchableOpacity>
               )}
            </View>
         </View>
         {eventViewList ? (
            <EventListView eventList={tracked} navigate={navigate} track />
         ) : (
            <EventGridView eventList={tracked} navigate={navigate} track />
         )}
      </View>
   );
};

export default Track;
