const request = require('supertest');
const app = require('../app');

describe('Testes de Usuário', () => {
    it('Deve retornar 401 se o login falhar', async () => {
        const response = await request(app).post('/api/users/login').send({
            email: 'usuario@invalido.com',
            password: 'senhaerrada',
        });

        // Verifica o status correto
        expect(response.status).toBe(400);

        // Verifica a mensagem de erro
        expect(response.body.message).toBe('Usuário não encontrado.');
    });
});
