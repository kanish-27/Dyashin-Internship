import React from 'react'

function Usecounter() {
 const Usecounter = () => {
        const [count,setCount] = useState(initialValue);
        const increment = () => {
            setCount(count + incrementValue);
        };
        const decrement = () => {
            setCount(count - dcerementValue);
        };
        const reset = () => {
            setCount(initialValue);
        };
        return {count,increment,decrement,reset};

    }
}

export default Usecounter