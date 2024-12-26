const express = require("express");
const { addDetails } = require("../controller/details.controller");
// const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", addDetails);

module.exports = router;
