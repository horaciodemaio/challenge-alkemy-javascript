const { Register } = require("../db");

async function DeleteRegister(req, res, next) {
    const { id } = req.params;
    console.log(id)

    try {

        if (!id || id === "" || id === "undefined" || id === undefined) {
            res.status(200).json({ message: "id is required" })
        }

        const OneRegister = await Register.findOne({
            where: {
                id: id,
            }
        })
        if (OneRegister) {

            OneRegister.destroy();
            res.status(200).json({ message: "the register was successfully removed" })

        } else {
            res.status(200).json({ message: "the operation does not exist" })
        }

    } catch (error) {

    }
}

module.exports = {
    DeleteRegister
}