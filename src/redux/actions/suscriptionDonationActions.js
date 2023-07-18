import { suscriptionDonationTypes } from "../types/suscriptionDonationTypes";

export const updateDataSuscription = (data) => {
  return {
    type: suscriptionDonationTypes.UPDATE_DATA_SUSCRIPTION,
    payload: {
      suscriptionDonation: data,
    },
  };
};
