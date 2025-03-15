const inputEmailLogin = document.querySelector('#input_emailLogin');
const inputSenhaLogin = document.querySelector('#input_senhaLogin');
const buttonLogin = document.querySelector('#btnLogin');

const resultado = document.querySelector('#div-resultado');

document.getElementById('form-login').addEventListener('submit', (event) => {
    event.preventDefault();
    logarUsuario();
});

const logarUsuario = () => {
    const email = inputEmailLogin.value.trim().toLowerCase();
    const senha = inputSenhaLogin.value;
    validarEmail();

    fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(usuarios => {
        const usuarioEncontrado = usuarios.find(user => 
            user.email.toLowerCase() === email && user.senha === senha
        );

        if (usuarioEncontrado) {
            mensagemStatus(`Bem-vindo(a), ${usuarioEncontrado.nome}!`, 'sucesso');
            formNoneLog();
            // Redirecionar ou gerenciar sessão aqui
        } else {
            mensagemStatus('Credenciais inválidas', 'erro');
        }
    })
    .catch(error => {
        console.error(error);
        mensagemStatus('Erro ao tentar login', 'erro');
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

const validarEmail = () =>{
    console.log('entrou na função')
    const regex = /@/;
    if(inputEmailLogin.value.regex){
        resultado.innerHTML = `email válido`;
        console.log("email inválido")
    }else{
        resultado.innerHTML = `email inválido`
    }
}