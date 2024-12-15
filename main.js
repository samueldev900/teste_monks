/* Menu Mobile */

function open_menu() {
  let verify = false;
  let press = document.getElementById("nav");
  let header = document.getElementById("header");

  if (verify == false) {
    press.style.display = "block";
    header.style.borderRadius = "0px 0 15px 15px";

    verify = true;
  } else {
    press.style.display = "none";
    verify = false;
  }
}

function close_menu() {
  let press = document.getElementById("nav");
  let header = document.getElementById("header");

  press.style.display = "none";
  header.style.borderRadius = "0";
}


/* Auth */

let random = Math.floor(Math.random() * 100) + 1;
let random1 = Math.floor(Math.random() * 100) + 1;

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let resposta_correta = document.getElementById('correta');
let resposta_incorreta = document.getElementById('incorreta');
let input_result = document.getElementById('result');
result = random + random1;

number1.innerHTML = random
number2.innerHTML = random1
/* 
  Fica com borda vermelha enquanto a responsta estiver incorreta 
  E Verde quando correta
 */
input_result.addEventListener("input", function (e) {
  resposta_correta.style.display = 'none'
  resposta_incorreta.style.display = 'none'


  if(this.value != result){
    this.style.border = '2px solid red'
    resposta_incorreta.style.display = 'block'
  }
  else{
    this.style.border = '2px solid green'
    resposta_correta.style.display = 'block'

  }
});



