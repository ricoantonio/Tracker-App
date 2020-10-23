import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import EventListView from '../Components/EventListView';
import EventGridView from '../Components/EventGridView';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Track = ({navigation: {navigate}}) => {
   const {state, dispatch, actions} = useContext(Stores);
   const tracked = state.trackReducer.track;
   const sortToggle = state.trackReducer.sortToggle;
   const sort = state.trackReducer.sort;
   const eventViewList = state.eventViewReducer.eventViewList;

   return (
      <View>
         <View style={[styles.container]}>
            <View style={[styles.containerLeft]}>
               <Text style={[styles.sortWarningText]}>
                  {tracked.length !== sort.length && sortToggle
                     ? 'Please complete your order'
                     : null}
               </Text>
            </View>
            <View style={[styles.containerRigth]}>
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
                        containerStyle={[styles.buttonContainerLeft]}
                     />
                     <Button
                        title={'X'}
                        buttonStyle={[styles.buttonCancle]}
                        onPress={() => dispatch({type: 'SORT_TOGGLE'})}
                        containerStyle={[styles.buttonContainer]}
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
                     containerStyle={[styles.buttonContainer]}
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
               <Text style={[styles.noEventText]}>
                  You have not tracked any event
               </Text>
            </View>
         ) : null}
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      marginHorizontal: 10,
      marginVertical: 10,
   },
   containerLeft: {width: '60%'},
   containerRigth: {
      width: '40%',
      alignItems: 'flex-end',
   },
   buttonContainer: {
      paddingRight: 10,
      right: -10,
   },
   buttonContainerLeft: {
      paddingRight: 10,
      right: -20,
   },
   noEventText: {
      fontSize: 20,
      color: 'gray',
      alignSelf: 'center',
   },
   sortWarningText: {fontSize: 18, color: 'red'},
   buttonCancle: {
      height: 50,
      width: 50,
      color: 'white',
      backgroundColor: 'red',
   },
});

export default Track;
