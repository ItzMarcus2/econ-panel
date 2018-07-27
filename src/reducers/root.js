import { TEST_ACTION } from "../actions/action-types";

const initialState = {
  test: "test"
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, test: action.payload.test };
    default:
      return state;
  }
};
