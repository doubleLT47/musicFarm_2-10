import CheckedReducer from "./CheckedReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  vxCheck: 0,
  isFetching: false,
  error: false,
};

export const CheckedContext = createContext(INITIAL_STATE);

export const CheckedContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CheckedReducer, INITIAL_STATE);

  return (
    <CheckedContext.Provider
      value={{
        vxCheck: state.vxCheck,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </CheckedContext.Provider>
  );
};
