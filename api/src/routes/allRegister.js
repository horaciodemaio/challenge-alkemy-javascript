const { Router } = require('express');
const {getAllRegister} = require("../controlls/register")
const router = Router();

router.get("/", getAllRegister);


module.exports = router;