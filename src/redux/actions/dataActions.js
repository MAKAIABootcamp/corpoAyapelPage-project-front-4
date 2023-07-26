import client from "../../sanity/client";
import { dataTypes } from "../types/dataTypes";
import { setLoadingStatusFalse } from "./actions";


export const actionGetDataAsync = (typeOfData, fields) => {
    return async (dispatch) => {
        const queryFields = fields.join(", ");
        const query = `*[_type == "${typeOfData}"] { ${queryFields} }`;
        client
            .fetch(query)
            .then((data) => {
                dispatch(actionGetDataSync(data, typeOfData));
                dispatch(setLoadingStatusFalse());
            })
            .catch(console.error);
    };
};

const actionGetDataSync = (data, typeOfData) => {
    return {
        type: dataTypes.GET_DATA,
        payload: {
            data,
            typeOfData,
            
        },
    };
};
