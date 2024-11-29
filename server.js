require('dotenv').config(); // Carregar variáveis de ambiente
const app = require('./app'); // Importar o app já configurado
const PORT = process.env.PORT || 3000; // Definir a porta

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
