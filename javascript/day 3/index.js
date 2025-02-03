// function hello(text,para){
//     console.log("inside hello");
//     // console.log(para);
//     para(text);
// }
// // function cb(){
// //     console.log("inside callback");
// // }
// // hello(cb);
// // hello(function cb(){
// //     console.log("inside callback");
// // });
// hello("hello",function cb(data){
//     console.log("inside callback",data);
// });

// function f1(text){
//     //lexical environment start
//     let a=10;
//     function f2(){
//         console.log(text);
//         console.log(a);
//     }
//     f2();
//     a=100;
//     text='nice'
//     //end
//     return f2;
// }
// let res=f1("from f1"); /*res is a reference to the instance of the function f2 that is created when f1 is run.
// The instance of f2 maintains a reference to its lexical environment, within which the variable a exists. */
// console.log(res);
// res(); //res is accessing text outside its scope

// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }

//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);

//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12

/*-----------------setTimeout and setInterval----------------------*/

//setInterval
// syntax-> setInterval(cb function , delay)
// setInterval(hello,500);
// function hello(){
//     console.log("hello");
// }

// //random color change
// const body=document.querySelector("#body");
// let colorString="0123456789abcdef"
// setInterval(changeColor,200);
// function changeColor(){
//     let color="";
//     for(let i=0;i<6;i++)
//         {
//             color=colorString[Math.floor(Math.random()*colorString.length)]+color;
//         }
//         console.log(color)
//         body.style.backgroundColor=`#${color}`;
// }

// //setTimeout -> ek perticular time ke baad function exicute hoga aur phir khatam
// console.log("step 1");
// setTimeout(()=>{
//     console.log("step 2");
// },0);
// console.log("step 3");
// /* javascript -> single threaded language -> ek ke baad ek (SYNCHRONOUS JS)
// There are sometimes some tasks that take more time to execute due to which remaining code stop exicuting,
// to resolve this problem we use setTimeout (ASYNCHRONOUS JS)
// */

// console.log("hello 1");
// console.log("hello 2");
// // for(let i=0;i<10000000000;i++)
// // {

// // }
// setTimeout(()=>{
//     for(let i=0;i<10000000000;i++)
//         {

//         }
// },1000);
// console.log("hello 3");

// function f1(text){
//     console.log("starting f1");
//     setTimeout(function f2(){   //closure
//         console.log(text);
//     },4000)
//     console.log("endind f1");
//     text="changed";
// }
// f1("hello");

// function f1(){
//     for(let i=0;i<5;i++){        //block scope
//         setTimeout(function f2(){
//             console.log(i);
//         },i*1000);
//     }
// }
// f1();
// function f1(){
//     for(var i=0;i<5;i++){
//         function inner(i){           //function scope
//             setTimeout(function f2(){
//                 console.log(i);
//             },i*1000);
//         }
//         inner(i);
//     }
// }
// f1();
// function f1(){
//     for(var i=0;i<5;i++){
//             let j=i;
//             setTimeout(function f2(){
//                 console.log(j);
//             },j*1000);
//     }
// }
// f1();

/*web api -> waiting area
call back queue ->fifo
event loop -> check if call stack is empty
*/
// console.log("starting");
// setTimeout(function hello(){
//     console.log("setTimeout 1");
// },5000);
// setTimeout(function hello(){
//     console.log("setTimeout 2");
// },3000);
// setTimeout(function hello(){
//     console.log("setTimeout 3");
// },1000);
// console.log("ending");

// function hello(){
//         console.log("starting");
//     setTimeout(function hello(){
//         console.log("setTimeout 1");
//     },5000);
//     setTimeout(function hello(){
//         console.log("setTimeout 2");
//     },3000);
//     setTimeout(function hello(){
//         console.log("setTimeout 3");
//     },1000);
//     for(let i=0;i<10000000000;i++)
//     {

//     }
//     console.log("ending");
// }
// hello();

/*queue ->
1) micro task -> higher Priority (promise, fetch)
2)macro task -> callback queue (setTimeout)
*/

// function searchFood(item,cb1){
//     console.log(`searching for ${item} ...`);
//     setTimeout(function timer1(){
//         let data =`list of ${item}`;
//         cb1(item,data);
//     },4000)
// }
// function orderFoood(item,cb2){
//     console.log(`select ${item}`);
//     setTimeout(function timer2(){
//         let id=Math.floor(Math.random()*999999);
//         cb2(id);
//     },3000)
// }
// function payment(item,id,cb3){
//     console.log(`payment started for ${item} with id :${id}`);
//     setTimeout(function timerr3(){
//         let status =true;
//         cb3(status);
//     },2000)
// }
// //callback hell
// searchFood("burger",function fun1(item,data){
//     console.log(data);
//     orderFoood(item,function fun2(orderid){
//         console.log(`order successfull with id : ${orderid}`);
//         payment(item,orderid,function fun3(response){
//             console.log(`payment successfullwith status : ${response}`);
//         })
//     })
// });

/*-------------------promise----------------*/

// // promise -> (Syntactic sugar) object , redable and manageable , represents the eventual complition or failure of an asynchronous operation
// // state -> pending (initial state) , fulfilled , rejected
// // value/result ->undefined(pending state) , settled (final state)
// const promise1 =new Promise(function f1(resolve,reject){     //creation of promise is a sync operation
//     resolve("promise resolved/fulfilled")
//     // reject("promise rejected");
//     // console.log("hi");   //resolve act as a return but allows us to write after it
// })
// // console.log(promise1) //promise returns a promise object
// //.then(on fullfilment , on rejected)
// promise1.then(function f1(result){
//     console.log(result);
// })

// function isData(item){
//     const promise1=new Promise(function f1(resolve,reject){
//         setTimeout(function timer1(){
//             if(item) resolve("promise resolve");
//             else reject("data is empty");
//         },);
//     })
//     return promise1;    //returns a pending promise initially
// }
// let result =isData("x");
// // console.log(result);
// setTimeout(function hello(){
//     console.log("time out");
// },)
// let x=result.then(function f2(result){    //.then also return a promise
//     console.log(result);
//     return ("then promise");
// })
// console.log(`x : ${x} `,x);
// x.then(function f3(result){    //,then is an async task
//     console.log(result);
// })

// let x2=result.then(function f2(result){    //chaining
//     console.log(result);
//     return ("then promise");
// }).then(function f3(result){
//     console.log(result);
// }).then((e)=>{console.log("e :",e)})

// let p=new Promise((res,rej)=>{
//     res("promise")
// })
// p.then((data)=>{
//     console.log(data);
// })
// function searchFood(item,cb1){
//     console.log(`searching for ${item} ...`);
//      setTimeout(function timer1(){
//          let data =`list of ${item}`;
//          cb1(item,data);
//      },4000)
// }
// searchFood("biryani",function(item,data){
//     console.log(item);
//     console.log(data);
// })

// function searchFood(item){
//     return new Promise(function f1(res,rej){
//         console.log(`searching for ${item} ...`);
//         setTimeout(function timer1(){
//             let data =`list of ${item}`;
//             res([item,data]);      //res and rej can return just one entity
//             res([item,data]);      //once promise is setteled it  can't be resolve again
//                                    //inversion of controled fixed by promises
//         },2000)
//     })
// }
// function orderFoood(item){
//     return new Promise(function f2(res,rej){
//         console.log(`select ${item}`);
//         setTimeout(function timer2(){
//             let id=Math.floor(Math.random()*999999);
//             res({item,id});
//         },2000)
//     })

// }
// function payment(item,id){
//     return new Promise(function f3(res,rej){
//         console.log(`payment started for ${item} with id :${id}`);
//         setTimeout(function timerr3(){
//             let status =true;
//             res(status);
//         },2000)
//     })
// }
// searchFood("biryani")
//     .then(function f1(item){
//         console.log(item[1])
//         return orderFoood(item[0])
//     })
//     .then(function f2(id){
//         console.log(`order successfull with id : ${id.id}`)
//         return payment(id.item,id.id)
//     })
//     .then(function f3(status){
//         console.log(`payment successfull with status : ${status}`)
//     })
// // searchFood("biryani").then(function f2(item){
// //     console.log(item[1])
// //     orderFoood(item[0]).then((id)=>{
// //         console.log(`order successfull with id : ${id.id}`)
// //         payment(id.item,id.id).then((status)=>{
// //             console.log(`payment successfull with status : ${status}`)
// //         })
// //     })
// // })
// // // setTimeout(()=>{
// // //     console.log(result);
// // // },4000)

/* ------------async await----------*/

// async function f1(){
//     return "hello";
// }
// let x=f1();      //returns a promise
// console.log(x);

// //same as async
// function f2(){
//     return Promise.resolve("hello");
//     // return new Promise(function f2(res,rej){
//     //     res("hello");
//     // })
// }
// console.log(f2())

// function pro(){
//     return new Promise (function pro1(res,rej){
//         setTimeout(()=>{
//             res("hello");
//         },1000)
//     })
// }
// async function f1(){
//     console.log("start");
//     let x= await pro();     //await -> age ka program tab tak exicute nhi hoga jab tak promise fulfil nhi hota
//                          //await ->consumes the promise object and finaly returns the resolve data
//     console.log(x);
//     return "data";
// }
// f1().then((data)=>{
//     console.log(` data : ${data}`);
// })

// function pro(){
//     return new Promise (function pro1(res,rej){
//         setTimeout(()=>{
//             res("hello");
//         },3000)
//     })
// }
// async function f1(){
//     console.log("start");
//     let x= await pro();
//     console.log("promise resolved");
//     return x;
// }
// let y=f1();
// console.log("end")
// for(let i=0;i<100000000;i++){
// }
// console.log("end1")

// function pro(){
//     return new Promise (function pro1(res,rej){
//         setTimeout(()=>{
//             res("hello");
//         },1000)
//     })
// }
// async function f1(){
//     console.log("start");
//     let x= await pro();
//     console.log("end");
//     return x;
// }
// f1().then((data)=>{
//     console.log(`data : ${data}`);
// })
// console.log("syncronous code")

// function searchFood(item){
//     return new Promise(function f1(res,rej){
//         console.log(`searching for ${item} ...`);
//         setTimeout(function timer1(){
//             let data =`list of ${item}`;
//             res([item,data]);
//         },2000)
//     })
// }
// function orderFoood(item){
//     return new Promise(function f2(res,rej){
//         console.log(`select ${item}`);
//         setTimeout(function timer2(){
//             let id=Math.floor(Math.random()*999999);
//             res({item,id});
//         },2000)
//     })

// }
// function payment(item,id){
//     return new Promise(function f3(res,rej){
//         console.log(`payment started for ${item} with id :${id}`);
//         setTimeout(function timerr3(){
//             let status =true;
//             res(status);
//         },2000)
//     })
// }
// // searchFood("biryani")
// //     .then(function f1(item){
// //         console.log(item[1])
// //         return orderFoood(item[0])
// //     })
// //     .then(function f2(id){
// //         console.log(`order successfull with id : ${id.id}`)
// //         return payment(id.item,id.id)
// //     })
// //     .then(function f3(status){
// //         console.log(`payment successfull with status : ${status}`)
// //     })
// async function foodOrder(item){
//     let res1=await searchFood(item);
//     console.log(res1[1]);
//     let res2 =await orderFoood(res1[0])
//     console.log(`order successfull with id : ${res2.id}`)
//     let res3= await payment(res2.item,res2.id)
//     console.log(`payment successfull with status : ${res3}`)
// }
// foodOrder("biryani")

/* ----------promise methods----------- */

// function api1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("api1")
//             // rej("api1 rejected")   //jo sabse pehle reject hogi vo he value return ho jaegi
//         },1500)
//     })
// }
// function api2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             // res("api2")
//             rej("api2 rejected")
//         },1000)
//     })
// }
// let api3=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("api3")
//         },2000)
//     })
// // api1().then((data)=>{
// //     console.log(data)
// // })
// // api2().then((data)=>{
// //     console.log(data)
// // })
// // api3().then((data)=>{
// //     console.log(data)
// // })

// let x=Promise.all([api1(),api2(),api3]).then((data)=>{           //returns an array of fulfiled promises and rejected if any one of the promise is rejected
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
// let y=Promise.allSettled([api1(),api2(),api3]).then((data)=>{     //returns an array with status and value
//     console.log(data)
// })
// let z=Promise.race([api1(),api2(),api3]).then((data)=>{      //return first setteled promise
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
// let p=Promise.any([api1(),api2(),api3]).then((data)=>{      //returns first fulfilled promise and ignores rejected promises
//     console.log(data)                                       //if all promises are rejected then it gives an aggregated error with their resons
// }).catch((err)=>{
//     console.log(er.errosr)
// })

/* ------------error handeling--------------*/

// function searchFood(item) {
//   return new Promise(function f1(res, rej) {
//     console.log(`searching for ${item} ...`);
//     setTimeout(function timer1() {
//       let data = undefined; //api call
//       if (data) res([item, data]);
//       else rej(new Error("list is empty"));
//     }, 2000);
//   });
// }
// function orderFoood(item) {
//   return new Promise(function f2(res, rej) {
//     console.log(`select ${item}`);
//     setTimeout(function timer2() {
//       let id = Math.floor(Math.random() * 999999);
//       res({ item, id });
//     }, 2000);
//   });
// }
// function payment(item, id) {
//   return new Promise(function f3(res, rej) {
//     console.log(`payment started for ${item} with id :${id}`);
//     setTimeout(function timerr3() {
//       let status = true;
//       res(status);
//     }, 2000);
//   });
// }
// searchFood("biryani")
//   .then(function f1(item) {
//     console.log(item[1]);
//     return orderFoood(item[0]);
//   })
//   .then(function f2(id) {
//     console.log(`order successfull with id : ${id.id}`);
//     return payment(id.item, id.id);
//   })
//   .then(
//     function f3(status) {
//       console.log(`payment successfull with status : ${status}`);
//     }
//     // function reject(err){
//     //     console.log(err);
//     // }
//   )
//   .catch(function reject(err) {
//     //these functions should be in last
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log("always exicute");
//   });

// function searchFood(item) {
//   return new Promise(function f1(res, rej) {
//     console.log(`searching for ${item} ...`);
//     setTimeout(function timer1() {
//       let data = `list of ${item}`;
//       res([item, data]);
//     }, 2000);
//   });
// }
// function orderFoood(item) {
//   return new Promise(function f2(res, rej) {
//     console.log(`select ${item}`);
//     setTimeout(function timer2() {
//       let id = Math.floor(Math.random() * 999999);
//       res({ item, id });
//     }, 2000);
//   });
// }
// function payment(item, id) {
//   return new Promise(function f3(res, rej) {
//     console.log(`payment started for ${item} with id :${id}`);
//     setTimeout(function timerr3() {
//       let status = false;
//       if (status) res(status);
//       else rej(new Error(`payment unsuccessfull with status : ${status}`));
//     }, 2000);
//   });
// }
// async function foodOrder(item) {
//   //try catch block
//   try {
//     let res1 = await searchFood(item);
//     console.log(res1[1]);
//     let res2 = await orderFoood(res1[0]);
//     console.log(`order successfull with id : ${res2.id}`);
//     let res3 = await payment(res2.item, res2.id);
//     console.log(`payment successfull with status : ${res3}`);
//   } catch (err) {
//     console.log(err);
//     // console.log(err.name);     //type
//     // console.log(err.message);  //message

//   }finally{
//     console.log("always exicuted")
//   }
// }
// foodOrder("biryani");

/*-----------------fetch api------------------*/

// async function api(){
//     let res= fetch("https://apicodethread.cyclic.app")
//     .then((data)=>{
//         return data.json;
//     })
//     .then((data)=>{
//         console.log(data);
//     })
// }
// api();

// async function api() {
//   try {
//     let res = await fetch("https://apicodethread.cyclic.app");
//     let result = await res.json();
//     console.log(result);
//   } catch (err) {
//     console.log("error a gaya");
//   }
// }
// api();
