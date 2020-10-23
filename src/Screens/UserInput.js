import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Button from '../Components/Button';
import {Stores} from '../Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
         <Button title={'Next'} onPress={() => actions.newUser(nameInput)} />
      </View>
   );
};

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
