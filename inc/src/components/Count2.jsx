import React from 'react'
import Usecounter from '../hooks/Usecounter';

function Count2() {
    const [count,increment,decrement,reset] = Usecounter();
    return (
    <div>
        <h1>Counter Two: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Count2