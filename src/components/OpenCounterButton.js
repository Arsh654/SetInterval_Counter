import React, { useState } from 'react'
import Timer from './Timer';

function OpenCounterButton() {
  //const[isOpen, setIsOpen] = useState(false)
  const[arr,setArr] = useState([])

  //console.log(arr)
  const openCounter = () =>{
    console.log("Inside Add Counter Handler")
    //setIsOpen(true); 
    let flo = Math.floor(Math.random()*6)+1
    setArr([...arr,flo])
  }
  return (
    <>
     <button
      style={{backgroundColor:"yellowgreen",
      position:'fixed',
      padding:10,cursor:"pointer", borderRadius:15}}
       onClick={() => openCounter()}>Add Counter</button>
      

      {arr.map((ar,i) => {
        // console.log(arr.length+"------length")
        // console.log(ar)
      return <div style={{float:"left" ,marginTop:80}} key={i} ><Timer /></div>
      })}
    </>
  )
}

export default OpenCounterButton