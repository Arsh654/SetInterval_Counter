import {useEffect} from 'react'

function useDocumentTitle(counter) {
  return useEffect(()=>{
    document.title = `count is ${counter}`
},[counter])
}

export default useDocumentTitle