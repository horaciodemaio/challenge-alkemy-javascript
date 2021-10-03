//REACT
import React from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"
//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

//COMPONENTS
import Card from "../card/card"
import Filter from "../filters/filter"

//ACTIONS
import {
    getAllregister,
    deleteRegister

} from "../../actions/index";


export default function AllRegister() {

    const dispatch = useDispatch();
    const allRegister = useSelector(state => state.allRegister);
    const mensjDelete = useSelector(state => state.mensjDelete);

    useEffect(() => {
        dispatch(getAllregister());
    }, []);

    async function handleSubmit(event, id) {
        event.preventDefault();
        
        dispatch(deleteRegister(id))
        
        alert(mensjDelete.message)
        await dispatch(getAllregister())

    }
    
    return (
        
            <div className="container_order_detail">
                <Link to="/">Home</Link>
                <Filter/>
                <h1>All operations loaded</h1>
              <div className="header_titles">
                <p>concept</p>
                <p>date</p>
                <p>type</p>
                <p>amount</p>
              </div>
                {allRegister ? (
                    allRegister.map((p) => {
                        return (
                            <div > 
                                <button onClick={(event)=>{handleSubmit(event, p.id)}}>delete</button>
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