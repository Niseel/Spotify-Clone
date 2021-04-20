export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  currentTrack: [],
  item: null,
  discover_weekly: null,
  //return null sau khi test code
  token: null,
  //"BQBupy3GWNEqeF4tHSkWYrXIRT2yVl-glGPQ4bfXq4wXU34kgqWoeO8BhEysk8no74JnYVp2AMuEQa-_D8Kbc_eZ2GTVTdKrR4PpdO6tPNj3YLfWvuRWBKXdXDhAI3WuBJKfvBpndGKxBsaqKnjqIN8527ehhY-F1wHN63fhKBA7jDFoCZrYr4maAyYVMvy147uId9-2Vs6YmNjtJd2wrDe1FA",
};

const reducer = (state, action) => {
  console.log("Halo in reducer", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_TRACK":
      return {
        ...state,
        currentTrack: action.currentTrack,
      };
    case "SET_HOME_SET_PLAYLISTS":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
