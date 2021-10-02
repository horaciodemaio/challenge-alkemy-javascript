import axios from "axios";

export const GET_ALL_REGISTER = "GET_ALL_REGISTER";
export const GET_TYPE_REGISTER = "GET_TYPE_REGISTER";
export const GET_TEN_REGISTERS = "GET_TEN_REGISTERS";

export function getTenregister() {
    return async dispatch => {
        const res = await axios.get(
            `http://localhost:3001/register`
        );
        const V = res.data;
        dispatch({ type: GET_TEN_REGISTERS, payload: V });
    };
}

export function getRegisterType(name){
    return async (dispatch)=> {
        const res = await axios.get("http://localhost:3001/allregister?type=" + name)
        const V = res.data;        
        dispatch({type: "GET_TYPE_REGISTER", payload:V});
        
    };
}

export function getAllregister() {
    return async dispatch => {
        const res = await axios.get(
            `http://localhost:3001/allregister`
        );
        const V = res.data;
        dispatch({ type: GET_ALL_REGISTER, payload: V });
    };
}