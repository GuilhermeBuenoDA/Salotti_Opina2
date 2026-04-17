import express from "express"
import db from "./db.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import { verificarReq } from "../middleware/verificar.js"

const roteador = express.Router()

async function login(req, res) {
    const { email, senha } = req.body;

    try {
        const [usuarios] = await db.query(
            "SELECT * FROM usuarios WHERE email = ?",
            [email]
        );

        if (usuarios.length === 0) {
            return res.status(401).json({ message: "Usuario ou senha invalido" });
        }
        const usuario = usuarios[0];

        const senhaCerta = await bcrypt.compare(senha, usuario.senha)

        if (!senhaCerta) {
            return res.status(401).json({ message: "Usuarios ou senha errado" })
        }

        const token = jwt.sign(
            { id: usuario.id, role: usuario.roles, nome: usuario.nome },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        return res.cookie("token", token,{
            httpOnly: true,
            sameSite: "lax",
            secure: false
        }).status(200).json({ message: "login valido", nome: usuario.nome });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno" })
    }
}

async function cadastrar(req, res) {

    const { email, senha, nome, role } = req.body

    try {

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const [resultado] = await db.query(
            "INSERT INTO usuarios(nome, email, senha, roles) VALUES(?, ?, ?, ?)",
            [nome, email, senhaCriptografada, role]
        )
        if (resultado.affectedRows === 0) {
            return res.status(401).json({ message: "Erro ao cadastrar" })
        }
        return res.status(201).json({ message: "Cadastrado com sucessso" })


    } catch (erro) {
        console.error(erro)
        if (erro.code === "ER_DUP_ENTRY") {
            return res.status(400).json({ message: "email ou nome de usuario indisponivel" })
        }
    }
}

roteador.post("/login", verificarReq(["email", "senha"]), login);
roteador.post("/cadastro",verificarReq(["nome","email","senha", "role"]), cadastrar)

export default roteador