//REACT
import React from "react";
import { useEffect } from "react";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

//ACTIONS
import {
    getTenregister,

} from "../../actions/index";

//COMPONENT
import Card from "../card/card"

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
                            <div > 
                                <Card
                                concept={p.concept}
                                date={p.date}
                                type={p.type.name}
                                amount={p.amount}
                                />
                            </div>
                        );
                    })
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        
    )
}