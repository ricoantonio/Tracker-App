export default (dispatch) => ({
   addSort: (item) => {
      dispatch({type: 'ADD_SORT', payload: item});
   },
});
