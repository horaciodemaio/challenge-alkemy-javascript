import {
    GET_ALL_REGISTER,
    GET_TEN_REGISTERS,
    GET_TYPE_REGISTER,

} from "../actions/index"

const initialState = {

    allRegister: [],
    tenRegisters: [],
    typeRegisters: [],

};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_TYPE_REGISTER: {
            return{
                ...state,
                typeRegisters: action.payload
            }
        }

        case GET_TEN_REGISTERS:{
            return{
                ...state,
                tenRegisters: action.payload
            };
        }
        
        case GET_ALL_REGISTER: {
            return {
                ...state,
                allRegister: action.payload
            };
        }

        default: {
            return state;
        }
    }

}

export default rootReducer;