import React,{useEffect, useState} from 'react'

function Timer() {
    const [count, setCount] = useState(0)
    const[ID, setID] = useState([])
    const[startBtn, setStartBtn] = useState(false);

    const handleEndCounter = ()=>{
        setStartBtn(false);
        clearInterval(ID)
    }

  //   useEffect(()=>{
  //     console.log("Inside useEffect")
  //     let id;
  //     if(startBtn){
  //       console.log("Inside Start Btn")
  //        id = setInterval(() => {
  //         console.log("Inside Set INterval")
  //    setCount(preCount => preCount+1);
  //   }, 1000);
  //   setID(id)
      
  //   // console.log(id)
  //   // setID(id)
  //   setStartBtn(false)
  // }
  //   },[startBtn])

    const handleStartCounter = ()=>{
      var id = setInterval(() => {
        setCount(prev => prev+1)
      }, 1000);

        setStartBtn(true)
        setID(id)
       
    }
    
  return (
    <div style={{height:150,
     width:200, 
     borderRadius:10,
     backgroundColor:"orange",
      margin:10,
      padding:10
      }}>
        <h1 style={{marginleft:10}}>Count is {count}</h1>
        
        <button 
        style={{backgroundColor:"green",
        borderRadius:7,
        height:30,
        width:50,
        padding:6,
        cursor:"pointer",
      marginRight:10}}
      disabled={startBtn}
       onClick={()=>handleStartCounter()}>Start</button>
        
        <button 
        style={{backgroundColor:"red",
        borderRadius:7,
        height:30,
        width:50,
        padding:6,
        cursor:"pointer",
      marginRight:10}}
        onClick={()=>handleEndCounter()}>Stop</button>
    </div>
  )
}

export default Timer