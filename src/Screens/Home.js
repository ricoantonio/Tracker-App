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
                  onPress={() => dispatch({type: 'TOGGLE_VIEW'})}>
                  <Text
                     style={{
                        fontSize: 20,
                        // backgroundColor: 'red',
                        borderColor: 'black',
                        borderWidth: 1,
                        height: 50,
                        width: 100,
                        borderRadius: 50,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                     }}>
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

const styles = StyleSheet.create({});

export default Home;
