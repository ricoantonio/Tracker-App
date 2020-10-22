import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import EventGridView from '../Components/EventGridView';
import EventListView from '../Components/EventListView';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation: {navigate}}) => {
   const {state, dispatch, actions} = useContext(Stores);
   const user = state.userReducer.user;
   const eventViewList = state.eventViewReducer.eventViewList;
   const eventList = state.events;
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
               <Text style={{fontSize: 18}}>Hi! {user}</Text>
            </View>
            <View
               style={{
                  width: '50%',
                  alignItems: 'flex-end',
               }}>
               <TouchableOpacity
                  style={{
                     height: 70,
                     justifyContent: 'center',
                     paddingRight: 10,
                     right: -10,
                  }}
                  activeOpacity={0.7}
                  onPress={() => dispatch({type: 'TOGGLE_VIEW'})}>
                  <Text
                     style={[
                        {
                           fontSize: 20,
                           height: 50,
                           width: 100,
                           borderRadius: 50,
                           textAlign: 'center',
                           textAlignVertical: 'center',
                           color: '#2196F3',
                           backgroundColor: 'white',
                           marginLeft: 5,
                        },
                        styles.itemShadow,
                     ]}>
                     {eventViewList ? 'List ' : 'Grid'}
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
         {eventViewList ? (
            <EventListView eventList={eventList} navigate={navigate} />
         ) : (
            <EventGridView eventList={eventList} navigate={navigate} />
         )}
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
      elevation: 5,
   },
});

export default Home;
