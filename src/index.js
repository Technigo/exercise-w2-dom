console.log("Start Here 😉");
const darkColor = document.getElementById("dark").checked;
const lightColor = document.getElementById("light")
const crazyColor = document.getElementById("crazy")
const darkColorTest = document.getElementById("boxColor")
const radios = document.querySelectorAll('input[type="radio"]');
//darkColor.style.background = "brown"

//box.style.backgroundColor = "grey";

/*if(darkColor.checked){
    darkColorTest.style.backgroundColor = "brown"
}*/

function changeColor (){
    if (darkColor){
        box.style.backgroundColor = "brown";
    }else if(lightColor){
        box.style.backgroundColor = "yellow";
    }else if (crazyColor){
        box.style.backgroundColor = "purple";
    }
}

changeColor()

/* radios.addEventListener("click", changeColor = () => {
    if (darkColor){
        box.style.backgroundColor = "brown"
    }else if(lightColor){
        box.style.backgroundColor = "yellow"
    }else if (crazyColor){
        box.style.backgroundColor = "purple"
    }
}) */