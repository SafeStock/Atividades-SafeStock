const inputNomeCadastro = document.querySelector('#input_nome');
const inputEmailCadastro = document.querySelector('#input_email');
const inputSenhaCadastro = document.querySelector('#input_senha');
const buttonCadastro = document.querySelector('#btnCadastro');

const inputEmailLogin = document.querySelector('#input_emailLogin');
const inputSenhaLogin = document.querySelector('#input_senhaLogin');
const buttonLogin = document.querySelector('#btnLogin');

const resultado = document.querySelector('#div-resultado');

document.getElementById('form-cadastro').addEventListener('submit', (event) => {
    event.preventDefault();
    setTimeout(() => { // forçando um delay para simular uma requisição demorada
        postUsuario();
    }, 2000);
});

const postUsuario = () => {
    const novoUsuario = {
        nome: inputNomeCadastro.value.trim(),
        email: inputEmailCadastro.value.trim().toLowerCase(),
        senha: inputSenhaCadastro.value
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
    inputEmailCadastro.value = '';
    inputSenhaCadastro.value = '';
};

const formNoneLog = () => {
    inputEmailLogin.value = '';
    inputSenhaLogin.value = '';
};

const trocarPagina = () => {
    window.location = "index-login.html"
}