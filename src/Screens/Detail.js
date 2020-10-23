import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Stores} from '../Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detail = ({navigation: {navigate}, route}) => {
   const {state, dispatch, actions} = useContext(Stores);
   const item = route.params.item;
   const tracked = state.trackReducer.track;

   return (
      <View>
         <View style={{height: '60%', width: '100%'}}>
            <Image
               source={item.thumbnail}
               style={{
                  height: '100%',
                  width: '100%',
               }}
            />
         </View>
         <View
            style={{
               alignContent: 'center',
               alignItems: 'center',
               height: '40%',
               top: 20,
            }}>
            <Text style={{fontSize: 20}}>Event: {item.event}</Text>
            <Text style={{fontSize: 20}}>Location: {item.location}</Text>
            <Text style={{fontSize: 20}}>Entry Type: {item.type}</Text>
         </View>
         <View
            style={{
               position: 'absolute',
               bottom: 20,
               alignSelf: 'center',
               right: 20,
               borderRadius: 50,
            }}>
            {JSON.stringify(tracked).includes(item.event) ? (
               <TouchableOpacity onPress={() => actions.removeTrack(item)}>
                  <Text
                     style={[
                        {
                           fontSize: 20,
                           height: 50,
                           width: 120,
                           borderRadius: 50,
                           textAlign: 'center',
                           textAlignVertical: 'center',
                           color: 'white',
                           backgroundColor: 'red',
                        },
                     ]}>
                     Remove
                  </Text>
               </TouchableOpacity>
            ) : (
               <TouchableOpacity onPress={() => actions.addTrack(item)}>
                  <Text
                     style={[
                        {
                           fontSize: 20,
                           height: 50,
                           width: 120,
                           borderRadius: 50,
                           textAlign: 'center',
                           textAlignVertical: 'center',
                           color: 'white',
                           backgroundColor: '#2196F3',
                        },
                     ]}>
                     Track
                  </Text>
               </TouchableOpacity>
            )}
         </View>
      </View>
   );
};

export default Detail;
