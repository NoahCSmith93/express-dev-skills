const Skill = require("../models/skills")

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function index(req, res) {
    res.render("skills/index", {
        skills: Skill.getAll(),
        title: "All Skills"
    })
}

function show(req, res) {
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id),
        title: "Skill Details"
    })
}

function newSkill(req, res) {
    res.render("skills/new", {
        title: "Add a new skill"
    })
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect("/skills")
}

function deleteSkill(req, res) {
    console.log("This is the req.params.id", req.params.id)
    Skill.delete(req.params.id)
    res.redirect("/skills")
}