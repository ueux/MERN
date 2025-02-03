import { Link, Outlet, useNavigate } from "react-router-dom"
function Nav(){

    //programatic navigation
    // let nav=useNavigate();
    // setTimeout(()=>{
    //     nav("/")
    // },3000)


    return(
        <>
        <div className="bg-orange-400 flex flex-col items-center flex-wrap ">
        <h1 className="text-3xl p-4 md:text-5xl w-[600px]">Raste Ka Maal Saste me</h1>
        <nav className="bg-red-300 mb-10 flex w-[100vw] gap-x-48 justify-between">
          <Link to={"/profile"}><h1 className="ml-10">logo</h1></Link>
          
          <div className="flex gap-4 mr-4">
            <Link to={"/"}><p>Home</p></Link>
            <Link to={"/form"}><p>Login</p></Link>
            <Link to={"/about"}><p>About Us</p></Link>
            
          </div>
        </nav>
        <Outlet/>
        </div>
        </>
    )
}

export default Nav