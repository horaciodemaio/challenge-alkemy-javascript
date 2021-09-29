const { Router } = require('express');
const router = Router();
const Register = require("./allRegister");
const PostRegister = require("./postRegister");
const EditRegister = require("./editRegister");

router.use("/register", Register);
router.use("/postregister", PostRegister);
router.use("/editregister", EditRegister);

module.exports = router;
