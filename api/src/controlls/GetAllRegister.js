const { Register, Type } = require('../db');
var sequelize = require("sequelize");


async function getAllRegister(req, res, next) {
    var type = req.query.type;
    try {
        if (type) {

            var findOne = await Register.findAll({
                
                order: sequelize.literal("id DESC"),
                include: {
                    model: Type,
                    attributes: ["name"],
                    where: {
                        name: type,
                    },
                },
            });

            if (findOne.length === 0) {
                return res.status(404).send("Error: Name of type is invalid");
            } else {
                res.status(200).json(findOne);
            }


        } else {

            var allRegister = await Register.findAll({

                order: sequelize.literal("id DESC"),
                attributes: { exclude: ["createdAt", "updatedAt"] },
                include: [
                    { model: Type, attributes: { exclude: ["createdAt", "updatedAt"] } }
                ]
            }
            );

            res.status(200).json(allRegister);
        }

    } catch (error) {

        next(error)
    };
};

module.exports = {
    getAllRegister,
};