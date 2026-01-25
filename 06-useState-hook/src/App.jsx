import React, { useState , useEffect } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  
  function increment() {
    setCount(prev => prev + 1);
  }
  
  function decrement(){
    setCount(prev => prev - 1);
  }

  const increase3 = () => {
    // setCount(count + 3); // incorrect way
    setCount(prev => prev + 3); // correct way

    // or if you want to do batch updates always use prev state not just state variable like below
    // setCount(prev => prev + 1);
    // setCount(prev => prev + 1);
    // setCount(prev => prev + 1);
  }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     increment();
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className='app'>
      <div className='count'>{count}</div>
      <div>
        <button onClick={increment} className='btn'>increase</button>
        <button onClick={decrement} className='btn'>decrease</button>
        <button onClick={increase3} className='btn'>increase by 3</button>
      </div>
    </div>
  )

  // changing state object example
  // const [person, setPerson] = useState({ name: 'John', age: 30 });

  // const changeDetails = () => {
  //   setPerson(prev =>({...prev,name: 'Doe', age: 31}));
  // }
}

export default App
