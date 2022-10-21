import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../redux/actions/userAction'


const Data = () => {
    const dispatch = useDispatch(); 
    const mystate = useSelector((state)=>state.userReducer)
        
    console.log(mystate)
    useEffect(()=>{
         dispatch(userAction())
    },[dispatch])
  return (
    <div>data</div>
  )
}

export default Data