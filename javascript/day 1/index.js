// let a=`29`; //re-declare and update
// console.log(a);

// var a= 10;
// var a=20;
// console.log(a);

// let a=10;
// let a=100; // cannot re-declare variable
// console.log(a);

// const a=10;
// a=100; //cannot update and cannot re-declare with-in scope 
// console.log(a);

// let num =100;
// console.log(typeof(num));
// let str =`harsh`;
// console.log(typeof(str));
// let bol=true;
// console.log(typeof(bol));
// let a=null;
// console.log(typeof(a));
// let b;
// console.log(typeof(b));

// const stdInfo={
//     name :`radhika`,
//     rollNo:143,
// };
// // console.log(typeof(stdInfo));
// console.log(stdInfo);

// let op='+';
// num1=100;
// num2=20;
// switch(op){
//     case '+':console.log(num1+num2);
//     break;
//     case '-': console.log(num1-num2);
//     break;
//     default:console.log ("wronge operation");
// }

// for(let i=100;i>10;i-=10){
//     if(i==50)break;
//     if(i==70)continue;
//     console.log(i);
// }


// let arr=[];
// for(let i=0;i<=10;i++)
// {
//     arr.push(i);
// }
// console.log(arr);
// for(let i=0;i<=10;i++)
//     {
//         arr.pop();
//     }
// console.log(arr);
// console.log(typeof(arr));


// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<10;i++)
// {
//     console.log(`\n`);
//     console.log(arr);
//     let[x,y,z,...rem]=arr;  //destructuring //rest
//     arr.splice(0,1);
//     console.log("x= "+x," first elm = "+arr[0]);
//     x=x+10;
//     console.log(x,arr[0]);
//     console.log(arr);
//     console.log(rem);
// }


// console.log("itema("+(1+1)+") :   $"+((2095+799)/100)); //concatination
// console.log(`items (${1+1}):   $${(2095+799)/100}`)//interpolation
// console.log(`i 143
// radhica`);


// const obj={
//     Name:"harsh",
//     RollNo:124,
//     subjects:["Computer",124,"Science","Maths"],
//     Hostler:true,
// }
// console.log(obj.subjects);
// const { Name, RollNo, ...rem } = obj; //the variable names must match the property names of the object  //destructuring of object
// console.log(Name);
// console.log(rem);

// // array of objects and nested objects
// const stud=[ {
//          Name:"harsh",
//          RollNo:124,
//          subjects:["Computer",124,"Science","Maths"],
//          Hostler:true,
//      },
//      {
//         Name:"radhika",
//         RollNo:143,
//         subjects:["Computer",143,"Science","Maths"],
//         Hostler:true,
//         obj2:{
//             Name:"harsh",
//             RollNo:124,
//             subjects:["Computer",124,"Science","Maths"],
//             Hostler:true,
//         }
//     }
     
    
//     ]
// console.log(typeof(stud[1].obj2.subjects[1]));

// //for in & of
// const obj={
//     Name:"harsh",
//     RollNo:124,
//     subjects:["Computer",124,"Science","Maths"],
//     Hostler:true,
// }
// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let val in obj)
// {
//     console.log(val);
//     console.log(obj[val]); //correct way to access the value of key
// }
// for(let val of arr)
//     {
//         console.log(val);
       
//     }

// for(let val in arr)
//     {
//         console.log(val);
//         console.log(arr[val]);
        
//     }
// for(let val of Object.keys(obj))
//     {
//         console.log(val);
//     }
// for(let val of Object.values(obj))
//     {
//         console.log(val);
//     }


// let str=`hello 
// i am 
// `;
// console.log(`${str}Harsh`);

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let arr1=[4,5,6,7,8,9,10];
// // let newArr=arr.concat(arr1);
// // console.log(newArr);
// // arr.push(arr1);
// // console.log(arr);
// let newArr=[...arr,...arr1];  //spred
// console.log(newArr);


// function sum(a,b,c){
//     let total=a+b+c;
//     console.log(total);
// }
// function sum(a,...num){  //rest operator
//     let total=0;
//     total+=a;
//     for(let i=0;i<num.length;i++){
//         total+=num[i];
//     }
//     console.log(total);
// }
// sum(10,20,30);


// let obj ={
//     title: "day 2",
//     tags : "day2,5-7-24,friday",
//     discription: "Hello Dosto",
// }
// function obj1(...hello){
//     console.log(hello);
//     console.log(hello[0].tags.split(","));
// }
// obj1(obj);


// let arr=[23,4,64,3,232,45];

// function hello(){
// }

// arrow function
// const hello =()=>{

// }

//calback function
// arr.forEach(
//     function (val){
//         console.log(val);
//     }
// )

// function hello(val){
//     console.log(val);
// }
// arr.forEach(hello); //reference

// arr.forEach((val)=>{  //doesn't return
//         console.log(val);
//         console.log(val);
//     }
// )

// const newArr= arr.map((val)=>val*=10)
// console.log(newArr);

// const newArr= arr.filter((val)=>{
//     if(val<=45){
//         return val;
//     }
// })
// console.log(newArr);
// const newArr=arr.filter((val)=>val<=45)
// console.log(newArr);
// const newArr= arr.map((val)=>val<10)
// console.log(newArr);

// const newArr= arr.reduce((acc,cur)=>acc+=cur,0);
// console.log(newArr);

// let stud=[
//     {name:"harsh",course:"b.tech",branch: "cse"},
//     {name:"radhika",course:"b.com",branch: "hons"},
//     {name:"krishna",course:"b.tech",branch: "civil"},
//     {name:"ayush",course:"b.tech",branch: "cse"},
// ]
// let newArr= stud.filter((val)=>val.branch==="cse").map((val)=>val.name);
// console.log(newArr);

// const f1=()=>{
//     const f2=()=>{
//         let naam=80
//         console.log(naam);
//     }
//      f2();
// }
//  f1();
// //f2();

// const fun1=function(){
//     return "ths is function expression";
// }
// console.log(fun1());


//hoisting
// console.log(a);
// var a=30;

// function one(){
//     console.log("function one");
//     // return 3;
// }
// console.log(one());


// console.log(one);
// var one =function(){
//     console.log("function one");
//     return 3;
// }


// //callback function -> function as an argument
// function one( fun){   //parameter
//     console.log("hello 1");
//     fun();
// }
// function two (){
//     console.log("hello 2");
// }
// // one(two);  //argument
// // one(function (){console.log("hello 3")});
// // one(()=>{console.log("hello 3")});


// function sum(a,b){
//     // console.log(a+b)
//     return a+b;
// }
// function sub(a,b){
//     // console.log(a-b);
//     return a-b;
// }
// function calculate(a,b,fun){
//     return fun(a,b);
// }
// console.log(calculate(4,6,sub));

// //closures - returning function
// function init() {
//     const name = "Mozilla"; 
//     function displayName() {
//       console.log(name); 
//       console.log(num);
//     }
//     let num=10;
//     return displayName;
//   }
//   const myFun=init();
//   console.log(myFun);
//   myFun();
// //   myFun() -> 
// //   function displayName() {
// //     console.log(name);   //with reference to its souroundings states/variables
// //   }

// function person(){
//     const name1="harsh";
//     const name2="radhika";
//     return {
//         first:function (){
//             return name1;
//         },
//         second: function(){
//             return name2;
//         }
//     }
// }
// const output= person();
// console.log(output.second());


// coercion
