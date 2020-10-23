import AsyncStorage from '@react-native-async-storage/async-storage';

export default (dispatch) => ({
   newUser: async (name) => {
      try {
         const oldUser = await AsyncStorage.getItem('username');
         if (oldUser !== name) {
            try {
               await AsyncStorage.setItem('username', name);
               await AsyncStorage.removeItem('track');
               await dispatch({type: 'NEW_USER', payload: name});
            } catch (error) {
               console.log(error);
            }
         }
      } catch (e) {
         console.log(e);
      }
   },
});
