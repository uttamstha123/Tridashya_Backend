const router = require("express").Router();
const { registerUser, loginUser,getUser } = require("../controller/userController");
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get('/:id',getUser);
module.exports = router;
