const { Router } = require('express');
const {getAllRegister} = require("../controlls/GetAllRegister")
const router = Router();

router.get("/", getAllRegister);


module.exports = router;