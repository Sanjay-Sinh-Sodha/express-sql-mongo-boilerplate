"use strict";
const registerController = require("../../controllers/apis/register");
const loginController = require("../../controllers/apis/login");
const dashboardController = require("../../controllers/apis/dashboard");
const companyController = require("../../../dbcontroller").company;
const imageController = require("../../controllers/apis/thumbor");

const express = require("express");
let router = express.Router();

router.post("/register", registerController.registerUser);
router.use("/login", loginController);
router.use("/dashboard", dashboardController);
router.post("/company/add_with_branches", companyController.addWithBranches);
router.use("/image/edit", imageController);

module.exports = router;
