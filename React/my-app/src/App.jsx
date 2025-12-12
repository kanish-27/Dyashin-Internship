import { useState } from 'react';
import './App.css'
import Parent from './components/Parent';
function App() {
  //let fname="Harry";
  const [fname,setfname]=useState("Harry");
  const [gift,setgift]=useState("Watch");
  const [data,setdata]=useState([]);
  const giftFromChild=(data) => {
    console.log(data);
    setdata(data);
  };
  return (
    <>
    <h1>Welcome to react session</h1>
    {data.map((val,ind)=>{
      return <li>{val}</li>;
    })}
    <h2>Hello,{fname}</h2>
    <button onClick={()=> setfname("John")}>Change Name</button>
    <Parent gift={gift} giftFromChild={giftFromChild}/>
    </>
  )
}

export default App