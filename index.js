const encrypt = require("./script");


const secretKey = 'your_secret_key'; // Replace with a strong secret key
const payload = { id: 1, username: 'ruchitha' };

// Generate a JWT
const token = encrypt(payload, secretKey);
console.log('🔐 JWT Token:', token);
