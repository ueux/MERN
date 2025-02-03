import Counter from "./counter";
function Product({ tittle, price, description, thumbnail }) {
  //destructuring
  // console.log(props)
  return (
    <>
      <div className="singleProduct bg-green-200 rounded-3xl w-[300px] ">
        <div className="flex justify-center">
          <img src={thumbnail} alt="" className="w-[100px] object-cover m-3" />
        </div>
        <div>{tittle}</div>
        <div>$ {price}</div>
        <div>Description-{description}</div>
        <Counter />
      </div>
    </>
  );
}

export default Product;
