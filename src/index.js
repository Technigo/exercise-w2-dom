console.log("Start Here 😉");

const dark = document.getElementById("dark");
const light = document.getElementById("light");
const crazy = document.getElementById("crazy");
const box = document.getElementById("box")

//alternative 1
/* function changeLight() {
    light.changed = box.style.backgroundColor = 'yellow';
} 
function changeDark() {
    light.changed = box.style.backgroundColor = 'brown';
} 
function changeCrazy() {
    light.changed = box.style.backgroundColor = 'red';
} 

light.addEventListener('change', changeLight);
dark.addEventListener('change', changeDark);
crazy.addEventListener('change', changeCrazy); */

//alternative 2

dark.addEventListener('change', function(){
    box.style.backgroundColor = 'brown';
})

light.addEventListener('change', function(){
    box.style.backgroundColor = 'yellow';
})

crazy.addEventListener('change', function(){
    box.style.backgroundColor = 'red';
})

