
let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let nome = document.getElementById('name');
let sobrenome = document.getElementById('lastname');
let email = document.getElementById('email');
let turma = document.getElementById('turma');

submit.addEventListener('click',e =>{ 
    e.preventDefault()
    console.log(nome.value);
    const alunos = [] 
})