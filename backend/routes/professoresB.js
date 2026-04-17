import express from 'express'
import db from './db.js'

const roteador = express.Router()

async function Pegar(req, res) {

    try {
        const [busca] = await db.query(
            "SELECT * FROM professores"
        )

        if (busca.length === 0) {
            return res.status(404).json({ message: "Não tem professores" })
        }
        return res.status(200).json(busca)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Erro interno"})
    }

}



roteador.get("/professoresB", Pegar)

export default roteador