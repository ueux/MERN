// const h1=document.getElementById("heading");
// //h1.innerHTML="<i>i will be successfull</i>"
// //h1.innerText="<i>i will be successfull</i>";
// console.log(h1.innerText);

// const h1= document.getElementsByTagName("h1")
// console.log(h1);
// console.log(h1[0].innerText);


//const h1= document.querySelector("h1")  //selects the first occuring element
// const h1= document.querySelector("#heading")
// const h1= document.querySelector("input[type=submit]")
// const h1= document.querySelectorAll("h1")
// console.log(h1);
// console.log(h1[0]);

// const h1= document.querySelector("h1");
// // h1.style.backgroundColor="green";
// // h1.style.border="10px solid red";
// // h1.style.borderRadius="100px";
// // h1.setAttribute("id","heading2");
// // h1.setAttribute("style","background-color: red");
// // h1.removeAttribute("style");


// const newTag= document.createElement("p");
// console.log(newTag);
// newTag.setAttribute("id","heading2");
// newTag.innerText="i will be successfull";

// // document.getElementsByTagName("body")[0].append(newTag);
// document.getElementById("body").append(newTag);


// let data=["hifza","gaurisha","radhika","tanishka","charu","prachi","divyanka"];

// const ul=document.getElementById("crush");
// for(let i=0;i<data.length;i++){
//     const newl= document.createElement("li");
//     newl.innerText=data[i];
//     // newl.style.backgroundColor="pink";
//     // newl.style.margin="5px";
//     // newl.style.width="100px";
//     // newl.style.textAlign="center";
//     // newl.style.borderRadius="10px";
//     // newl.style.padding="5px";
//     // newl.style.border="5px dotted";
//     ul.append(newl);
// }

// const btn=document.getElementById("button");
// //event handler  //overwrites previous one
// btn.onclick=()=>{
//     console.log("hello from js file 1");
// }
// btn.onclick=()=>{
//     console.log("hello from js file 2");
// }

// //event listner  //executes all events at once
// btn.addEventListener("click",()=>{
//     console.log("hello 1");
// })
// btn.addEventListener("click",()=>{
//     console.log("hello 2");
// })


// btn.addEventListener("click",(e)=>{
//     console.log(e);
//     e.target.innerText="changed";
//     console.log(e.target);
//     console.log("hello 1");
// })

// // let a=1;
// // btn.addEventListener("click",(e)=>{
// //     console.log(e);
// //     e.target.innerText=`changed${a}`;
// //     a++;
// //     console.log(e.target);
// //     document.getElementsByTagName("body")[0].append(e.target);
// //     console.log("hello 1");
// // })


// const btn=document.getElementById("button");
// const h1=document.getElementById("heading");
// const color=["red","green","pink","blue"];
// let a=0;
// btn.addEventListener("click",(e)=>{
//     h1.style.backgroundColor=color[a];
//     a++;
//     if(a==color.length) a=0;
// })

// const btn=document.getElementById("button");
// const h1=document.getElementById("heading");
// btn.addEventListener("click",(e)=>{
//     if(confirm("change color ?")){   //confirm

//     h1.style.backgroundColor=prompt("which color");  //prompt
//     }
// })


// const input=document.getElementById("colname");
// const body=document.getElementById("body");
// const change=document.getElementById("change");
// change.addEventListener("click",(e)=>{
//     e.preventDefault();   //prevents form from reloading
//     console.log(input.value);
//     body.style.backgroundColor=input.value;
//     input.value="";
// })



// const body=document.getElementById("body");
// const colors = document.querySelectorAll("input");
// // console.log(colors)
// for(const color of colors)
// {
// color.addEventListener("click",(e)=>{
//     if(color.checked){
//         for(i=0; i<colors.length; i++)
//             {
//               if(colors[i].value !== color.value)
//               {
//                  colors[i].checked = false;   
//               }
//             }
//     body.style.backgroundColor=color.value;
//     }
//     else body.style.backgroundColor="white";
//     // color1.value="";
// })
// }

// const newtag=document.createElement("a");
// const change=document.getElementById("range");
// change.addEventListener("input",(e)=>{
//     newtag.innerText=change.value;
//     document.body.append(newtag);
// })

// const box1=document.querySelector("#box1")
// const box2=document.querySelector("#box2")
// const items=document.querySelectorAll(".items")
// console.log(items , box1)
// for(let item of items){
//     item.addEventListener("dragstart",(e)=>{
//         console.log(e.target);
//         let data=e.target;
//         box2.addEventListener("dragover",(e)=>{
//             console.log("box2");
//             e.preventDefault();
//             // e.stopPropagation();
//         })
//         box2.addEventListener("drop",()=>{
//             console.log(e.target ,"box2");
//             box2.append(data);
//            data="";
//         })
//         box1.addEventListener("dragover",(e)=>{
//             console.log("box1");
//             e.preventDefault();
//             e.stopPropagation();
//         })
//         box1.addEventListener("drop",()=>{
//             console.log(e.target ,"box1");
//             box1.append(data);
//            data="";
//         })
//     })
// }


