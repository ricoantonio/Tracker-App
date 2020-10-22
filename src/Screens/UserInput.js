import React, {useState, useContext} from 'react';
import {
   View,
   Text,
   Button,
   TextInput,
   StyleSheet,
   Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Stores} from '../Store';

const UserInput = ({navigation: {navigate}}) => {
   const {state, dispatch, actions} = useContext(Stores);
   const [nameInput, setNameInput] = useState('');
   return (
      <View
         style={{
            height: '100%',
            justifyContent: 'center',
         }}>
         <View style={{bottom: 100}}>
            <Text
               style={{
                  fontSize: 35,
                  fontWeight: '100',
                  color: 'gray',
                  textAlign: 'center',
               }}>
               TrakerApp
            </Text>
         </View>
         <TextInput
            onChangeText={(x) => setNameInput(x)}
            style={[styles.textInput, styles.itemShadow]}
            placeholder={'Username'}
         />
         <TouchableOpacity
            style={{
               height: 80,
               justifyContent: 'center',
               alignItems: 'center',
            }}
            activeOpacity={0.7}
            onPress={() => actions.newUser(nameInput)}>
            <Text
               style={[
                  {
                     fontSize: 20,
                     height: 50,
                     width: 100,
                     borderRadius: 50,
                     textAlign: 'center',
                     textAlignVertical: 'center',
                     color: '#2196F3',
                     backgroundColor: 'white',
                     marginLeft: 5,
                  },
                  styles.itemShadow,
               ]}>
               Next
            </Text>
         </TouchableOpacity>
         {/* <Button onPress={() => actions.newUser(nameInput)} title={'Next'} /> */}
      </View>
   );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
   textInput: {
      height: 50,
      borderRadius: 25,
      marginHorizontal: 50,
      backgroundColor: '#fff',
      textAlign: 'center',
      fontSize: 18,
   },
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

export default UserInput;
