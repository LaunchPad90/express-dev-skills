devSkills = [
    { skill: 'HTML', heardOf: true, proficient: true },
    { skill: 'Javascript', heardOf: true, proficient: false },
    { skill: 'CSS', heardOf: true, proficient: true },
    { skill: 'node.js', heardOf: true, proficient: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteSkill
}

function getAll() {
    return devSkills;
}

function getOne(id) {
    console.log(id, devSkills[id])
    return devSkills[id];
}

function create(skill) {
    devSkills.push(skill);
}

function deleteSkill(skill, id) {
    devSkills.splice(id, 1);
}