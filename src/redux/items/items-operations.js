import * as api from "shared/api/itemsApi";
import actions from "./items-actions";
// import { fetchItemsLoading, fetchItemsSuccess, fetchItemsError } from "./items-actions";

//Створюємо операцію
export const fetchItems = () => {
 const func = async (dispatch) => {
    try{
        dispatch(actions.fetchItemsLoading());
        const data = await api.getItemsApi();
        // if ( data.status !== 200){ throw new Error (`${data.status} | ${data.statusText}`)};
        dispatch(actions.fetchItemsSuccess(data));
    }catch(error){
        dispatch(actions.fetchItemsError(error.message));
    }
 };
 return func;
};

export const addItem = (item) => {
const func = async (dispatch) => {
    try{
        dispatch(actions.addItemsLoading());
        const result = await api.addItemApi(item);
        // if ( data.status !== 200){ throw new Error (`${data.status} | ${data.statusText}`)};
        dispatch(actions.addItemsSuccess(result));
    }catch(error){
        dispatch(actions.addItemsError(error.message));
    }
};
return func;
};

export const removeItem = (id) => {
const func = async (dispatch) => {
    try{
        dispatch(actions.removeItemsLoading());
        await api.removeItemApi(id);
        dispatch(actions.removeItemsSuccess(id));
    }catch(error){
        dispatch(actions.removeItemsError(error.message));
    }
};
return func;
}