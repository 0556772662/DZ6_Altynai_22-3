const div = document.createElement('div')
console.log(div)
div.classList.add('counter')
const body = document.body
body.appendChild(div)
console.log(body)
const add = document.querySelector('.plus');
const remove = document.querySelector('.minus')
const int = document.querySelector('input');
let integer = 0;
add.addEventListener('click', function (){
    if(int.value<10)
    integer +=1;
    int.value = integer
})
remove.addEventListener('click', function (){
    if(int.value>-10)
    integer -=1;
    int.value = integer;
})

