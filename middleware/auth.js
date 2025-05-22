const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Generate a secure JWT secret
const JWT_SECRET = crypto.randomBytes(64).toString('hex');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET);
        
        // Add user from payload
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};