import { useState, useEffect } from "react"


function App() {
  return <div>
    <Counter></Counter>
  </div>
}

function Counter(){

  const [count, setCount] = useState(0);

  //here if we put setInterval here then it will log counter in a crazy way because
  //when the state changes react rerender its component so there is a concept 
  //hooking into the lifecycle events of react (mounting, re-rendering, unmounting)
  //now we want whenever counter component mounts then we want to run the setInterval code
  //for that we use USEEFFECT

  console.log("counter");

  //guard our setInterval from re-renders
  useEffect(function(){
    setInterval( function(){
      setCount(count => count + 1 );
    },1000)
    console.log("mounted");
  },[]);
  
  // function increaseCount(){
  //   setCount( count + 1 );
  // }

  // function decreaseCount(){
  //   setCount( count - 1 );
  // }

  // function resetCount(){
  //   setCount(0);
  // }

  return <div>
    <h1 id="text">{count}</h1>
  </div>
}

export default App
