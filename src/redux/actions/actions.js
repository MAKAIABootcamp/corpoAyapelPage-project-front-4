import { loadingTypes } from "../types/loadingTypes"

export const setLoadingStatusFalse = () => {
    return {
        type: loadingTypes.SET_LOADING,
        payload: {
            loading: false,
          },
    }
}
