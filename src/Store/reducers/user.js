const defaultUser = {
   user: '',
};

const userReducer = (state, action) => {
   switch (action.type) {
      case 'NEW_USER':
         return {...state, user: action.payload};
      case 'CHANGE_USER':
         return {user: ''};
      default:
         return state;
   }
};

export {userReducer, defaultUser};
