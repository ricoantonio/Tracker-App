import React, {useState, useContext} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Stores} from '../Store';

const EventGridView = (props) => {
   const {state, dispatch, actions} = useContext(Stores);

   const sortTrack = state.trackReducer.sort;
   const sortToggle = state.trackReducer.sortToggle;

   const eventList = props.eventList;
   const navigate = props.navigate;

   return (
      <FlatList
         data={eventList}
         showsHorizontalScrollIndicator={false}
         keyExtractor={(item, index) => {
            return index.toString();
         }}
         style={{marginBottom: 110}}
         renderItem={({item, index}) => {
            if (item.empty === true) {
               return <View style={[styles.item, styles.itemInvisible]} />;
            }
            return (
               <View
                  onTouchEnd={
                     sortToggle && props.track
                        ? sortTrack.includes(item)
                           ? () => actions.removeSort(item)
                           : () => actions.addSort(item)
                        : () =>
                             navigate('Detail', {
                                item,
                             })
                  }
                  style={[styles.item, styles.itemShadow]}>
                  <View style={{height: '75%'}}>
                     {sortToggle && props.track ? (
                        <>
                           <Image
                              style={[
                                 {
                                    resizeMode: 'cover',
                                    height: '100%',
                                    width: '100%',
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                 },
                              ]}
                              source={item.thumbnail}
                           />
                           <Image
                              style={[
                                 {
                                    resizeMode: 'cover',
                                    height: '100%',
                                    width: '100%',
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    tintColor: 'gray',
                                    opacity: 0.4,
                                    position: 'absolute',
                                 },
                              ]}
                              source={item.thumbnail}
                           />
                           {sortTrack.includes(item) ? (
                              <View
                                 style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                 }}>
                                 <View
                                    style={{
                                       height: 100,
                                       width: 100,
                                       backgroundColor: 'gray',
                                       borderRadius: 50,
                                       alignSelf: 'center',
                                       justifyContent: 'center',
                                    }}>
                                    <Text
                                       style={{
                                          position: 'absolute',
                                          fontSize: 50,
                                          color: 'white',
                                          alignSelf: 'center',
                                       }}>
                                       {sortTrack.indexOf(item) + 1}
                                    </Text>
                                 </View>
                              </View>
                           ) : null}
                        </>
                     ) : (
                        <Image
                           style={[
                              {
                                 resizeMode: 'cover',
                                 height: '100%',
                                 width: '100%',
                                 borderTopLeftRadius: 20,
                                 borderTopRightRadius: 20,
                              },
                           ]}
                           source={item.thumbnail}
                        />
                     )}
                  </View>
                  <View>
                     <Text>{item.event}</Text>
                  </View>
                  <View>
                     <Text>{item.location}</Text>
                  </View>
               </View>
            );
         }}
      />
   );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
   item: {
      height: windowHeight / 4,
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal: 10,
      borderRadius: 20,
   },
   itemShadow: {
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 4,
   },
   itemInvisible: {
      backgroundColor: 'transparent',
   },
});

export default EventGridView;