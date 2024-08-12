let gamesqu=[];
let usrsqu=[];

let h3=document.querySelector("h3");
let h4=document.querySelector("h4");

let sequence=["one","two","three","four"];
let btns=document.querySelectorAll(".button");

let level=0;
let state=false;
let score=0;

for(btn of btns){
    btn.addEventListener("click",btnwrk);
}

document.addEventListener("keydown",function(){
    if(state==false){
        state=true;
        h3.innerText="Level";
        flashygame();

    }
})



function btnwrk(){
        flash(this);
        usrsqu.push(this.id);
        anschk(usrsqu.length-1)
}


function anschk(idx){
    console.log(idx)
    if(usrsqu[idx] === gamesqu[idx]){
        if(usrsqu.length==gamesqu.length){
            setTimeout(function(){
            flashygame();
            usrsqu=[];
            },500)
        }
    }else{
            h3.innerHTML=`Loose press any key to start<br><b>${level}<b>` 
            h4.innerText=''; 
            document.querySelector("body").style.backgroundColor="red"
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="rgb(46, 43, 43)";
            },250)
            if(level>score){
                score=level;
                document.querySelector("#score").innerText=`${score}`;
            //    let alert= setIntervalalert(()=>{
            //     alert(`You set new heighest record: ${score}`);
            //    },300);
            //    setTimeout(()=>{
            //     clearInterval(alert);
            //    },350)
            }
        reset();

    }
}
function random(){
    return(Math.floor(Math.random()*4));
}

function flashygame(){
        level++;
        h4.innerText=`${level}`

    let randomint=random();
    let card=document.querySelector(`.${sequence[randomint]}`);
    gamesqu.push(sequence[randomint]);
    console.log(gamesqu)
    flash(card);
    
}
function flash(card){
    card.classList.add("white");

    setTimeout(function(){
        card.classList.remove("white");
    },200)
}
function reset(){
    gamesqu=[];
    usrsqu=[];
    level=0;
    state=false;
}





































// let gamSqu=[];
// let usersqu=[];

// let colour=["one","two","three","four"]

// let state=false;
// let level=0;

// let h3=document.querySelector("h3");
// let h4=document.querySelector("h4");
// /*Event listener when button is clicked*/
// let buttons=document.querySelectorAll(".button");
//  for(btn of buttons)
// {
//     btn.addEventListener("click",function(){
//         let ans=this.id;
//         usersqu.push(ans);
        
//     })
// }


// document.addEventListener("keydown",function(){
//     if(state==false){
//     state=true;
//     level++;
    
//     console.log("game is started");
//     h3.innerText="level"
//     h4.innerText=`${level}`

//     game();
    

//     }
// })
// function game(){
//     let randomint=random();
//     let card=document.querySelector(`#${colour[randomint]}`)
//     gamSqu.push(card.id);
//     flashy(card);

// }

// function flashy(card){
//     card.classList.add("white");
//     setTimeout(function(){
//         card.classList.remove("white");
//     },250)
// }
// function random(){
//     return (Math.floor(Math.random()*3));
// }
