/*-------------------------controlled-------------------------*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  // const[email,setEmail]=useState('')
  // const[pass,setPass]=useState('')
  const [data, setData] = useState({ email: "", pass: "" });
  let nav=useNavigate();
  let defaultData={
    email:"abcd@gmail.com",
    passward:12345
  }
  function formSubmit(e) {
    e.preventDefault();
    // {email,pass}
    console.log(data);
    let {email,pass}=data;
    if(email==defaultData.email && pass==defaultData.passward)
    {
      setTimeout(()=>{
        nav("/")
      },1000)
      
    }
    else{
      alert("Wrong Cridentials")
    }
  }
  function handleForm(e) {
    const { name,value}=e.target
    setData((prevData) => ({ ...prevData , [name]:value })); //key should be in []
  }
  // function handleEmail(e){
  //     // setEmail(e.target.value)
  //     setData((prevData)=>({...prevData,email:e.target.value}))   //spread operator destructures the data and email over-writes the email value
  //     console.log(data)
  // }
  // function handlePassward(e){
  //     // setPass(e.target.value)
  //     console.log(data)
  //     setData((prevData)=>({...prevData,pass:e.target.value}))
  //     console.log(data)
  // }
  return (
    <>
      <form>
        <input
        name="email"       //for handleForm
          className="mb-4 p-2 rounded-xl"
          type="text"
          placeholder="email"
          onChange={handleForm}
          value={data.email}
        />
        <br />
        <input
        name="pass"
          className="mb-4 p-2"
          type="passsword"
          placeholder="passsword"
          onChange={handleForm}
          value={data.pass}
        />
        <br />
        <button className="border mb-4" onClick={formSubmit}>
          log in
        </button>
      </form>
    </>
  );
}
export default Form;

// /*-------------------------uncontrolled------------------------*/
// //in form when we only take data but not returning aby data

// import { useRef, useState } from "react";

// function Form() {
//   let emailRef = useRef();                   //no re-rendering in useRef()
//   console.log(emailRef)
//   const [pass, setPass] = useState("");
//   function formSubmit(e) {
//     e.preventDefault();
//     emailRef.current.style.backgroundColor = "red"; //gives us the controle over DOM
//     console.log({ email: emailRef.current, pass });
//   }

//   function handlePassward(e) {
//     setPass(e.target.value);
//   }
//   return (
//     <>
//       <form>
//         <input
//           className="mb-4 p-2 rounded-xl"
//           type="text"
//           placeholder="email"
//           ref={emailRef}
//         />
//         <br />
//         <input
//           className="mb-4 p-2"
//           type="passsword"
//           placeholder="passsword"
//           onChange={handlePassward}
//         />
//         <br />
//         <button className="border mb-4" onClick={formSubmit}>
//           log in
//         </button>
//       </form>
//     </>
//   );
// }
// export default Form;
