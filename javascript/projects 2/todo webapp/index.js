const todoInput = document.getElementById("todoInput");
{
  //method 1
  // let id=1
  // document.getElementById("addBtn").addEventListener("click",(e)=>{
  //     e.preventDefault();
  //     let div = document.createElement("div");
  //     let todoVal=todoInput.value
  //     todoInput.value=''
  //     div.setAttribute("class", "singleTodo");
  //     div.setAttribute("id", id);
  //     div.innerHTML = `
  //                 <h2>${todoVal}</h2>
  //                 <input type="checkbox" name="" id=>
  //                 <button onclick=removeTodo(${id}) >Remove Todo</button>
  //                 `
  //     document.getElementById("allTodo").appendChild(div)
  //     id++
  // })
  // function removeTodo(id){
  //     document.getElementById(`${id}`).remove();
  // }
  // function markTodo(id){
  //     document.getElementById(`${id}`).children[0].classList.toggle('completed')  //hai to hata do nhi hai to laga do
  // }
}
let data = JSON.parse(localStorage.getItem("Todo Data")) || [];
//method 2
document.getElementById("addBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let todoVal = todoInput.value;
  todoInput.value = "";
  data.push({todoVal,completed:false});
  localStorage.setItem("Todo Data", JSON.stringify(data));
  displayTodo()
  
});

function displayTodo() {
    document.getElementById('allTodo').innerHTML=''
  data.map((singleTodo,id) => {
    todoStructure(singleTodo.todoVal,id);
  });
}
function todoStructure(singleTodo,id){
    let div = document.createElement("div");
    div.setAttribute("class", "singleTodo");
    div.innerHTML = `
                <h2>${singleTodo}</h2>
                <input type="checkbox" name="" id="">
                <button >Remove Todo</button>
                `;
    let btn = div.getElementsByTagName("button");
    let inp = div.getElementsByTagName("input");
    let h2 = div.getElementsByTagName("h2");
    btn[0].addEventListener("click", (e) => {
      //provides an event listener on every button
      e.target.parentNode.remove();
      removeTodo(id)
    });
    
    if(data[id].completed) {
        h2[0].classList.toggle('completed')
        inp[0].checked=1;
    }
    console.log(h2[0] ,data[id].completed ,singleTodo)
    inp[0].addEventListener("click", (e) => {
      e.target.previousElementSibling.classList.toggle("completed");
      markTodo(id)
    });
    document.getElementById("allTodo").appendChild(div);
}
function removeTodo(id){
    console.log(id)
    data.splice(id,1)
    localStorage.setItem("Todo Data",JSON.stringify(data))
    displayTodo()   //rearange the index of data
}
function markTodo(id){
    data[id].completed=!data[id].completed
    localStorage.setItem('Todo Data',JSON.stringify(data))
    // displayTodo()
}
displayTodo();