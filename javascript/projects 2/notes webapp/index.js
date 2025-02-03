let allDiv = document.getElementById("allNote");
let data = JSON.parse(localStorage.getItem("notes")) || [];
displayNote();
function displayNote() {
  data.map((singleNpte) => {
    addNote(singleNpte);
  });
}
document.getElementById("btn").addEventListener("click", () => {
  let date = new Date().toLocaleString();
  let obj = {
    note: "",
    date: date,
    checked: false,
  };
  addNote(obj);
});

function addNote({ note, date, checked }) {
  //   let date = new Date().toLocaleString();
  let divEle = document.createElement("div");
  divEle.setAttribute("class", "singleNote");
  divEle.innerHTML = `<div>
          <div>
            <button  class="editBtn ${note ? "" : "hidden"}">Edit</button>
            <button  class="saveBtn ${note ? "hidden" : ""}">Save</button>
            <button class="removeBtn">Remove</button>
            <input type="checkbox" name="autoSave" class="autoSave" />
            <label for="autoSave" id="label">Auto Save</label>
            </div>
          </div>
          <div>
            <div class="note ${note ? "" : "hidden"}" id="div">${note}</div>
            <textarea name="" class="note ${
              note ? "hidden" : ""
            }" id="text">${note}</textarea>
          </div>
          <div class="time">
              <div id='status'>${note?"Last updated :-":"Created :-"}
              </div>
              <div class="date">
                 ${date}
               </div>
          </div>`;
  let text = divEle.querySelector("#text");
  let div = divEle.querySelector("#div");
  let saveBtn = divEle.querySelector(".saveBtn");
  let editBtn = divEle.querySelector(".editBtn");
  let removeBtn = divEle.querySelector(".removeBtn");
  let autoSave = divEle.querySelector(".autoSave");
  let label = divEle.querySelector("#label");
  let status = divEle.querySelector("#status");
  if (checked) autoSave.setAttribute("checked", "true");
  //   if(note){
  //     text.classList.toggle("hidden");
  //     div.classList.toggle("hidden");
  //   }
  // text.innerHTML=marked(note)
  div.innerHTML = marked(note);
  saveBtn.addEventListener("click", () => {
    div.innerHTML = marked(text.value);
    // text.value = "";
    saveBtn.classList.toggle("hidden");
    editBtn.classList.toggle("hidden");
    text.classList.toggle("hidden");
    div.classList.toggle("hidden");
    let date = new Date().toLocaleString();
    status.innerHTML="Updated :- "
    divEle.querySelector(".date").innerHTML =`${date}`;
    updateStorage();
    
  });
  editBtn.addEventListener("click", () => {
    // div.innerHTML = marked(text.value);
    // text.value = "";
    saveBtn.classList.toggle("hidden");
    editBtn.classList.toggle("hidden");
    text.classList.toggle("hidden");
    div.classList.toggle("hidden");
  });
  removeBtn.addEventListener("click", (e) => {
    // e.target.parentNode.parentNode.remove()
    divEle.remove();
    updateStorage();
  });
  autoSave.addEventListener("click", () => {
    updateStorage();
  });
  label.addEventListener('click',()=>{
    if(autoSave.checked)autoSave.checked=false
    else autoSave.checked=true
    updateStorage()
  })
  text.addEventListener("input", () => {
    if (autoSave.checked) updateStorage();
  });
  allDiv.appendChild(divEle);
}

function updateStorage() {
  data = [];
  let index = 0;
  let checkbox=[];
  let textArea = document.querySelectorAll("textArea");
  let allDate = document.querySelectorAll("div.date");
  let checked=document.querySelectorAll("input")
  checked.forEach((e)=>{
    checkbox.push(e.checked)
  })
//   console.log(checkbox)
  // console.log(allDate[3].innerText)
  textArea.forEach((e) => {
    // console.log(e.value)
    if (e.value) {
      let obj = {
        note: e.value,
        date: allDate[index].innerText,
        checked:checkbox[index]
      };
      data.push(obj);
      index++;
    }
  });
  localStorage.setItem("notes", JSON.stringify(data));
}
