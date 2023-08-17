const skills = [
    { id: 292470, skill: "Javascript", learned: true, confidence: 4 },
    { id: 115958, skill: "HTML", learned: true, confidence: 5 },
    { id: 119486, skill: "CSS", learned: true, confidence: 3 },
    { id: 156667, skill: "Express", learned: false, confidence: 3 },
    { id: 405496, skill: "Python", learned: false, confidence: 0 }
]

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteSkill
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(newSkill) {
    newSkill.id = Date.now() % 1000000
    newSkill.learned = false
    skills.push(newSkill)
}

function deleteSkill(id) {
    id = parseInt(id)
    console.log("This is the id passed into deleteSkill", id)
    skills.splice(skills.findIndex(skill => skill.id === id), 1)
}
