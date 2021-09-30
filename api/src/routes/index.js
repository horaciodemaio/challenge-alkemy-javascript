const { Router } = require('express');
const router = Router();
const Register = require("./allRegister");
const PostRegister = require("./postRegister");
const EditRegister = require("./editRegister");
const DeleteRegister = require("./deleteRegister");

router.use("/register", Register);
router.use("/postregister", PostRegister);
router.use("/editregister", EditRegister);
router.use("/deleteregister", DeleteRegister);

module.exports = router;
