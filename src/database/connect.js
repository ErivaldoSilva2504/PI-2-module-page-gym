const mongoose = require('mongoose');

async function connectToDatabase() {
    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@gymnodejs.lhd3bey.mongodb.net/nomeDoSeuBancoDeDados?retryWrites=true&w=majority&appName=GymNodejs`;
    try {
        await mongoose.connect(uri);
        console.log('Conectado ao banco de dados com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

module.exports = connectToDatabase;
