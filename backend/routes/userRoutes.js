const router = require("express").Router();
const { registerUser, loginUser } = require("../controller/userController");
router.post("/signup", registerUser);
router.post("/login", loginUser);
module.exports = router;
