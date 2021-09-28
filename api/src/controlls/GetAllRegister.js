const { Register, Type } = require('../db');


async function getAllRegister(req, res, next) {
    var type = req.query.type;
    try {
        if (type) {

            var findOne = await Register.findAll({
                // limit: limit,
                // offset: offset,
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
            } else return res.json(findOne);

        } else {

            var allRegister = await Register.findAll({
                attributes: { exclude: ["createdAt", "updatedAt"] },
                include: [
                    { model: Type, attributes: { exclude: ["createdAt", "updatedAt"] } }
                ]
            }
            );

            res.json(allRegister);
        }

    } catch (error) {

        next(error)
    };
};

module.exports = {
    getAllRegister,
};