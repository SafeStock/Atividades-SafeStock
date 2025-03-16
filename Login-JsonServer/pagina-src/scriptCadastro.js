const inputNomeCadastro = document.querySelector('#input_nome');
const inputCargo = document.querySelector("#input_cargo");
const inputCnpj = document.querySelector("#input_cnpj");
const inputTelefone = document.querySelector("#input_telefone");
const inputEmailCadastro = document.querySelector('#input_email');
const inputSenhaCadastro = document.querySelector('#input_senha');
const buttonProximo = document.querySelector('#btnProximo');
const buttonCadastro = document.querySelector('#btnCadastro');
const resultado = document.querySelector('#div-resultado');

buttonProximo.addEventListener('click', (event) => {
    event.preventDefault();

    if (validarPrimeiraEtapa()) {
        inputNomeCadastro.style.display = 'none';
        inputCargo.style.display = 'none';
        inputCnpj.style.display = 'none';

        inputTelefone.style.display = 'block';
        inputEmailCadastro.style.display = 'block';
        inputSenhaCadastro.style.display = 'block';

        buttonProximo.style.display = 'none';
        buttonCadastro.style.display = 'block';
    }
});

buttonCadastro.addEventListener('click', (event) => {
    event.preventDefault();

    if (validarSegundaEtapa()) {
        postUsuario();
    }
});

const validarPrimeiraEtapa = () => {
    if (!inputNomeCadastro.value.trim()) {
        mensagemStatus('Nome é obrigatório', 'erro');
        return false;
    }

    if (!inputCargo.value.trim()) {
        mensagemStatus('Cargo é obrigatório', 'erro');
        return false;
    }

    if(inputCargo.value.toLowerCase() !== "dono" && inputCargo.value.toLowerCase() !== "administração" && inputCargo.value.toLowerCase() !== "funcionario da limpeza") {
        mensagemStatus('Cargo Inválido', 'erro');
        return false;
    }

    const cnpjLimpo = inputCnpj.value.replace(/\D/g, '');
    if (!cnpjLimpo || cnpjLimpo.length !== 14) {
        mensagemStatus('CNPJ deve conter exatamente 14 números', 'erro');
        return false;
    }

    return true;
};

const validarSegundaEtapa = () => {
    const telefoneLimpo = inputTelefone.value.replace(/\D/g, '');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!telefoneLimpo || telefoneLimpo.length !== 11) {
        mensagemStatus('O telefone deve conter exatamente 11 números', 'erro');
        return false;
    }

    if (!regexEmail.test(inputEmailCadastro.value.trim())) {
        mensagemStatus('Email inválido', 'erro');
        return false;
    }

    if (!inputSenhaCadastro.value.trim()) {
        mensagemStatus('Senha é obrigatória', 'erro');
        return false;
    }

    return true;
};

const postUsuario = () => {
    const novoUsuario = {
        nome: inputNomeCadastro.value.trim().toLowerCase(),
        cargo: inputCargo.value.trim().toLowerCase(),
        cnpj: inputCnpj.value.trim(),
        telefone: inputTelefone.value.trim(),
        email: inputEmailCadastro.value.trim().toLowerCase(),
        senha: inputSenhaCadastro.value.trim()
    };

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario)
    })
    .then(response => {
        if (!response.ok) throw new Error('Erro no cadastro');
        return response.json();
    })
    .then(() => {
        mensagemStatus('Cadastro realizado com sucesso!', 'sucesso');
        formNoneCad();
        trocarPagina();
    })
    .catch(error => {
        console.error(error);
        mensagemStatus('Erro ao cadastrar usuário', 'erro');
    });
};

const mensagemStatus = (texto, tipo) => {
    resultado.textContent = texto;
    resultado.className = tipo;
    setTimeout(() => resultado.textContent = '', 3000);
};

const formNoneCad = () => {
    inputNomeCadastro.value = '';
    inputCargo.value = '';
    inputCnpj.value = '';
    inputTelefone.value = '';
    inputEmailCadastro.value = '';
    inputSenhaCadastro.value = '';
};

const trocarPagina = () => {
    window.location = "index-login.html";
};