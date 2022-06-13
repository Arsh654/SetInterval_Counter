import React,{useEffect,useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocsUpd() {
    const [counter, setCounter] = useState(0)

   useDocumentTitle(counter)
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>Count is {counter}</button>
    </div>
  )
}

export default DocsUpd