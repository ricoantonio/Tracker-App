import React, {useState, useContext} from 'react';
import {
   View,
   Text,
   Button,
   TextInput,
   StyleSheet,
   Dimensions,
   Image,
} from 'react-native';
import {Stores} from '../Store';

const Detail = ({navigation: {navigate}, route}) => {
   const {state, dispatch, actions} = useContext(Stores);
   const item = route.params.item;
   const tracked = state.trackReducer.track;

   return (
      <View>
         <View style={{height: windowHeight / 1.8, width: '100%'}}>
            <Image
               source={item.thumbnail}
               style={{
                  height: '100%',
                  width: '100%',
               }}
            />
         </View>
         <Text>{item.event}</Text>
         <Text>{item.location}</Text>
         <Text>{item.type}</Text>
         {tracked.includes(item) ? (
            <Button
               onPress={() => actions.removeTrack(item)}
               title={'remove'}
            />
         ) : (
            <Button onPress={() => actions.addTrack(item)} title={'Track'} />
         )}
      </View>
   );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Detail;
