module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burger", {
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};

