const { response, request } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');



//Create new user
const createUser = async (req = request, res = response) => {
    
    const { email, name, password } = req.body;

    try {
        //verify unique email
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'The email has already been taken' 
            });
        }
        
        //user instances
        user = new User( req.body );

        //password encrypt
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        //store user in DB
        await user.save();

        // TODO: generate token
       

        //services response
        return res.status(201).json({
            ok: true,
            uid: user.id,
            name,
            email
        });
         
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error, contact the administrator' 
        })    
    }

};



module.exports = {
    createUser
}