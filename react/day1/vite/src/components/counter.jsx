import { useEffect, useState } from "react";

function Counter() {
  let [data , setData] = useState(0); // the inside value can be number , string, objet, array  //hooks and any function using hooks are used inside the main function(component)
//   console.log(useState())    // [initial value ,function]
  function increaseVal() {
    setData((data)=>{
        return data+1
    })
    // setData(data++)
  }
  function decreaseVal() {
    setData((data)=>{
        return data-1
    })
    // setData(data-1)
  }

  useEffect(()=>{
    console.log("updated")
  },[data])

  return (
    <>
      <div className="counter">
        <button onClick={increaseVal}> + </button>
        <h1>{data}</h1>
        <button onClick={decreaseVal}> - </button>
      </div>
    </>
  );
}
export default Counter;


/*
Render phase ->
re-render -> when states->(internal data of a component) and props->(external , parent-> child ) are updated
initial render-> npm run dev

virtual DOM-> light weight representation of actual DOM on initial render

commit phase ->
copy of DOM ->comparision of privious virtual DOM and updated virtual DOM -> if a node is change then that and its childs get re-rendered

*/