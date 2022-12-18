//alert("ce site va te hack toutes tes données")


/*
const scoreFR = 2;
const scoreEn = 2;
*/

/*
if (scoreFR>scoreEN) {
    console. log ("la france à gangé")
}
else if (scoreFR<scoreEN) {
    console. log ("le uk à gangé")
}
else {
    console. log ("égalité")
}

*/


/*
function
function setscore(){
    const scoreMAR = null
    console. log("scoreMAR")
}

*/


/* realisation mode nuit*/

const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const paragraphs = document.querySelectorAll("p");
const button = document.querySelector("button");

// Evenement

button.addEventListener("click", function() {
    if (button.value === 'Night mode'){
    body.style.backgroundColor = "#380051"
    button.value = 'mode jour'
    button.textContent = 'Mode Jour'
    h1.style.color = "#fffbc5"
    }
    else{
        body.style.backgroundColor = "#fffbc5"
        button.value = 'Night mode'
        button.textContent = 'Night mode'
        h1.style.color = "#380051" 
        }
})
    

const button4 = document.getElementById("uwu")

console.log(paragraphs);