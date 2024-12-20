const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Adiciona os dados do usuário no request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
};

module.exports = authMiddleware;
