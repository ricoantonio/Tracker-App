import React, {useContext} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Stores} from '../Store';

const EventGridView = (props) => {
   const {state, dispatch, actions} = useContext(Stores);

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
            style={{marginBottom: 220}}
            renderItem={({item, index}) => {
               if (item.empty === true) {
                  return <View style={[styles.item, styles.itemInvisible]} />;
               }
               return (
                  <View
                     style={{flex: 1}}
                     onTouchEnd={() =>
                        navigate('Detail', {
                           item,
                        })
                     }>
                     <View style={[styles.item, styles.itemShadow]}>
                        <View style={{height: '80%', width: '100%'}}>
                           <Image
                              style={{
                                 resizeMode: 'cover',
                                 height: '100%',
                                 width: '100%',
                                 borderTopLeftRadius: 20,
                                 borderTopRightRadius: 20,
                              }}
                              source={item.thumbnail}
                           />
                        </View>
                        <View>
                           <Text>{item.event}</Text>
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
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
   item: {
      alignItems: 'center',
      // justifyContent: 'center',
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
});

export default EventGridView;
