import axios from "axios";

export const GET_ALL_REGISTER = "GET_ALL_REGISTER";
export const GET_TYPE_REGISTER = "GET_TYPE_REGISTER";
export const GET_TEN_REGISTERS = "GET_TEN_REGISTERS";
export const GET_TYPES = "GET_TYPES";
export const DELETE_REGISTER = "DELETE_REGISTER";

export function getTypes(){
    return async dispatch => {
        const res = await axios.get(
            `http://localhost:3001/types`
        );
        const v = res.data;
        dispatch({ type: GET_TYPES, payload: v });
    };
}

export function getTenregister() {
    return async dispatch => {
        const res = await axios.get(
            `http://localhost:3001/register`
        );
        const V = res.data;
        dispatch({ type: GET_TEN_REGISTERS, payload: V });
    };
}


export function getAllregister(label) {
    if(label=="" || !label){
        return async dispatch => {
            const res = await axios.get(
                `http://localhost:3001/allregister`
                );
                const V = res.data;
                dispatch({ type: GET_ALL_REGISTER, payload: V });
            };
            
        }else{
        
        return async (dispatch)=> {
            const res = await axios.get("http://localhost:3001/allregister?type=" + label)
            const V = res.data;        
            dispatch({type: GET_ALL_REGISTER, payload:V});
            
            
        };
    }
}

export function deleteRegister(id) {
    return async dispatch => {
        const res = await axios.delete(
            `http://localhost:3001/deleteregister/${id}`
        );
        const V = res.data;
        dispatch({ type: DELETE_REGISTER, payload: V });
       
    };
}