
import axios from "axios";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { getFootballersData } from "../redux/actions/userAction";



const Userdata = () => {
    const footballersData = useSelector((state) => state?.footballers?.footballersData);
    const dispatch = useDispatch();

    const fetchFootballers = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            dispatch(getFootballersData(res.data))
            console.log(res.data)
        })
    }

    useEffect(() => {
        fetchFootballers()
    },[])

    return (
        <>
            <h1>Footballers:</h1>
            {
                // (!footballersData && footballersData == undefined) ? 
                //     <>
                        
                //     </>
                //     :
                //     footballersData.map((individualPlayerData) => {
                //         return (
                //             <>  
                //                 {/* <h3>Name: {individualPlayerData.name}</h3>
                //                 <h4>Age: {individualPlayerData.age}</h4>
                //                 <h4>Team: {individualPlayerData.team}</h4> */}
                //             </>
                //         )
                //     })  
            }
            
        </>
    )
}

export default Userdata;