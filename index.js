const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?","/"];

let password1=''
let password2=''
let e = document.getElementById("passwordlength")
let selectedValue = e.options[e.selectedIndex].value

let password1div = document.querySelector("#password1")
let password2div = document.querySelector("#password2")

function generate(){
    let n = e.options[e.selectedIndex].value
    for(let i=0;i<n;i++){
        password1 += characters[Math.floor(Math.random()*characters.length)]
    }
    for(let i=0;i<n;i++){
        password2 += characters[Math.floor(Math.random()*characters.length)]
    }
    password1div.value=password1
    password2div.value=password2
    password1=''
    password2=''
}

function copy1() {
    let text = document.getElementById("password1")
    text.select()
    navigator.clipboard.writeText(text.value)
    alert("Password copied to clipboard"); 
}
function copy2() {
    let text = document.getElementById("password2")
    text.select()
    navigator.clipboard.writeText(text.value)
    alert("Password copied to clipboard"); //optional
}