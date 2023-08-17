const express = require('express');
const router = express.Router();
const skillsCtrl = require("../controllers/skills")

// GET /skills (index)
router.get('/', skillsCtrl.index)
// Get /skills/:id (show)
router.get("/:id", skillsCtrl.show)

module.exports = router;
