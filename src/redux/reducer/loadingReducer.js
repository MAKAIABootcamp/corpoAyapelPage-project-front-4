import { loadingTypes } from "../types/loadingTypes";

const initialState = {
  loading: true,
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadingTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};
