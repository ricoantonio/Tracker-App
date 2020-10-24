import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Stores} from '../Store';
import Button from '../Components/Button';

const Detail = ({route}) => {
   const {state, actions} = useContext(Stores);
   const item = route.params.item;
   const tracked = state.trackReducer.track;

   return (
      <View>
         <View style={styles.imgContainer}>
            <Image source={item.thumbnail} style={styles.imgStyle} />
         </View>
         <View style={styles.detailContainer}>
            <Text style={styles.textSize}>Event: {item.event}</Text>
            <Text style={styles.textSize}>Location: {item.location}</Text>
            <Text style={styles.textSize}>Entry Type: {item.type}</Text>
         </View>
         <View style={styles.buttonContainer}>
            {JSON.stringify(tracked).includes(item.event) ? (
               <Button
                  buttonStyle={styles.buttonRemove}
                  title={'Remove'}
                  onPress={() => actions.removeTrack(item)}
               />
            ) : (
               <Button
                  buttonStyle={styles.buttonTrack}
                  title={'Track'}
                  onPress={() => actions.addTrack(item)}
               />
            )}
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   imgContainer: {height: '60%', width: '100%'},
   imgStyle: {height: '100%', width: '100%'},
   textSize: {fontSize: 20},
   detailContainer: {
      alignContent: 'center',
      alignItems: 'center',
      height: '40%',
      top: 20,
   },
   buttonContainer: {
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
      right: 20,
      borderRadius: 50,
   },
   buttonRemove: {
      color: 'white',
      backgroundColor: 'red',
      width: 120,
   },
   buttonTrack: {
      color: 'white',
      backgroundColor: '#2196F3',
      width: 120,
   },
});

export default Detail;
