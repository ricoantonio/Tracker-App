export default (dispatch) => ({
   setTrack: (item) => {
      dispatch({type: 'SET_TRACK', payload: item});
   },
});
