import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultTrack = {
   track: [],
   sort: [],
   sortToggle: false,
};

const setData = async (x) => {
   try {
      const trackSave = JSON.stringify(x);
      await AsyncStorage.setItem('track', trackSave);
   } catch (e) {
      console.log(e);
   }
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

      case 'SET_TRACK':
         return {...state, track: [...action.payload]};

      case 'ADD_TRACK':
         if (track.includes(action.payload)) {
         } else {
            track.push(action.payload);
            setData(track);
         }
         return state;

      case 'REMOVE_TRACK':
         var newTrack = track.filter((a) => {
            return a.event !== action.payload.event;
         });
         setData(newTrack);
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
         setData(sort);
         return {...state, track: [...sort], sortToggle: false};

      default:
         return state;
   }
};

export {trackReducer, defaultTrack};
