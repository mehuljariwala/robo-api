import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../actions/actionTypes";

const intialState = {
  isPending: false,
  robots: [],
  error: null
};

export const requestRobots = (state = intialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        robots: action.payload
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload
      });
    default:
      return state;
  }
};
