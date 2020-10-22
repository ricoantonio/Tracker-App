import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import EventGridView from '../Components/EventGridView';
import EventListView from '../Components/EventListView';
import Button from '../Components/Button';

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
               <Button
                  containerStyle={{paddingRight: 10, right: -10}}
                  title={eventViewList ? 'List ' : 'Grid'}
                  onPress={() => dispatch({type: 'TOGGLE_VIEW'})}
               />
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
