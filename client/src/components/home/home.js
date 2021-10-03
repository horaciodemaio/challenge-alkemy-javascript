//REACT
import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

//ACTIONS
import {

    getAllregister
} from "../../actions/index";

//COMPONENTS
import LastTenRegister from "../lastTenRegister/lastTenRegister"

//CSS
import "./home.css"

export default function Home() {

    const dispatch = useDispatch();
    const allRegister = useSelector(state => state.allRegister);

    const [state, setState] = useState(0);

    useEffect(() => {
        dispatch(getAllregister());
    }, []);

    useEffect(async () => {
        let state_acount = 0;
        allRegister.forEach(r => {

            if (r.type.name === "ingress") {
                state_acount = state_acount + r.amount;
            } else {
                state_acount = state_acount - r.amount;
            }
        });
        setState(state_acount);
    }, [allRegister]);

    return (
        <div id="home_container">
            <Link to="/allregister">Register</Link>
            <div id="home_account_status_container">
                <h2>Account status:</h2>
                <p> $ {state} </p>
                
            </div>
            

            <LastTenRegister />
            
        </div>
    )
}