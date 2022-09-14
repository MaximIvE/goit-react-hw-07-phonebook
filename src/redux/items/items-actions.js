import { ADD_ITEM, REMOVE_ITEM} from "./items-types";

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload,
    }
};

export const removeItem = (payload) => {
    return {
        type: REMOVE_ITEM,
        payload,
    }
};