const sectionResultado = document.getElementById('section-resultado')

const email = document.getElementById('input_email').value;
const senha = document.getElementById('input_senha').value;

btnEntrar.addEventListener("click", () => {
    login(email, senha)
})

function login(email, senha) {
    if (email == "" || senha == "") {
        sectionResultado.innerHTML = `* senha ou usuario incorreto`;
        return;
    } else {
        setInterval(() => {
            sectionResultado.innerHTML = `login realizado com sucesso`;
        }, 2000);
    }
}

const getUsuarios = () => {
    fetch('http://localhost:3000/usuario')
    .then((res) => {
        console.log('get usuario', res);
        return res.json();
    })
    .catch((error) => {
        console.error(error);
    })
}