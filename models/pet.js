const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Pet extends Model {
        static associate(models) {}
    }

    Pet.init(
        {
            name: DataTypes.STRING,
            gender: DataTypes.STRING,
            age: DataTypes.INTEGER,
            species: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Pet',
        }
    );

    return Pet;
};
