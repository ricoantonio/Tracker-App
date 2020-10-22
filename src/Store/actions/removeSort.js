export default (dispatch) => ({
   removeSort: (item) => {
      dispatch({type: 'REMOVE_SORT', payload: item});
   },
});
