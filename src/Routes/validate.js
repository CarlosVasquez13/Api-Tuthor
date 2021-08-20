const jwt = require('jsonwebtoken')

// middleware validar token
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    
    if (!token) 
        return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, "miClaveUltraSuperMegaSecreta123")
        req.user = verified
        
        next() 
    } catch (error) {
        res.status(400).json({
            error: 'Token no valido'
        })
    }
}

module.exports = verifyToken;