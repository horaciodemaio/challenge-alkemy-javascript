const { Router } = require('express');
const {editRegister} = require("../controlls/EditRegister")
const router = Router();

router.get("/", editRegister);


module.exports = router;