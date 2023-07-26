import { dataTypes } from "../types/dataTypes";

const initialState = {
  data: [
    {
      donationAmount: null,  
    },
    {
      testimonios: null,
    },
    {
      ImpactIndicator: null,
    },
    {
      proyectos: null,
    },
    {
      socialsMediaUrl: null,
    },
    {
      documentos: null,
    },
    {
      masProyectos: null,
    },
    {
      gestionEconomica: null,
    },
    {
      gestion: null,
    },
    {
      gestionAmbiental: null,
    },
    {
      gestionSocial: null,
    },
    {
      donorsGoals: null,
    },

  ],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypes.GET_DATA:
      const updatedData = state.data.map((item) => {
        if (Object.keys(item)[0] === action.payload.typeOfData) {
          return {
            [action.payload.typeOfData] : action.payload.data
          };
        }
        return item;
      });
    //  console.log("updatedData", updatedData)
      return {
        ...state,
        data: updatedData,
      };
    
    default:
      return state;
  }
};