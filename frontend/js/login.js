const main = document.getElementById("conteudo");

function renderLogin() {
    main.innerHTML = `
    
        <div class="conteiner">
            <h1>Bem-vindo de volta</h1>
            <p>login para continuar</p>

            <form id="formLogin">
                <label for="Email">Usuário</label><br>
                <input id="Email" name="Email" type="email" placeholder="Digite seu email de usuário"><br>
                <label for="Senha">Senha</label><br>
                <input id="Senha" name="Senha" type="password" placeholder="Digite sua senha"><br>
                <button type="submit" class="button-entrar">Entrar na Plataforma</button><br>
            </form>
            <p id="p"></p>
            <button id="cadastro" class="buttonnao">Não tem cadastro?</button>
        </div>

    `;
    const p = document.getElementById("p")

    const formLogin = document.getElementById("formLogin");
    const trocarCadastro = document.getElementById("cadastro").addEventListener('click', renderCadastro);


    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const dados = Object.fromEntries(new FormData(formLogin))

        if (!dados.Email || !dados.Senha) {
            p.textContent = "Complete as informações"
        } else

            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(err => {
                            throw new Error(err.message || "Erro interno")
                        })
                    }
                    return res.json()
                })
                .then(data => {

                    if (data.token) {
                        localStorage.setItem("token", data.token);
                        p.textContent = "login realizado";
                        setTimeout(() => {
                            window.location.href = "../html/interface.html"
                        }, 3000)
                    } else {
                        p.textContent = data.message;
                    }

                })
                .catch(error => {
                    p.textContent = error.message;
                })

    });

}

function renderCadastro() {
    main.innerHTML = `
        <div class="conteiner">
            <h1>Bem-vindo de volta</h1>
            <p>login para continuar</p>
            <div>
                <button class="button-prof" id="professor"><img src="../img/icone_inicial_header.png" alt="icone-para-login-professor">
                    <p>Professor</p>
                </button>
                <button class="button-aluno" id="aluno"><img src="../img/icone-pessoa.png" alt="icone-para-login-Alunos">
                    <p>Alunos</p>
                </button>
            </div>
            <form id="formCadastro">
                <label for="Nome">Usuário</label><br>
                <input name="Nome" id="Nome" type="text" placeholder="Digite seu usuário"><br>
                <label for="Senha">Senha</label><br>
                <input id="Senha" name="Senha" type="password" placeholder="Digite sua senha"><br>
                <label for="Email">Email</label><br>
                <input id="Email" name="Email" type="email" placeholder="Digite sua email"><br>
                <button type="submit" class="button-entrar">Entrar na Plataforma</button><br>
                
            </form>
            <p id="p"></p>
        <button id="login" class="buttonnao">Já tem cadastro?</button>
        </div>
    `;
    const p = document.getElementById("p")


    const formCadastro = document.getElementById("formCadastro");
    const trocarLogin = document.getElementById("login").addEventListener('click', renderLogin);

    const btna = document.getElementById("aluno")
    const btnb = document.getElementById("professor")

    let cargo = null;

    btna.addEventListener('click', () => {
        cargo = "aluno"
    })

    btnb.addEventListener('click', () => {
        const senha = prompt("Digite a senha: ")
        if(senha === "12345") {
            alert("senha certa")
            cargo = "professor"
        } else{
            alert("senha errada");
            cargo = null;
        }    
    })

    formCadastro.addEventListener("submit", (event) => {
        event.preventDefault();


        const dados = Object.fromEntries(new FormData(formCadastro))

        if (!dados.Nome || !dados.Senha || !dados.Email || !cargo) {
            return p.textContent = "Complete todas as informações"
        }

        fetch("http://localhost:3000/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...dados,
                role: cargo
            })
        })

            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => {
                        throw new Error(err.message || "Erro interno");
                    })
                }
                return res.json()
            })
            .then(data => {
                p.textContent = data.message
            })
            .catch(error => {
                p.textContent = error.message;
            });
    });
}

renderCadastro();