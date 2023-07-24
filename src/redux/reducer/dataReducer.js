import { dataTypes } from "../types/dataTypes";

const initialState = {
  data: {},
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypes.GET_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    
    default:
      return state;
  }
};