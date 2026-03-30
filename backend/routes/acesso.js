import express from "express"
import db from "./db.js"
import jwt from "jsonwebtoken"
import segredo from "./segredo.js"
import bcrypt from 'bcrypt'

const roteador = express.Router()

async function login(req, res) {
    const { Email, Senha } = req.body;

    try {
        const [usuarios] = await db.query(
            "SELECT * FROM usuarios WHERE email = ?",
            [Email]
        );

        if (usuarios.length === 0) {
            return res.status(401).json({ message: "Usuario ou Senha invalido" });
        }
        const usuario = usuarios[0];

        const senhaCerta = await bcrypt.compare(Senha, usuario.senha)

        if (!senhaCerta) {
            return res.status(401).json({ message: "Usuarios ou senha errado" })
        }

        const token = jwt.sign(
            { id: usuario.id, role: usuario.roles },
            segredo,
            { expiresIn: "1h" }
        )
        return res.status(200).json({ message: "login valido", token: token });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno" })
    }
}

async function cadastrar(req, res) {

    const { Email, Senha, Nome, role } = req.body

    try {

        const senhaCriptografada = await bcrypt.hash(Senha, 10)

        const [resultado] = await db.query(
            "INSERT INTO usuarios(nome,email,senha,roles) VALUES(?,?,?,?)",
            [Nome, Email, senhaCriptografada, role]
        )
        if (resultado.affectedRows === 0) {
            return res.status(401).json({ message: "Erro ao cadastrar" })
        }
        return res.status(201).json({ message: "Cadastrado com sucessso" })


    } catch (erro) {
        console.error(erro)
        if (erro.code === "ER_DUP_ENTRY") {
            res.status(400).json({ message: "Email ou Nome de usuario indisponivel" })
        }
    }
}

roteador.post("/login", login);
roteador.post("/cadastro", cadastrar)

export default roteador