//REACT
import React from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom"

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

//ACTIONS
import {
    getTenregister,
    getAllregister
} from "../../actions/index";

export default function Home() {

    const dispatch = useDispatch();
    const tenRegisters = useSelector(state => state.tenRegisters);
    const getAllregister = useSelector(state => state.allRegister);

    useEffect(() => {
        dispatch(getTenregister());
    }, []);
    console.log(tenRegisters);
    return (
        <div>
            <div>
                {tenRegisters ? (
                    tenRegisters.map((p) => {
                        return (
                            <div>
                                <li>
                                    concept: {p.concept} amount: {p.amount} date: {p.date} type: {p.type.name}
                                </li>
                                
                            </div>
                        );
                    })
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    )
}