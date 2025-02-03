const ticTac=document.querySelector('.tictac');
let curPlayer='X';
const boxs=document.querySelectorAll('.box');
// const h1=document.getElementsByTagName("h1");
// console.log(h1)
const h1=document.getElementById("h1");
const rest=document.getElementById('restart');
let count=0;
// for(let box of boxs)
// {
//     box.addEventListener('click',(e)=>{
//         console.log(e.target);
//     })
// }
let winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



//funtion 
function startGame(e){
    // console.log(e.target);
    if(e.target.className !=='tictac')
    {
        if(e.target.innerText==="")
        {
            e.target.textContent=curPlayer;
            // if(curPlayer=="X") curPlayer='O';
            // else curPlayer='X';
            count++;
            winner();
            curPlayer=(curPlayer=="X")? 'O':'X';
        }
    }
    // if(e.target.textContent==="")
    // {
    //     e.target.textContent=curPlayer;
    // // if(curPlayer=="X") curPlayer='O';
    // // else curPlayer='X';
    // curPlayer=(curPlayer=="X")? 'O':'X';
    // }
    if(count==9)h1.innerText=`Match Is Draw`;
    
}


ticTac.addEventListener('click',startGame); //refer to function to start the game 


function winner(){
    winConditions.forEach((item)=>{
        // let index0=item[0]
        // console.log(item,index0);
        // let index0=item[0];
        // let index1=item[1];
        // let index2=item[2];
        let val0=boxs[item[0]].innerText;
        let val1=boxs[item[1]].innerText;
        let val2=boxs[item[2]].innerText;
        if(val0!==""&&val1!==""&&val2!=="")
            if(val0==val1&&val1==val2)
               {
                // boxs[index0].style.backgroundColor="red"; //first method
                boxs[item[0]].classList.add("winner");  //second method
                boxs[item[1]].classList.add("winner");
                boxs[item[2]].classList.add("winner");
                 count=0;
                 h1.innerText=`Winner is ${val0}`;
                 ticTac.removeEventListener('click',startGame); //refer to same function to end game
               }
    })
}


rest.addEventListener('click',()=>{
    curPlayer='X';
    h1.innerText='TicTacToe';
    count=0; 
    ticTac.addEventListener('click',startGame);
    boxs.forEach((item)=>{
        item.classList.remove("winner"); //remove winner class and the color
        item.innerText='';
    })
})