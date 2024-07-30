const express = require("express");
const router = express.Router();
const { signup, login, reciver } = require("../../controller/usercontroller/usercontroller")

router.post("/signup", signup);
router.post("/", login);
router.post("/quiry", reciver)

module.exports = router;
