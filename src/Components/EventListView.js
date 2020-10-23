import React, {useContext} from 'react';
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
         style={{marginBottom: 80}}
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
                  <View style={[styles.imgContainer]}>
                     {sortToggle && props.track ? (
                        <>
                           <Image
                              style={[styles.imgFull]}
                              source={item.thumbnail}
                           />
                           <Image
                              style={[styles.imgFull, styles.imgOverlay]}
                              source={item.thumbnail}
                           />
                           {sortTrack.includes(item) ? (
                              <View style={[styles.sortContainer]}>
                                 <View style={[styles.sortIndexContainer]}>
                                    <Text style={[styles.sortIndexStyle]}>
                                       {sortTrack.indexOf(item) + 1}
                                    </Text>
                                 </View>
                              </View>
                           ) : null}
                        </>
                     ) : (
                        <Image
                           style={[styles.imgFull]}
                           source={item.thumbnail}
                        />
                     )}
                  </View>
                  <View style={[styles.textContainer]}>
                     <View style={[styles.textContainerLeft]}>
                        <Text style={{fontSize: 18}}>{item.event}</Text>
                     </View>
                     <View style={[styles.textContainerRight]}>
                        <Text>{item.location}</Text>
                     </View>
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
   imgFull: {
      height: '100%',
      width: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      resizeMode: 'cover',
   },
   imgOverlay: {
      tintColor: 'gray',
      opacity: 0.4,
      position: 'absolute',
   },
   sortIndexContainer: {
      height: 100,
      width: 100,
      backgroundColor: 'white',
      borderRadius: 50,
      alignSelf: 'center',
      justifyContent: 'center',
   },
   sortIndexStyle: {
      position: 'absolute',
      fontSize: 50,
      color: '#2196F3',
      alignSelf: 'center',
   },
   sortContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
   },
   imgContainer: {height: '75%'},
   textContainer: {
      height: '25%',
      alignItems: 'center',
      marginHorizontal: 20,
      flexDirection: 'row',
   },
   textContainerLeft: {
      width: '70%',
   },
   textContainerRight: {width: '30%', alignItems: 'flex-end'},
});

export default EventGridView;
