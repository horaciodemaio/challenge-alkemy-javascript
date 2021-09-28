const { Router } = require('express');
const {PostRegister} = require("../controlls/PostRegister")
const router = Router();

router.post("/", PostRegister);


module.exports = router;