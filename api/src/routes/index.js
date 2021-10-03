const { Router } = require('express');
const router = Router();
const Register = require("./TenRegisters");
const PostRegister = require("./postRegister");
const EditRegister = require("./editRegister");
const DeleteRegister = require("./deleteRegister");
const GetAllRegister = require("./getAllRegister");
const GetTypes = require("./getTypes");

router.use("/register", Register);
router.use("/postregister", PostRegister);
router.use("/editregister", EditRegister);
router.use("/deleteregister", DeleteRegister);
router.use("/allregister", GetAllRegister);
router.use("/types", GetTypes);

module.exports = router;
