const defaultTrack = {
   track: [],
   sort: [],
   sortToggle: false,
};

const trackReducer = (state, action) => {
   const track = state.track;
   const sort = state.sort;
   const sortToggle = state.sortToggle;

   switch (action.type) {
      case 'SORT_TOGGLE':
         return {...state, sortToggle: !sortToggle, sort: []};
      case 'SORT_OFF':
         return {...state, sortToggle: false, sort: []};
      case 'ADD_TRACK':
         if (track.includes(action.payload)) {
         } else {
            track.push(action.payload);
         }
         return state;
      case 'REMOVE_TRACK':
         var newTrack = track.filter((a) => {
            return a.event !== action.payload.event;
         });
         return {...state, track: [...newTrack]};
      case 'ADD_SORT':
         if (sort.includes(action.payload)) {
         } else {
            sort.push(action.payload);
         }
         return state;
      case 'REMOVE_SORT':
         var newSort = sort.filter((a) => {
            return a.event !== action.payload.event;
         });
         return {...state, sort: [...newSort]};
      case 'SORT_TRACK':
         return {...state, track: [...sort], sortToggle: false};
      default:
         return state;
   }
};

export {trackReducer, defaultTrack};
