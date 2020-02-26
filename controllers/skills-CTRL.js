const Skills = require('../models/skill-MDL');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit
}

function index(req, res) {
    res.render('skills/skills', {
        devSkills: Skills.getAll(),
        title: 'MY SKILLS'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function newSkill(req, res) {
    res.render('skills/newSkill');
}

function create(req, res) {
    console.log('from the ctrl', req.body)
    Skills.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skills.delete(req.params.id);
    res.redirect('/skills');
}


function edit(req, res) {
    console.log(req.params.id);
    res.render('skills/edit', {
      skill: Skills.getOne(req.params.id),
      skillNum: req.params.id
    });
  }