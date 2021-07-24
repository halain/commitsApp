const { Router } = require('express');
const { check } = require('express-validator');
const { createUser } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');


const router = Router();

//Create new user
router.post('/new',[
    check('name', 'The name is required').notEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').isLength({ min:6 }),
    validateFields
], createUser );




module.exports = router; 