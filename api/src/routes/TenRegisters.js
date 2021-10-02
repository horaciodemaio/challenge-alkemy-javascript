const { Router } = require('express');
const {getTenRegisters} = require("../controlls/Limit10Registers")
const router = Router();

router.get("/", getTenRegisters);


module.exports = router;