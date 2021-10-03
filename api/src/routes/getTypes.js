const { Router } = require('express');
const {getTypes} = require("../controlls/GetTypes")
const router = Router();

router.get("/", getTypes);


module.exports = router;