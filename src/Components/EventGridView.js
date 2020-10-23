import React, {useContext} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Stores} from '../Store';

const EventGridView = (props) => {
   const {state, actions} = useContext(Stores);

   const sortTrack = state.trackReducer.sort;
   const sortToggle = state.trackReducer.sortToggle;

   const eventList = props.eventList;
   const navigate = props.navigate;

   const formatData = (data, numColoumns) => {
      const numberOfFullRows = Math.floor(data.length / numColoumns);
      const newData = [...data];
      let numberOfElementsLastRow =
         newData.length - numberOfFullRows * numColoumns;
      while (
         numberOfElementsLastRow !== numColoumns &&
         numberOfElementsLastRow !== 0
      ) {
         newData.push({
            name: `black-${numberOfElementsLastRow}`,
            empty: true,
         });
         numberOfElementsLastRow = numberOfElementsLastRow + 1;
      }
      return newData;
   };

   return (
      <View style={{marginHorizontal: 5}}>
         <FlatList
            data={formatData(eventList, 2)}
            numColumns={2}
            keyExtractor={(item, index) => {
               return index.toString();
            }}
            style={{marginBottom: 150}}
            renderItem={({item}) => {
               if (item.empty === true) {
                  return <View style={[styles.item, styles.itemInvisible]} />;
               }
               return (
                  <View
                     style={{flex: 1}}
                     onTouchEnd={
                        sortToggle && props.track
                           ? sortTrack.includes(item)
                              ? () => actions.removeSort(item)
                              : () => actions.addSort(item)
                           : () =>
                                navigate('Detail', {
                                   item,
                                })
                     }>
                     <View style={[styles.item, styles.itemShadow]}>
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
                                       <View
                                          style={[styles.sortIndexContainer]}>
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
                           <Text style={{fontSize: 14}}>{item.event}</Text>
                        </View>
                     </View>
                  </View>
               );
            }}
         />
      </View>
   );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   item: {
      alignItems: 'center',
      borderRadius: 0,
      height: windowWidth / 2,
      borderRadius: 20,
      marginBottom: 5,
      marginTop: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flex: 1,
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
   imgContainer: {height: '80%', width: '100%'},
   textContainer: {
      width: '100%',
      height: '20%',
      justifyContent: 'center',
      alignItems: 'center',
   },
});

export default EventGridView;
