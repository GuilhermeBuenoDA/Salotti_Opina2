const main = document.getElementById("conteudo");

async function apiRequest(url, opitons) {
    const res = await fetch(url, opitons);
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || "Erro de requisição")
    }

    return data;
}

function renderLogin() {
    main.innerHTML = `
    
        <div class="conteiner">
            <h1>Bem-vindo de volta</h1>
            <p>login para continuar</p>

            <form id="formLogin">
                <label for="email">Usuário</label><br>
                <input id="email" name="email" type="email" placeholder="Digite seu email de usuário"><br>
                <label for="senha">senha</label><br>
                <input id="senha" name="senha" type="password" placeholder="Digite sua senha"><br>
                <button type="submit" class="button-entrar">Entrar na Plataforma</button><br>
            </form>
            <p id="p"></p>
            <button id="cadastro" class="buttonnao">Não tem cadastro?</button>
        </div>

    `;
    const p = document.getElementById("p")

    const formLogin = document.getElementById("formLogin");
    const trocarCadastro = document.getElementById("cadastro").addEventListener('click', renderCadastro);


    formLogin.addEventListener("submit", async function (event) {
        event.preventDefault();

        const dados = Object.fromEntries(new FormData(formLogin))

        if (!dados.email || !dados.senha) {
            return p.textContent = "Complete as informações"
        } else {
            try {
                const data = await apiRequest("http://localhost:3000/login", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dados)
                });
                localStorage.setItem("token", data.token);

                p.textContent = data.message

                setTimeout(() => {
                    window.location.href = "../html/interface.html"
                })
            } catch (error) {
                p.textContent = error.message
            }
        }

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
                <label for="nome">Usuário</label><br>
                <input name="nome" id="nome" type="text" placeholder="Digite seu usuário"><br>
                <label for="senha">senha</label><br>
                <input id="senha" name="senha" type="password" placeholder="Digite sua senha"><br>
                <label for="email">email</label><br>
                <input id="email" name="email" type="email" placeholder="Digite sua email"><br>
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
        if (senha === "12345") {
            alert("senha certa")
            cargo = "professor"
        } else {
            alert("senha errada");
            cargo = null;
        }
    })

    formCadastro.addEventListener("submit", async function (event) {
        event.preventDefault();


        const dados = Object.fromEntries(new FormData(formCadastro))

        if (!dados.nome || !dados.senha || !dados.email || !cargo) {
            return p.textContent = "Complete todas as informações"
        } else {

            try {
                const data = await apiRequest("http://localhost:3000/cadastro", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...dados,
                        role: cargo
                    })
                })
                p.textContent = data.message
            } catch (error) {
                p.textContent = error.message
            }
        }
    });
}

renderCadastro();