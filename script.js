const form = document.getElementById('form');
const nome = document.getElementById('firstname');
const sobrenome = document.getElementById('lastname');
const email = document.getElementById('email');
const numero = document.getElementById('number');
const senha = document.getElementById('password');
const confirmar_senha = document.getElementById('confirmPassword');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nameValue = nome.value;
    const sobrenomeValue = sobrenome.value;
    const emailValue = email.value;
    const numeroValue = numero.value;
    const senhaValue = senha.value;
    const confirmar_senhaValue = confirmar_senha.value;

    if (nameValue === "") {
        setErrorFor(nome, 'Campo obrigatório.');
    } else {
        setSucessoFor(nome);
    }

    if (sobrenomeValue === "") {
        setErrorFor(sobrenome, 'Campo obrigatório.');
    } else {
        setSucessoFor(sobrenome);
    }

    if (emailValue === "") {
        setErrorFor(email, 'Campo obrigatório.');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Este email não é válido.");
    } else {
        setSucessoFor(email);
    }

    if (numeroValue === "") {
        setErrorFor(numero, 'Campo obrigatório.');
    } else if (!isValidPhoneNumber(numeroValue)) {
        setErrorFor(numero, 'Número de telefone inválido.');
    } else {
        setSucessoFor(numero);
    }

    if (senhaValue === "") {
        setErrorFor(senha, 'Campo obrigatório.');
    } else if (senhaValue.length < 7) {
        setErrorFor(senha, 'Mínimo 7 caracteres.');
    } else {
        setSucessoFor(senha);
    }

    if (confirmar_senhaValue === "") {
        setErrorFor(confirmar_senha, 'Campo obrigatório.');
    } else if (confirmar_senhaValue !== senhaValue) {
        setErrorFor(confirmar_senha, 'Senhas diferentes');
    } else {
        setSucessoFor(confirmar_senha);
    }

    const formControls = form.querySelectorAll(".input-box");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === 'input-box sucesso';
    });

    if (formIsValid) {
        alert("Cadastro concluído com sucesso");
        window.location.reload(); // Recarrega a página
    }
    
}

function setErrorFor(input, mensagem) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector('small');

    small.innerText = mensagem;

    inputBox.className = 'input-box erro';
}

function setSucessoFor(input) {
    const inputBox = input.parentElement;

    inputBox.className = 'input-box sucesso';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidPhoneNumber(phone) {
    // Verifica se o telefone consiste em um DDD (2 dígitos) seguido de 9 dígitos numéricos.
    return /^\d{2}\d{9}$/.test(phone);
}
