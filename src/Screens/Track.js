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
                     <TouchableOpacity
                        style={{
                           height: 70,
                           justifyContent: 'center',
                           paddingRight: 10,

                           right: -20,
                        }}
                        activeOpacity={0.7}
                        onPress={
                           tracked.length === sort.length
                              ? () => dispatch({type: 'SORT_TRACK'})
                              : null
                        }>
                        <Text
                           style={[
                              {
                                 fontSize: 20,
                                 height: 50,
                                 width: 100,
                                 borderRadius: 50,
                                 textAlign: 'center',
                                 textAlignVertical: 'center',
                                 backgroundColor: 'white',
                                 marginLeft: 5,
                              },
                              styles.itemShadow,
                              tracked.length === sort.length
                                 ? {color: '#2196F3', borderColor: 'black'}
                                 : {color: 'gray', borderColor: 'gray'},
                           ]}>
                           Done
                        </Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        style={{
                           height: 70,
                           justifyContent: 'center',
                           paddingRight: 10,
                           right: -10,
                        }}
                        onPress={() => dispatch({type: 'SORT_TOGGLE'})}>
                        <Text
                           style={[
                              {
                                 fontSize: 20,
                                 height: 50,
                                 width: 50,
                                 borderRadius: 50,
                                 textAlign: 'center',
                                 textAlignVertical: 'center',
                                 color: 'white',
                                 backgroundColor: 'red',
                                 marginLeft: 5,
                              },
                           ]}>
                           X
                        </Text>
                     </TouchableOpacity>
                  </View>
               ) : (
                  <TouchableOpacity
                     style={{
                        height: 70,
                        justifyContent: 'center',
                        paddingRight: 10,
                        right: -10,
                     }}
                     activeOpacity={0.7}
                     onPress={
                        tracked.length < 2
                           ? null
                           : () => dispatch({type: 'SORT_TOGGLE'})
                     }>
                     <Text
                        style={[
                           {
                              fontSize: 20,
                              height: 50,
                              width: 100,
                              borderRadius: 50,
                              textAlign: 'center',
                              textAlignVertical: 'center',
                              backgroundColor: 'white',
                              marginLeft: 5,
                           },
                           styles.itemShadow,
                           tracked.length < 2
                              ? {color: 'gray'}
                              : {color: '#2196F3'},
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
