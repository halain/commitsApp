const { Router } = require('express');
const { check } = require('express-validator');
const { getCommits } = require('../controllers/commits');
const { validateFields } = require('../middlewares/validate-fields');


const router = Router();

//Get Commits from github
router.post('/',[
    check('userGithub', 'The userGithub is required').notEmpty(),
    check('repository', 'The repository is required').notEmpty(),
    validateFields,
], getCommits );




module.exports = router; 