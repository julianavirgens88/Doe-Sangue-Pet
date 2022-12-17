const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");
const userController = require("../controller/userController")

const { checkAuth } = require("../middlewares/auth");


router.get("/all", checkAuth, userController.getAll);
router.post("/create", userController.createUser);
router.post("/login", authController.login);



module.exports = router;