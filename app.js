const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');

const app = express();

// Habilitar CORS
app.use(cors({
  origin: 'https://connect-pet-frontend.onrender.com', // Substitua pelo domínio do frontend
  credentials: true,
}));

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);

app.get('/', (req, res) => res.send('Bem-vindo ao Connect Pet!'));

module.exports = app;
