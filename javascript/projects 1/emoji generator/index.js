let emoji=document.getElementById('emoji')
let result;
async function ferchEmoji(){
    let res=await fetch('https://emoji-api.com/emojis?access_key=29eb04b460f5cd12216b9e03748832e46bc7c2bd')
    result=await res.json();
}
ferchEmoji()
emoji.addEventListener('click',()=>{
    emoji.innerHTML=`${result[Math.floor(Math.random()*result.length)].character}`
})