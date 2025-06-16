// 📁 middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error('🔥 Error:', err.stack);
  res.status(err.statusCode || 500).json({ error: err.message || 'Internal Server Error' });
};
