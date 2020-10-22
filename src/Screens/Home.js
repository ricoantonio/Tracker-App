import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import EventGridView from '../Components/EventGridView';
import EventListView from '../Components/EventListView';

const Home = ({navigation: {navigate}}) => {
   const {state, dispatch, actions} = useContext(Stores);
   const user = state.userReducer.user;
   const eventViewList = state.eventViewReducer.eventViewList;
   const eventList = state.events;
   return (
      <View>
         <Text>home</Text>
         <Text>Hi! {user}</Text>
         <Button
            onPress={() => dispatch({type: 'CHANGE_USER'})}
            title={'change user'}
         />
         <Button
            onPress={() => dispatch({type: 'TOGGLE_VIEW'})}
            title={'change view'}
         />
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
