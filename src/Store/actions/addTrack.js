export default (dispatch) => ({
   addTrack: (item) => {
      dispatch({type: 'ADD_TRACK', payload: item});
   },
});
