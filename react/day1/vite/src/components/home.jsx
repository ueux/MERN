import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { Link, Outlet } from "react-router-dom";
import allCard from "./context";



function Home(){
  let data=useContext(allCard)
  // <allCard.Consumer>
  //   {
  //     (cards)=>{
  //       console.log(cards)
  //     }
  //   }
  // </allCard.Consumer>
    const [val, setVal] = useState("");
    const [filterData, setFilterData] = useState(data);
    const [initialData, setInitialData] = useState("");
  
  async function fetchData(){
    let data=await fetch('https://dummyjson.com/products?limit=0')
    .then((res => res.json()))
    setFilterData(data.products)
    setInitialData(data.products)
  }
  // fetchData()
  
  useEffect(()=>{
    fetchData()
  },[])
  
    function filterHandler() {
      let res=initialData.filter((item)=>item.title.toLowerCase().includes(val.toLowerCase()))
      console.log(res)
      setFilterData(res)
    }
    let h = (                           //allCards
      <div className="mt-3 flex flex-wrap gap-4 justify-center">
        {
          filterData.map((singleData) => {
            return (
              <Product
                key={singleData.id}
                tittle={singleData.title}
                price={singleData.price}
                description={singleData.description}
                thumbnail={singleData.thumbnail}
              />
            );
          })
  
          // data.map((data) => (
          //   <Product tittle={data.tittle} price={data.price} />
          // ))
  
          // data.map((data) => (
          //   <Product key={data.i} tittle={data.tittle} price={data.price} />
          // ))
  
          //error for for loop so we use map
          /* for (let i = 0; i < data.length; i++) {
          <Product tittle={data[0].tittle} price={data[0].price} />
          
         } */
        }
        {/* props are like custom attributes */}
        {/* <Product tittle="adidas Shoes" price="820" />
        <Product tittle="gold Shoes" price="920" />
        <Product tittle="puma Shoes" price="1020" /> */}
      </div>
    );
  
  
    // console.log(h);
    // const h1 =React.createElement('div',{},[<Product/>])
    // console.groupCollapsed(h1)
  
    // let a = "Harsh";
    return (
      <div className="bg-orange-400 text-center">
        {/* <div className="div">hello {a + " Kumar"}</div> */}
        
        <div className="pt-4">
          <input type="text"className="p-2 rounded-xl md:rounded-l-3xl md:rounded  focus:outline-none md:w-[400px] pl-5" onInput={(e) => setVal(e.target.value)} />
          <button className="p-2 bg-zinc-700 px-5 m-3 rounded-xl md:m-0 md:rounded-r-3xl md:px-10 text-center" onClick={filterHandler}>Search</button>
        </div> 
        {filterData.length <= 0? <h1>Item Not Found</h1>: h}
        {/* {h} */}
        {/* <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
      /* jsx -> bable -> React.createElement -> object -> render -> DOM */
    );
}

export default Home;