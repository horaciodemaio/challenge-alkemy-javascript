const { Router } = require('express');
const router = Router();
const Register = require("./allRegister");
const PostRegister = require("./postRegister");

router.use("/register", Register);
router.use("/postregister", PostRegister);


module.exports = router;
