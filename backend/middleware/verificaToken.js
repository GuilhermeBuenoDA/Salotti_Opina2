export function verificarToken(req, res, next) {
    const token = req.cookies?.token; 

    if(!token) {
        return res.status(401).json({ message: "Não autenticado"})
    }
    try {
        const dados = jwt.decode(token, process.env.JWT_SECRET); 
        req.usuario = dados;
        next();
    } catch (error) {
        return res.status(401).json({message: "Token inválido ou expirado"});
    }
}