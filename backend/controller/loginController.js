const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.loginUser = async(req, res, next)=>{
     const {email, password} = req.body;
     userModel.findOne({ email: email }).then((user) => {
        if (user) {
          bcrypt.compare(password, user.password).then((result)=>{
            const name = user.username;
            const token = jwt.sign({name},"secert-key",{expiresIn: '1d'});
            res.cookie('token',token)
            res.json({
                name,
                message:"Success"
            })
          })
     }  
    })
}
