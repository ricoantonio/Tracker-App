import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = (props) => {
   return (
      <TouchableOpacity
         style={[styles.container, props.containerStyle]}
         activeOpacity={0.7}
         onPress={props.onPress}>
         <Text
            style={[styles.buttonStyle, styles.itemShadow, props.buttonStyle]}>
            {props.title}
         </Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 10,
      right: -10,
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
   buttonStyle: {
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
});

export default Button;
