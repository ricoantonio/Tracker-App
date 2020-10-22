export default (dispatch) => ({
   removeTrack: (item) => {
      dispatch({type: 'REMOVE_TRACK', payload: item});
   },
});
