const { Pet } = require('../models');

class PetService {
    static async createPet({ name, gender, age, species }) {
        if (!name || !gender || !age || !species) {
            throw new Error('Todos os campos são obrigatórios.');
        }
        const newPet = await Pet.create({ name, gender, age, species });
        return newPet;
    }

    static async getAllPets() {
        const pets = await Pet.findAll();
        return pets;
    }

    static async getPetByName(name) {
        const pet = await Pet.findOne({ where: { name } });
        if (!pet) throw new Error('Pet não encontrado.');
        return pet;
    }

    static async updatePet(id, data) {
        const pet = await Pet.findByPk(id);
        if (!pet) throw new Error('Pet não encontrado.');
        await pet.update(data);
        return pet;
    }

    static async deletePet(id) {
        const pet = await Pet.findByPk(id);
        if (!pet) throw new Error('Pet não encontrado.');
        await pet.destroy();
        return { message: 'Pet removido com sucesso.' };
    }
}

module.exports = PetService;
