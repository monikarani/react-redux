import * as TYPE from "../../constants/action-types";

/******** Reducers ********/

const initialState = {
  loggedIn: false,
  remember: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.SEARCH:
      return state;
      
    default:
      return state;
  }
}
