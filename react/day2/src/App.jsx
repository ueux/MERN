import React, { memo, useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const hello = useCallback(() => {           //heavy task which is passing in a component
    console.log("hello from function")
  },[])

  // function hello() {
  //   console.log("hello From hello 1")        //on re-render function is re-defined
  // }

  // const calSumEven = useMemo(function () {
  //   console.log("inside function");
  //   let sum = 0;
  //   for (let i = 0; i < 10000000000; i += 2) {
  //     sum += i;
  //   }
  //   return sum;
  // }, []);

  // // function calSumEven() {
  // // console.log("inside function")
  // //   let sum=0
  // // for (let i = 0; i < 10000000000; i+=2) {
  // //    sum+= i;

  // // }
  // //   return sum
  // // }

  // // let totalSum = calSumEven()
  // // console.log(totalSum)
  // console.log(calSumEven);

  return (
    <>
      <h1>hello</h1>
      <p>{count}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>click</button>
      <Child handleClick={hello} /> {/* re-render when the prop is changed*/}
    </>
  );
}

const Child = memo(({handleClick}) => {
  console.log("child");
  return (
    <>
      <button onClick={handleClick}>Click Child button</button>
      <h2>me child hu app ka</h2>
    </>
  );
});

export default App;
