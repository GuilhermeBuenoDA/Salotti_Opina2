import express from 'express'
import cors from 'cors'
import rotaLogin from "./routes/acesso.js"
import rotaMensagem from "./routes/mensagem.js"
import rotaProfessores from "./routes/professores.js"
import rotaAlunos from "./routes/alunos.js"
import rotaBuscar from "./routes/buscar.js"
import rotaProf from './routes/professoresB.js'
import rotaNome from './routes/nome.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser())
app.use(rotaLogin);
app.use(rotaMensagem);
app.use(rotaProfessores);
app.use(rotaAlunos);
app.use(rotaBuscar);
app.use(rotaProf);
app.use(rotaNome);


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
});