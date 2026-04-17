import express from 'express'
import db from './db.js'

const roteador = express.Router()

async function Verifica(req, res) {

    const { nome, ra, turma, forte, fraco } = req.body;
    
    const [verificar] = await db.query(
        "SELECT * FROM alunos WHERE ra = ?",
        [ra]        
    );

    if(verificar.length > 0) {
        return res.status(409).json({ mensagem: "Ja existente"});
    } else {
        const [cadastrar] = await db.query(
            "INSERT INTO alunos(nome,ra,turma,pontos_fortes,pontos_fraco) VALUES(?,?,?,?,?)",
            [nome, ra, turma, forte, fraco]
        );

        res.status(201).json({ mensagem: "Cadastrado"})
    }

}

roteador.post("/aluno", Verifica)

export default roteador