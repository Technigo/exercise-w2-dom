console.log("Start Here 😉");

const dark = document.getElementById("dark");
const light = document.getElementById("light");
const crazy = document.getElementById("crazy");

const box = document.getElementById("box")



function changeLight() {
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
crazy.addEventListener('change', changeCrazy);
