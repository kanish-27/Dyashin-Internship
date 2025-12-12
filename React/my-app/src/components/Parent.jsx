import { useState } from 'react';
import React, { use } from 'react'

function Parent(props) {
    console.log(props.gift);
    const [fruits,setfruits]=useState(["Apple","Banana","Cherry"]);
  return (
    <div>
        <h1>Parent Component</h1>
        <h2>Gift from app: {props.gift}</h2>
        <button onClick={()=>props.giftFromChild(fruits)}>Send gift</button>
    </div>
  )
}

export default Parent