export const actionTypes = {
  SET_POLICY: "SET_POLICY",
};

export const set_Policy = (payload) => {
  return {
    type: actionTypes.SET_POLICY,
    payload,
  };
};
