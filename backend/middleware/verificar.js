export function verificarReq(campos) {
    return (req, res, next) => {
        const listaDeErros = []

        for (let campo of campos) {
            if (!req.body || !req.body[campo]) {
                listaDeErros.push(campo)
            }
        }
        if (listaDeErros.length > 0) {
            return res.status(400).json({
                message: `Faltam os campos: ${listaDeErros.join(", ")}`
            })
        }
        next()
    }
}