// // Data in a local and session storage is in string

// //this is a synchronous task
// document.getElementById("btn").addEventListener('click',()=>{
//     sessionStorage.setItem("store","Hellow Ji")
// })
// document.getElementById("btn").addEventListener('click',()=>{
//     localStorage.setItem("store","Hellow Ji")
// })
// document.getElementById("btn").addEventListener('click',()=>{
//     let data=localStorage.getItem("store")
//     console.log(data)
// })
// document.getElementById("btn").addEventListener('click',()=>{
//     localStorage.removeItem("store")
// })
// document.getElementById("btn").addEventListener('click',()=>{
//     localStorage.clear();
// })



// document.getElementById("in").addEventListener('input',(e)=>{
//     // console.log(e.target.value)
//     localStorage.setItem('data',e.target.value)
//     document.getElementById("h1").innerText=localStorage.getItem('data')
// })
// document.getElementById("h1").innerText=localStorage.getItem('data')



// //no data on other page on reload because both are different sessions
// document.getElementById("in").addEventListener('input',(e)=>{
//     // console.log(e.target.value)
//     sessionStorage.setItem('data',e.target.value)
//     document.getElementById("h1").innerText=sessionStorage.getItem('data')
// })
// document.getElementById("h1").innerText=sessionStorage.getItem('data')


document.getElementById("btn").addEventListener('click',(e)=>{
    let name=document.getElementById("name").value
    let rollNo=document.getElementById("rollNo").value
    // console.log(e.target.value)
    // localStorage.setItem('data',{'name':'Radhika','roll.no':1905})   //data is stored in form of string
    localStorage.setItem('data',JSON.stringify({name:name,roll_no:rollNo}))//converts array/object -> string
    document.getElementById("h1").innerText=JSON.parse(localStorage.getItem('data')).name
    document.getElementById("h2").innerText=JSON.parse(localStorage.getItem('data')).roll_no
})
document.getElementById("h1").innerText=JSON.parse(localStorage.getItem('data')).name
document.getElementById("h2").innerText=JSON.parse(localStorage.getItem('data')).roll_no
// console.log(String({'name':'Radhika','roll.no':1905}))
//to solve this we have JSON.parse() & JSON.stringify()
//in json keys are always be string  { 'name' : 'harsh'}
console.log(localStorage.getItem('data'))
console.log(JSON.parse(localStorage.getItem('data')))  // converts string -> array/object