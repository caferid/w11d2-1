import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from './Redux/basketSlice'
import { v4 as uuidv4 } from 'uuid';

function Basketim() {
    const [input,setInput]=useState("")
    const bas=useSelector(state=>state.basket.value)
    const dispatch=useDispatch()

    const handleAddBasket=()=>{
        dispatch(addBasket({
            id:uuidv4(),
            name:"",
        }))
    }
    
  return (
    <div>as
        <p>{bas.map((basket)=>(
                <li key={basket.id}>{basket.id}-{basket.text}</li>))}
                </p>
    </div>
  )
}

export default Basketim