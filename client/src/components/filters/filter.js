//REACT
import React from "react";
import {useState, useEffect } from "react";
import Select from "react-select"

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

//COMPONENTS


//ACTIONS
import {
    getRegisterType,
    getAllregister,
    getTypes
} from "../../actions/index";




export default function Filter() {

    const [inputTypes, setImputTypes] = useState([]);
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const allRegister = useSelector(state => state.allRegister);

    useEffect(() => {
        dispatch(getTypes());
    }, []);

    useEffect(() => {
        let list_types = [];
        types.forEach(type => {
            list_types.push(
                { value: type.id, label: type.name }
            )
        });
        setImputTypes(list_types);
    }, [types]);

    function handleChangeTypes(e){
        if (e) {
            dispatch(getAllregister(e.label));
            
        }else{
            dispatch(getAllregister(""));
        }
    }

    return (

        <div className="container_order_detail">
            <Select
             options={inputTypes}
             onChange={(e)=>{handleChangeTypes(e)}}
             isClearable={true}
            />
        </div>

    )
}