let btn = document.querySelector('.btn');
let uscore=document.querySelector('.userscore');
let cscore=document.querySelector('.compscore');
let select=document.querySelector('.select');
let res=document.querySelector('.result');
let box=document.querySelectorAll('.b');
let ucount=0;
let ccount=0;
let userChoice;

function resett(){
    btn.addEventListener('click',()=>{
        ucount=0;
        ccount=0;
        cscore.innerHTML=0;
        uscore.innerHTML=0;
        res.innerText="";
    });

}

function CompPick(){
let pick=["rock","paper","scissor"];
let random=Math.floor(Math.random()*3);
return pick[random];
}



function user(){
box.forEach((boxx)=>{
     boxx.addEventListener("click",()=>{
      userChoice=boxx.getAttribute('id');
    game();
    });

});
} 

function showWinner(userwin,u,c){
if(userwin){
    ucount++;
    uscore.innerHTML=ucount;
    res.style.color="green";
    res.innerText=`You win ! ${u} beats ${c}`;
} else{
    ccount++;
    cscore.innerHTML=ccount;
    res.style.color="red";
    res.innerText=`Computer wins! ${c} beats ${u}`;
}
}

function game(){
    let u=userChoice;
    let c=CompPick();
    if(u===c){
        res.innerHTML="It's a tie!";
    }else{
    let userwin=true;
    if(u==="rock"){
        userwin= c==="paper"?true:false;
    } else if(u==="paper"){
        userwin=c==="scissor"?true:false;
    } else {
        userwin= c==="rock"?true:false;
    }
    showWinner(userwin,u, c);
}

}


btn.addEventListener("click",()=>{
    resett();
   
});

user();
