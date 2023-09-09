import React,{useState} from 'react'

const Counter = () => 
{  
  //hook useState
  const [counter, setCounter] = useState(0);
  const plus=()=>{
    setCounter(counter + 1)
  }

  const subtraction=()=>{
    setCounter(counter - 1);
  }

  return (
    <article data-theme="dark">
        <h2>Counter: {counter}</h2>
        <button onClick={plus}>+</button>
        <button onClick={subtraction}>-</button>
    </article>
  )
}

export default Counter