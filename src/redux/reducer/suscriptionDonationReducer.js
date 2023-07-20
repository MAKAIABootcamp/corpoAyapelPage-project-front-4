import { suscriptionDonationTypes } from "../types/suscriptionDonationTypes";


const initialState = {
  suscriptionDonation: {},
};

export const suscriptionDonationReducer = (state = initialState, action) => {
  switch (action.type) {
    case suscriptionDonationTypes.UPDATE_DATA_SUSCRIPTION:
      return {
        ...state,
        suscriptionDonation: {
          ...state.suscriptionDonation,
          ...action.payload.suscriptionDonation,
        },
      };
    default:
      return state;
  }
};
