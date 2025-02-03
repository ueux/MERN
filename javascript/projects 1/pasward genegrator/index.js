const btn=document.getElementById("genPass");
const newPass=document.getElementById("newPass");
const slider=document.getElementById("range");
const rangeVal=document.getElementById("rangeVal");
rangeVal.innerText=slider.value;
const upprCase=document.getElementById("capLet");
const lowerCase=document.getElementById("smaLet");
const number=document.getElementById("number");
const symbol=document.getElementById("symbol");
const copyBtn=document.getElementById("copyBtn");
slider.addEventListener('input',(e)=>{
    rangeVal.innerText=e.target.value;
})
btn.addEventListener("click",()=>{
    let capitalLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter="abcdefghijklmnopqrstuvwxyz";
    let numbers="0123456789";
    let symbols="!@#$%&*~_-\/";
    let finalStr="";
    if(upprCase.checked) finalStr+=capitalLetter;
    if(lowerCase.checked) finalStr+=smallLetter;
    if(number.checked) finalStr+=numbers;
    if(symbol.checked)finalStr+=symbols;
    let latestPasss="";
    let random;
    for(i=0;i<slider.value;i++)
    {
        random=Math.floor(Math.random()*finalStr.length);
        latestPasss+=finalStr.charAt(random);
    }
    newPass.innerText=`${latestPasss}`;
})
copyBtn.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(newPass.innerText);
    alert("copied");
})