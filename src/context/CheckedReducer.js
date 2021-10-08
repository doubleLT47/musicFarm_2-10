const CheckedReducer = (state, action) => {
  switch (action.type) {
    case "SET_VX_CHECK_START":
      return {
        vxCheck: 0,
        isChecked: true,
        error: false,
      };
    case "SET_VX_CHECK_SUCCESS":
      return {
        vxCheck: action.payload,
        isFetching: false,
        error: false,
      };
    case "SET_VX_CHECK_FAILURE":
      return {
        vxCheck: 0,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default CheckedReducer;
