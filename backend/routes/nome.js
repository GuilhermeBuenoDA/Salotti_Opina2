import express from 'express'
import { verificarToken } from '../middleware/verificaToken.js'

const roteador = express.Router()

async function Nome(req,res) {
    return res.status(200).json({ nome: req.usuario.nome})
}

roteador.get("/me", verificarToken, Nome)
export default roteador