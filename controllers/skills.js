const Skill = require("../models/todo")

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render("skills/index", {
        skill: Skill.getAll(),
        title: "All Skills"
    })
}

function show(req, res) {
    res.render("skills/show", {
        skill: Skill.getOne(),
        title: "Skill Details"
    })
}