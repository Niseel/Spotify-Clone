export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //return null sau khi test code
  token: null,
  //"BQA8UTqx4BwI29EJXTJX0WkT3odDsOS3wikall0OY8CZKbgJRxXtFKibdsr0dpuo6Qh2AbmB-b5l4HfFssil4zmOrqhN3q_PUHm457zpRj5wkJcO1C1bRG5mAyAYU11SFsLgVl53CrB28dMFSt32xeZaKdF0gnLXC5vTvnt3ZdDdf30r7Guf",
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
    default:
      return state;
  }
};
export default reducer;
