const skills = [
    { id: 292470, skill: "Javascript", learned: true, confidence: 4 },
    { id: 115958, skill: "HTML", learned: true, confidence: 5 },
    { id: 119486, skill: "CSS", learned: true, confidence: 3 },
    { id: 156667, skill: "Express", learned: false, confidence: 3 },
    { id: 405496, skill: "Python", learned: false, confidence: 0 }
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}