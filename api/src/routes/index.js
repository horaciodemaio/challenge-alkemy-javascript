const { Router } = require('express');
const router = Router();
const Register = require("./allRegister");

router.use("/register", Register);



module.exports = router;
