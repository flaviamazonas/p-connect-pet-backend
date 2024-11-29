const PetService = require('../services/PetService');

class PetController {
    static async create(req, res) {
        try {
            const newPet = await PetService.createPet(req.body);
            res.status(201).json(newPet);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const pets = await PetService.getAllPets();
            res.json(pets);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async getByName(req, res) {
        try {
            const { name } = req.params;
            const pet = await PetService.getPetByName(name);
            res.json(pet);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const updatedPet = await PetService.updatePet(id, req.body);
            res.json(updatedPet);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const message = await PetService.deletePet(id);
            res.json(message);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = PetController;
