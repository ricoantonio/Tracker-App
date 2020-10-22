import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import EventListView from '../Components/EventListView';
import EventGridView from '../Components/EventGridView';
import Button from '../Components/Button';

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
            <View style={{width: '60%'}}>
               <Text style={{fontSize: 18, color: 'red'}}>
                  {tracked.length !== sort.length && sortToggle
                     ? 'Please complete your order'
                     : null}
               </Text>
            </View>
            <View
               style={{
                  width: '40%',
                  alignItems: 'flex-end',
               }}>
               {sortToggle ? (
                  <View style={{flexDirection: 'row'}}>
                     <Button
                        title={'Done'}
                        buttonStyle={
                           tracked.length === sort.length
                              ? {color: '#2196F3', borderColor: 'black'}
                              : {color: 'gray', borderColor: 'gray'}
                        }
                        onPress={
                           tracked.length === sort.length
                              ? () => dispatch({type: 'SORT_TRACK'})
                              : null
                        }
                        containerStyle={{
                           paddingRight: 10,
                           right: -20,
                        }}
                     />
                     <Button
                        title={'X'}
                        buttonStyle={{
                           height: 50,
                           width: 50,
                           color: 'white',
                           backgroundColor: 'red',
                        }}
                        onPress={() => dispatch({type: 'SORT_TOGGLE'})}
                        containerStyle={{
                           paddingRight: 10,
                           right: -10,
                        }}
                     />
                  </View>
               ) : (
                  <Button
                     title={'Sort'}
                     buttonStyle={
                        tracked.length < 2
                           ? {color: 'gray'}
                           : {color: '#2196F3'}
                     }
                     onPress={
                        tracked.length < 2
                           ? null
                           : () => dispatch({type: 'SORT_TOGGLE'})
                     }
                     containerStyle={{
                        paddingRight: 10,
                        right: -10,
                     }}
                  />
               )}
            </View>
         </View>
         {eventViewList ? (
            <EventListView eventList={tracked} navigate={navigate} track />
         ) : (
            <EventGridView eventList={tracked} navigate={navigate} track />
         )}
         {tracked.length == 0 ? (
            <View>
               <Text
                  style={{
                     fontSize: 20,
                     color: 'gray',
                     alignSelf: 'center',
                  }}>
                  You have not tracked any event
               </Text>
            </View>
         ) : null}
      </View>
   );
};
const styles = StyleSheet.create({
   itemShadow: {
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 4,
   },
});

export default Track;
