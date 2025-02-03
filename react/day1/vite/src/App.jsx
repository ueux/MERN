// import React from "react";

import {
  Route,
  BrowserRouter,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home";
import Form from "./components/form";
import Nav from "./components/navbar";
/*----------default export ------------*/

// let data = [
//   {
//     key: 1,
//     tittle: "Nike Shoes",
//     price: 420,
//   },
//   {
//     key: 2,
//     tittle: "adidas Shoes",
//     price: "820",
//   },
//   {
//     key: 3,
//     tittle: "gold Shoes",
//     price: "920",
//   },
//   {
//     key: 4,
//     tittle: "puma Shoes",
//     price: "1020",
//   },
// ];

function App({data}) {
  // console.log(props)
  // console.log(data)

  //router - 2nd method
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <h1>About Us</h1>,
        },
        {
          path: "/form",
          element: <Form />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />

    // <Routes>
    //   <Route path="/" element={<Nav/>}>
    //   <Route path="/" element={<Home data={data}/>}/>
    //   <Route path="/form" element={<Form/>}/>
    //   <Route path="*" element={<h1>Page Not Found</h1>}/>
    //   </Route>
    //   <Route path="/about" element={<h1>About Us</h1>}/>

    // </Routes>
  );
}

// console.log(App)
// let ele=App()
// console.log(ele)

export default App;

/* ------named export-------*/

// export function App() {
//   return (
//     <>
//       <div>hello</div>
//     </>
//   );
// }
