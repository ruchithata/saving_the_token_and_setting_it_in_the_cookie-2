const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  try {
    // Generate a JWT with an expiry time of 1 hour
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.error('JWT Generation Error:', error);
    return null;
  }
};

module.exports = encrypt;
