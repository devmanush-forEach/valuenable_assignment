import { actionTypes } from "../actions/policy.actions";
const initialState = { policy: null };

const policyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_POLICY:
      return { ...state, policy: payload };

    default:
      return state;
  }
};

export default policyReducer;
