const { Register, Type } = require('../db');
var sequelize = require("sequelize");


async function getTenRegisters(req, res, next) {
 
    try {

        var tenRegister = await Register.findAll({

            limit: 10,
            order: sequelize.literal("id DESC"),
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
                { model: Type, attributes: { exclude: ["createdAt", "updatedAt"] } }
            ]
        }
        );

        res.status(200).json(tenRegister);

    } catch (error) {

        next(error)
    };
};

module.exports = {
    getTenRegisters,
};