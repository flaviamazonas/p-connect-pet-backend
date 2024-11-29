const express = require('express');
const router = express.Router();
const PetController = require('../controllers/PetController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas de CRUD de Pets (protegidas por autenticação)
router.post('/', authMiddleware, PetController.create);
router.get('/', authMiddleware, PetController.getAll);
router.get('/:name', authMiddleware, PetController.getByName);
router.put('/:id', authMiddleware, PetController.update);
router.delete('/:id', authMiddleware, PetController.delete);

module.exports = router;
