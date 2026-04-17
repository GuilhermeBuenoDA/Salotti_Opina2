const main = document.getElementById("corpo");
const link = document.getElementById("link");

// function renderRo() {
//   main.innerHTML = `
//       <div class="conteinerprincipal">
//         <h1 class="prof-inicial">R</h1>
//         <h1 class="titulo">Romario</h1>
//         <p class="subtitulo-professor">Professor de Matemática • Área de Exatas</p>
//         <div class="topicos-container">
//           <div class="topico">
//             <img src="../img/livro roxo.png" alt="icone-para-desmostra-disciplinas" />
//             <div>
//               <h2>Disciplina</h2>
//               <p>Matematica Avançada</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/icone-carta-roxav2.png" alt="icone-para-desmostra-email-institucional" />
//             <div>
//               <h2>Email institucional</h2>
//               <p>romario.matematica@salotti.com</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/estrela roxa.png" alt="icone-para-desmostra-ciencias" />
//             <div>
//               <h2>Ciências</h2>
//               <p>Exatas</p>
//             </div>
//           </div>
//         </div>
//         <div class="descrição">
//           <p>
//             O professor Romário se destaca pela sua grande capacidade de
//             explicar conteúdos matemáticos de forma clara e objetiva. Ele
//             demonstra domínio total da matéria, conseguindo transformar temas
//             complexos em algo mais acessível para os alunos. Além disso,
//             incentiva o raciocínio lógico e a participação em sala, sempre
//             buscando que os estudantes realmente compreendam o conteúdo, e não
//             apenas memorizem. Sua forma de ensino contribui significativamente
//             para o desenvolvimento acadêmico da turma.
//           </p>
//         </div>
//       </div>

//     `

// }
// function renderEl() {
//   main.innerHTML = `
//       <div class="conteinerprincipal">
//         <h1 class="prof-inicial">E</h1>
//         <h1 class="titulo">Elen</h1>
//         <p class="subtitulo-professor">Professora de Língua Portuguesa • Área de Linguagens</p>
//         <div class="topicos-container">
//           <div class="topico">
//             <img src="../img/livro roxo.png" alt="icone-para-desmostra-disciplinas" />
//             <div>
//               <h2>Disciplina</h2>
//               <p>Linguagens Avançadas</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/icone-carta-roxav2.png" alt="icone-para-desmostra-email-institucional" />
//             <div>
//               <h2>Email institucional</h2>
//               <p>elen.portugues@salotti.com</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/estrela roxa.png" alt="icone-para-desmostra-ciencias" />
//             <div>
//               <h2>Ciências</h2>
//               <p>Humanas</p>
//             </div>
//           </div>
//         </div>
//         <div class="descrição">
//           <p>
//             A professora Elen é dedicada ao ensino da língua portuguesa, com
//             foco em interpretação de textos, gramática e produção escrita. Busca
//             desenvolver nos alunos o pensamento crítico, a comunicação clara e a
//             capacidade de argumentação. Suas aulas contribuem para fortalecer a
//             leitura, a escrita e a autonomia dos estudantes no processo de
//             aprendizagem.
//           </p>
//         </div>
//       </div>

//     `
// }
// function renderKa() {
//   main.innerHTML = `
//       <div class="conteinerprincipal">
//         <h1 class="prof-inicial">K</h1>
//         <h1 class="titulo">Karen</h1>
//         <p class="subtitulo-professor">Professora de Educação Física • Desenvolvimento Pessoal</p>
//         <div class="topicos-container">
//           <div class="topico">
//             <img src="../img/livro roxo.png" alt="icone-para-desmostra-disciplinas" />
//             <div>
//               <h2>Disciplina</h2>
//               <p>Educação Fisica</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/icone-carta-roxav2.png" alt="icone-para-desmostra-email-institucional" />
//             <div>
//               <h2>Email institucional</h2>
//               <p>karen.educacao@salotti.com</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/estrela roxa.png" alt="icone-para-desmostra-ciencias" />
//             <div>
//               <h2>Ciências</h2>
//               <p>Desenvolvimento Pessoal</p>
//             </div>
//           </div>
//         </div>
//         <div class="descrição">
//           <p>
//             A professora Karen se destaca pela sua energia, pela proximidade com
//             os alunos e pela forma leve com que conduz suas aulas. Participa do
//             ambiente escolar com entusiasmo, tornando as atividades mais
//             dinâmicas e motivadoras. Ao mesmo tempo, mantém o compromisso com o
//             aprendizado, promovendo o desenvolvimento físico, o bem-estar e a
//             participação da turma.
//           </p>
//         </div>
//       </div>

//     `
// }
// function renderJo() {
//   main.innerHTML = `
//       <div class="conteinerprincipal">
//         <h1 class="prof-inicial">J</h1>
//         <h1 class="titulo">João Gabriel de Lucca</h1>
//         <p class="subtitulo-professor">Professor Técnico em Banco de Dados • Tecnologia da Informação</p>
//         <div class="topicos-container">
//           <div class="topico">
//             <img src="../img/livro roxo.png" alt="icone-para-desmostra-disciplinas" />
//             <div>
//               <h2>Disciplina</h2>
//               <p>Técnico em Banco de Dados</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/icone-carta-roxav2.png" alt="icone-para-desmostra-email-institucional" />
//             <div>
//               <h2>Email institucional</h2>
//               <p>joao.lucca@salotti.com</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/estrela roxa.png" alt="icone-para-desmostra-ciencias" />
//             <div>
//               <h2>Ciências</h2>
//               <p>Tecnologia da Informação</p>
//             </div>
//           </div>
//         </div>
//         <div class="descrição">
//           <p>
//             O professor João Gabriel de Lucca é especialista em banco de dados
//             e se destaca pela forma clara e prática com que apresenta os
//             conteúdos. Utiliza exemplos próximos da realidade dos alunos para
//             facilitar a compreensão de temas técnicos. Seu estilo de ensino
//             contribui para tornar o aprendizado mais acessível, produtivo e
//             interessante dentro da área de tecnologia.
//           </p>
//         </div>
//       </div>    
//     `
// }
// function renderSi() {
//   main.innerHTML = `
//       <div class="conteinerprincipal">
//         <h1 class="prof-inicial">S</h1>
//         <h1 class="titulo">Sidney</h1>
//         <p class="subtitulo-professor">Professor de Back-End e Mobile • Desenvolvimento de Sistemas</p>
//         <div class="topicos-container">
//           <div class="topico">
//             <img src="../img/livro roxo.png" alt="icone-para-desmostra-disciplinas" />
//             <div>
//               <h2>Disciplina</h2>
//               <p>Técnico Back-End e Mobile</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/icone-carta-roxav2.png" alt="icone-para-desmostra-email-institucional" />
//             <div>
//               <h2>Email institucional</h2>
//               <p>sidney.dev@salotti.com</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/estrela roxa.png" alt="icone-para-desmostra-ciencias" />
//             <div>
//               <h2>Ciências</h2>
//               <p>Desenvolvimento de Sistemas</p>
//             </div>
//           </div>
//         </div>
//         <div class="descrição">
//           <p>
//             O professor Sidney ensina desenvolvimento back-end e mobile,
//             abordando lógica de programação, APIs e construção de aplicações.
//             Incentiva os alunos a criarem soluções práticas e modernas,
//             aproximando o conteúdo das demandas reais do mercado de tecnologia.
//             Sua atuação contribui para o desenvolvimento técnico e criativo dos
//             estudantes.
//           </p>
//         </div>
//       </div>    
//     `
// }
// function renderGa() {
//   main.innerHTML = `
//       <div class="conteinerprincipal">
//         <h1 class="prof-inicial">G</h1>
//         <h1 class="titulo">Gabriel Silva</h1>
//         <p class="subtitulo-professor">Professor de Versionamento e Projetos • Engenharia de Software</p>
//         <div class="topicos-container">
//           <div class="topico">
//             <img src="../img/livro roxo.png" alt="icone-para-desmostra-disciplinas" />
//             <div>
//               <h2>Disciplina</h2>
//               <p>Versionamento de Código / Projetos</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/icone-carta-roxav2.png" alt="icone-para-desmostra-email-institucional" />
//             <div>
//               <h2>Email institucional</h2>
//               <p>gabriel.silva@salotti.com</p>
//             </div>
//           </div>
//           <div class="topico">
//             <img src="../img/estrela roxa.png" alt="icone-para-desmostra-ciencias" />
//             <div>
//               <h2>Ciências</h2>
//               <p>Engenharia de Software</p>
//             </div>
//           </div>
//         </div>
//         <div class="descrição">
//           <p>
//             O professor Gabriel Silva trabalha com versionamento de código e
//             gestão de projetos, ensinando ferramentas como Git e boas práticas
//             de desenvolvimento. Seu objetivo é preparar os alunos para a
//             organização de projetos reais, fortalecer o trabalho em equipe e
//             desenvolver uma visão mais profissional sobre processos e
//             colaboração na área de tecnologia.
//           </p>
//         </div>
//       </div>    
//     `
// }

// const ro = document.getElementById("ro").addEventListener('click', () => {
//   renderRo()
//   link.href = "../css/sabe-se.css"
// })
// const el = document.getElementById("el").addEventListener('click', () => {
//   renderEl()
//   link.href = "../css/sabe-se.css"
// })
// const ka = document.getElementById("ka").addEventListener('click', () => {
//   renderKa()
//   link.href = "../css/sabe-se.css"
// })
// const jo = document.getElementById("jo").addEventListener('click', () => {
//   renderJo()
//   link.href = "../css/sabe-se.css"
// })
// const si = document.getElementById("si").addEventListener('click', () => {
//   renderSi()
//   link.href = "../css/sabe-se.css"
// })
// const ga = document.getElementById("ga").addEventListener('click', () => {
//   renderGa()
//   link.href = "../css/sabe-se.css"
// })

function render() {
  const profD = document.getElementById("prof");

  fetch(`http://localhost:3000/professoresB`)
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => {
          throw new Error(err.message || "Erro interno")
        })
      }
      return res.json()
    })
    .then(professores => {
      professores.forEach(prof => {
        const html = `
      <div class="prof">
        <h1 class="prof-inicial">${prof.nome.charAt(0).toUpperCase()}</h1>
        <h1 class="titulo">${prof.nome}</h1>
        <p class="subtitulo-professor">${prof.subtitulDoProfessor || ''}</p>
        <div class="topicos-container">
          <div class="topico">
            <img src="../img/livro roxo.png" alt="icone-para-desmostra-disciplinas" />
            <div>
              <h2>Disciplina</h2>
              <p>${prof.disciplia}</p>
            </div>
          </div>
          <div class="topico">
            <img src="../img/icone-carta-roxav2.png" alt="icone-para-desmostra-email-institucional" />
            <div>
              <h2>Email institucional</h2>
              <p>${prof.email}</p>
            </div>
          </div>
          <div class="topico">
            <img src="../img/estrela roxa.png" alt="icone-para-desmostra-ciencias" />
            <div>
              <h2>Ciências</h2>
              <p>Desenvolvimento de Sistemas</p>
            </div>
          </div>
        </div>
        <div class="descrição">
          <p>
            ${prof.descrição}
          </p>
        </div>
      </div>    
      `
        profD.insertAdjacentHTML('beforeend', html)
      });
    })
    .catch(error => {
      console.log(error.message)
    })
}

document.addEventListener('DOMContentLoaded', render)