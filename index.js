let newBut = document.getElementById("but");
let a = document.querySelector(".opentext");
let input = document.querySelector(".inputt");
let a2 = document.querySelector(".opentext2");
let input2 = document.querySelector(".inputt2");

function openText(){
    if(input.value === ""){
        a.style.opacity = "1"
    }else{
        a.style.opacity = "0"
    }
}

newBut.addEventListener('click', openText)

function openText2(){
    if(input2.value === ""){
        a2.style.opacity = "1"
    }else{
        a2.style.opacity = "0"
    }
}

newBut.addEventListener('click', openText2)
newBut.addEventListener('click', ccconsole)

function ccconsole (){
    let getNum = document.getElementById('get_num').value;
    let getNum2 = document.getElementById('get_num2').value;
    if(input.value === ""){
        newBut = false
    }else{
        console.log('Login -> ' + getNum)
        console.log('Password -> ' + getNum2)
    }   
}

