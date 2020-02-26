var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills-CTRL');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/newSkill', skillsCtrl.new)
router.get('/:id/edit', skillsCtrl.edit);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
