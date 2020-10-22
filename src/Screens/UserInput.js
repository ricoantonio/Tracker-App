import React, {useState, useContext} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Stores} from '../Store';

const UserInput = ({navigation: {navigate}}) => {
   const {state, dispatch, actions} = useContext(Stores);
   const [nameInput, setNameInput] = useState('');
   return (
      <View>
         <Text>userinput</Text>
         <TextInput
            onChangeText={(x) => setNameInput(x)}
            style={styles.textInput}
            placeholder={'Username'}
         />
         <Button onPress={() => actions.newUser(nameInput)} title={'Next'} />
      </View>
   );
};

const styles = StyleSheet.create({
   textInput: {
      height: 50,
      borderRadius: 25,
      marginHorizontal: 20,
      paddingLeft: 20,
      marginVertical: 5,
      backgroundColor: '#fff',
   },
});

export default UserInput;
