// cors.js
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

module.exports = function corsMiddleware() {
    return cors(corsOptions);
};