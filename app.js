const change = document.querySelector('#change');
let decrease = document.querySelector('#decrease');
let reset = document.querySelector('#reset');
let increase = document.querySelector('#increase')

let count = 0;

decrease.addEventListener("click",function(event){
       count--;
       change.textContent = count;
})
increase.addEventListener("click",function(event){
    count++;
    change.textContent = count;
})
reset.addEventListener("click",function(event){
    count  = 0;
    change.textContent = count;
})

