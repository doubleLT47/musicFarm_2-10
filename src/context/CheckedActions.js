export const setVxCheckStart = () => ({
  type: "SET_VX_CHECK_START",
});

export const setVxCheckSuccess = (index) => ({
  type: "SET_VX_CHECK_SUCCESS",
  payload: index,
});

export const setVxCheckFailure = () => ({
  type: "SET_VX_CHECK_FAILURE",
});
