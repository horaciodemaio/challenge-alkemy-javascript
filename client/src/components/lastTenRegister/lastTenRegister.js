//REACT
import React from "react";
import { useEffect } from "react";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

//ACTIONS
import {
    getTenregister,

} from "../../actions/index";

//CSS
import "./lastTenRegister.css"

export default function LastTenRegister() {

    const dispatch = useDispatch();
    const tenRegisters = useSelector(state => state.tenRegisters);


    useEffect(() => {
        dispatch(getTenregister());
    }, []);
    console.log(tenRegisters);
    return (
        
            <div className="container_order_detail">
                <h1>Last ten operations loaded</h1>
              <div className="header_titles">
                <p>concept</p>
                <p>date</p>
                <p>type</p>
                <p>amount</p>
              </div>
                {tenRegisters ? (
                    tenRegisters.map((p) => {
                        return (
                            <div className="line_register">       
                                <p className="p2">{p.concept}</p>
                                <p className="p2">{p.date}</p>
                                <p className="p2">{p.type.name}</p>
                                <p className="p2">${p.amount}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        
    )
}