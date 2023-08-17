const express = require('express');
const router = express.Router();
const skillsCtrl = require("../controllers/skills")

// GET /skills (index)
router.get('/', skillsCtrl.index)
// GET /skills/new (new)
router.get("/new", skillsCtrl.new)
// DELETE /skills/:id (delete)
router.delete("/:id", skillsCtrl.delete)
// POST /skills (create)
router.post("/", skillsCtrl.create)
// GET /skills/:id (show)
router.get("/:id", skillsCtrl.show)

module.exports = router;
