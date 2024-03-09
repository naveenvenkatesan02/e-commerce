const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const salt = 10
exports.createUser = async(req, res, next)=>{
     const {username, email, phone, password} = req.body;
     console.log(req.body)
    bcrypt.hash(password,salt).then(async(hash)=>{
        await userModel.create({username,email,phone,password:hash});
    })
    res.json({
        success: true,
    })
}
