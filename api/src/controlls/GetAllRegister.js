const { Register, Type } = require('../db');


async function getAllRegister(req, res, next) {
    try {
        var allRegister = await Register.findAll({
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
                { model: Type, attributes: { exclude: ["createdAt", "updatedAt"] } }
            ]
        }
        );

        res.json(allRegister);

    } catch (error) {

        next(error)
    };
};

module.exports = {
    getAllRegister,
};