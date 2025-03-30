const express = require('express');
const Password = require('../models/Password');
const jwt = require('jsonwebtoken');
const router = express.Router();

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token no proporcionado' });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token no válido' });
    req.userId = decoded.userId;
    next();
  });
};

router.post('/save', authenticate, async (req, res) => {
  const { category, password } = req.body;
  const newPassword = new Password({ userId: req.userId, category, password });
  await newPassword.save();
  res.status(201).json({ message: 'Contraseña guardada' });
});

router.get('/', authenticate, async (req, res) => {
  const passwords = await Password.find({ userId: req.userId });
  res.json(passwords);
});

module.exports = router;
