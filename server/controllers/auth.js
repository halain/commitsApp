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




//Login user
const loginUser = async (req = request, res = response) => {
    
    const { email, password } = req.body;

    try {
        //find user in DB by email
        const userDB = await User.findOne( { email } );

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                msg: 'Wrong credentials'
            });
        }

        //validate password
        const validPassword = bcrypt.compareSync( password, userDB.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Wrong credentials'
            });
        }

        // TODO: generate token
        

        //services response
        res.json({
            ok: true,
            uid: userDB.id,
            name: userDB.name,
            email: userDB.email
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Login Server Error, contact the administrator' 
        });    
    }
    
};



module.exports = {
    createUser,
    loginUser
}