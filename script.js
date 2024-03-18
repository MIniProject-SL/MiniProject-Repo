let btn=document.querySelectorAll('.eachbox');
let move0=true;
let winningOrder=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
btn.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(move0){
            box.innerHTML='O';
            move0=false;
        }
        else{
            box.innerHTML='X';
            move0=true;
        }
        box.disabled=true;
        winningOrder.forEach((arr)=>{     
        // console.log(arr[0],arr[1],arr[2])
        // console.log(btn[arr[0]],btn[arr[1]],btn[arr[2]])
        let val1=btn[arr[0]].innerHTML;
        let val2=btn[arr[1]].innerHTML;
        let val3=btn[arr[2]].innerHTML;
        // console.log(val1);
        // console.log(val2);
        // console.log(val3);
        if(val1!=='' && val2!==''&& val3!=='' )
  {
        if(val1===val2 && val2===val3){
            disablebox();
            console.log("Winner Winner Chicken Dinner");
            console.log(val1);
            document.querySelector('.hide').classList.add('winner');
            result(val1);
        }
    }
        }
        );
    })
})
function myfun(){
    document.querySelector('.hide').classList.remove('winner')
    winningOrder.forEach((arr)=>{
        btn[arr[0]].innerText='';
        btn[arr[1]].innerText='';
        btn[arr[2]].innerText='';
        btn.forEach((box)=>
        {
            box.disabled=false;
        })

    })
    
}
function result(val1){
    document.querySelector('.winner').innerHTML=`<h2> 👑 Winner is ${val1} 👑</h2>
    <div><button  class='newgame' onclick="myfun()">NEW GAME</button></div>`
}
function disablebox()
{
    btn.forEach((but)=>{
        but.disabled=true;
    })
}
