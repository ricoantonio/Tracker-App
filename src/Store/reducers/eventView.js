const defaultEventView = {
   eventViewList: true,
};

const eventViewReducer = (state, action) => {
   switch (action.type) {
      case 'TOGGLE_VIEW':
         return {eventViewList: !state.eventViewList};
      case 'CHANGE_USER':
         return {eventViewList: true};
      default:
         return state;
   }
};

export {eventViewReducer, defaultEventView};
