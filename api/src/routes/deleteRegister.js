const { Router } = require('express');
const {DeleteRegister} = require("../controlls/DeleteOneRegister");

const router = Router();

router.delete('/:id', DeleteRegister);
    
module.exports = router;