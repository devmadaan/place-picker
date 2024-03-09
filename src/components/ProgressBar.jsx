import React, { useEffect, useState } from 'react'

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);
    useEffect(() => {
        const intervalTime = setInterval(() => {
          console.log("Interval Started");
          setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
    
        return ()=>{
          console.log("Interval End");
          clearInterval(intervalTime);
        }
      },[]);
  return (
    <div>
        <progress value={remainingTime} max={timer} />
    </div>
  )
}
