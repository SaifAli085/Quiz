import  { useEffect, useState } from 'react'

export const Timer = ({setTimeOut, questionNumber}) => {
    const [timer, setTimer] = useState(30)
    useEffect(()=>{
        if(timer === -1) return setTimeOut(true)
        const interval = setInterval(() => {
            setTimer((prev)=> prev - 1)
        }, 1000);
        return ()=> clearInterval(interval)

    },[setTimeOut, timer])

    useEffect(()=>{
        setTimer(30)
    },[questionNumber])
  return timer;
}
