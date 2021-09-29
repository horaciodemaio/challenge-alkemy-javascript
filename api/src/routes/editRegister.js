const { Router } = require('express');
const {editRegister} = require("../controlls/EditRegister")
const router = Router();

router.put("/", editRegister);


module.exports = router;