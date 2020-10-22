export default (dispatch) => ({
   newUser: (name) => {
      dispatch({type: 'NEW_USER', payload: name});
   },
});
