const form = document.getElementById('form')
const nome = document.getElementById('firstname')
const sobrenome = document.getElementById('lastname')
const email = document.getElementById('email')
const numero = document.getElementById('number')
const senha = document.getElementById('password')
const confirmar_senha = document.getElementById('confirmPassword')



function clicando(e){
    e.preventDefault();
    checkInputs();

}

function checkInputs(){
    const nameValue = nome.value;
    const sobrenomeValue = sobrenome.value;
    const emailValue = email.value;
    const numeroValue = numero.value;
    const senhaValue = senha.value;
    const confirmar_senhaValue = confirmar_senha.value;

    if(nameValue === ""){
        setErrorFor(nome, 'Campo obrigatório.')
    }else{
        setSucessoFor(nome)
    }
}

function setErrorFor(input, menssage){
    const inputBox = input.parentElement
    const small = inputBox.querySelector('small')

    small.innerText = menssage

    inputBox.className = 'input-box erro'
}

function setSucessoFor(input){
    const inputBox = input.parentElement

    inputBox.className = 'input-box sucesso'
}