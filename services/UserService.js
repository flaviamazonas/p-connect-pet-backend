const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService {
    static async register({ name, email, password }) {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) throw new Error('Email já cadastrado.');

        const newUser = await User.create({ name, email, password });
        return newUser;
    }

    static async login({ email, password }) {
      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error('Usuário não encontrado.');
  
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) throw new Error('Senha inválida.');
  
      // Gera o token JWT
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
      return { token };
  }
}

module.exports = UserService;
