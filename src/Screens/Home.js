import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import EventGridView from '../Components/EventGridView';
import EventListView from '../Components/EventListView';
import Button from '../Components/Button';

const Home = ({navigation: {navigate}}) => {
   const {state, dispatch} = useContext(Stores);
   const user = state.userReducer.user;
   const eventViewList = state.eventViewReducer.eventViewList;
   const eventList = state.events;
   return (
      <View>
         <View style={[styles.containerStyle]}>
            <View style={[styles.containerLeft]}>
               <Text style={{fontSize: 18}}>Hi! {user}</Text>
            </View>
            <View style={styles.containerRight}>
               <Button
                  containerStyle={[styles.buttonContainerStyle]}
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
   containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      marginHorizontal: 10,
      marginVertical: 10,
   },
   containerLeft: {
      width: '50%',
   },
   containerRight: {
      width: '50%',
      alignItems: 'flex-end',
   },
   buttonContainerStyle: {paddingRight: 10, right: -10},
});

export default Home;
