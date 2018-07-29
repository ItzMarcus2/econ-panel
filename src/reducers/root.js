import { GET_MONTHS } from "../actions/action-types";

const initialState = {
  months: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTHS:
      state = { ...state, months: [action.payload] };
      return state;
    default:
      return state;
  }
};
