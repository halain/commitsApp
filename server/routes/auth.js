const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');


const router = Router();

//Create new user
router.post('/new',[
    check('name', 'The name is required').notEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').isLength({ min:6 }),
    validateFields
], createUser );

//Login user
router.post('/',[
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').isLength({ min:6 }),
    validateFields
], loginUser );


//Validate and renew token
router.get('/renew', [
    validateJWT
], renewToken );




module.exports = router; 