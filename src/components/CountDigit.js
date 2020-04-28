import React from 'react'
import CountUp, {useCountUp} from "react-countup"

function CountDigit() {
    const {countUp, start, pauseResume, reset, update} = useCountUp({
        duration: 5,
        end: 1000,
        startOnMount: false
      });
    
    return (
        <div>
        <h1>Digit Counter</h1>
        <div>
          <h3>{countUp}</h3>
          <button onClick={start}>Start</button>
          <button onClick={pauseResume}>Pause/Resume</button>
          <button onClick={reset}>Reset</button>
          <button onClick={() => update(2000)}>Update to 2000</button>
        </div>
        <h2><CountUp end={100} /></h2> 
        <h2><CountUp end={200} duration={5}/></h2>
        <h2><CountUp start={500} end={1000} duration={5}/></h2>
        <h2><CountUp end={1000} duration={5} prefix = '$' decimals={2}/></h2>
        <h2><CountUp end={1000} duration={5} suffix = 'USD' decimals={2}/></h2>
      </div>
    )
}

export default CountDigit
