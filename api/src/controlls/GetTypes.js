const { Type } = require('../db');



async function getTypes(req, res, next) {
 
    try {

        var types = await Type.findAll({

            attributes: { exclude: ["createdAt", "updatedAt"] },
    
        }
        );

        res.status(200).json(types);

    } catch (error) {

        next(error)
    };
};

module.exports = {
    getTypes,
};