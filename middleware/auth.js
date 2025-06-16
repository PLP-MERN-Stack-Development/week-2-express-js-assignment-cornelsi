// 📁 middleware/auth.js
module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validKey = '123456'; // Replace with environment variable in production

  if (!apiKey || apiKey !== validKey) {
    return res.status(401).json({ error: 'Unauthorized. Invalid or missing API key.' });
  }

  next();
};
